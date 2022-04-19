import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import logger from "./../helpers/logger.js";
import multer from "multer";
import UserModal from "../models/user.js";
import licensekeyModal from "../models/licensekey.js";

const secret = process.env.secret;
const BASE_URL = process.env.BASE_URL;

export const activateAccount = async (req, res) => {
  const { licensekey, userid } = req.body;
  const license_key = await licensekeyModal.findOne({
    license_key: licensekey,
  });
  if (!license_key)
    return res.status(400).json({ message: "this license key is invalid" });
  if (!license_key.isActivated) {
    const user = await UserModal.findOne({ _id: userid });
    var today = new Date();
    today.setDate(today.getDate() + license_key.duration);
    user.active_until = today;
    user.role = license_key.type;
    user.save();
    license_key.isActivated = true;
    license_key.save();
    return res.status(200).json(user);
  } else {
    return res
      .status(400)
      .json({ message: "this license key is already used" });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: "Email adress doesn't exist !" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid password !" });

    const token = jwt.sign(
      { email: oldUser.email, id: oldUser._id },
      process.env.secret,
      {
        expiresIn: "1h",
      }
    );

    console.log(oldUser);

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({
      email,
      password: hashedPassword,
      firstname: `${firstName}`,
      lastname: `${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};
export const forgetPass = async (req, res) => {
  const { email } = req.body;

  try {
    console.log("testing email");
    console.log(req.body);
    const oldUser = await UserModal.findOne({ email });
    //if(oldUser)
    //return res.status(200).json({ message: "User exists" });
    console.log(oldUser);
    if (!oldUser)
      return res.status(400).json({ message: "User doesn't exists" });

    // create reusable transporter object using the default SMTP transport
    var transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "0d5d9886d6c6ab",
        pass: "7d5d2df933392c",
      },
    });
    const token = jwt.sign(
      { email: oldUser.email },
      process.env.MAILING_SECRET,
      { expiresIn: "1h" }
    );
    // send mail with defined transport object
    let info = await transport.sendMail({
      from: "bachq2@gmail.com", // sender address
      to: email, // list of receivers
      subject: "PrimeTime - Passwored recovery", // Subject line
      html: "Hello " + oldUser.name + "<br>" + process.env.BASE_URL + token, // html body
    });

    res.status(200).json({ messgae: "Password recovery email sent !" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};
export const recoverPass = async (req, res) => {
  const { token, password } = req.body;

  try {
    const decodedData = jwt.verify(token, process.env.MAILING_SECRET);
    const oldUser = await UserModal.findOne({ email: decodedData.email });
    console.log(decodedData);
    if (!oldUser)
      return res.status(400).json({ message: "User doesn't exists" });

    const hashedPassword = await bcrypt.hash(password, 12);
    oldUser.password = hashedPassword;
    oldUser
      .save()
      .then((savedDoc) => {
        res.status(200).json({ message: "Password changed sucessfully" });
      })
      .catch((e) => {
        res.status(500).json({ message: "Something went wrong" });
      });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    logger.error(error);
  }
};
// image upload start here
const multerConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../client/public/images/users");
  },
  filename: (req, file, callback) => {
    // const ext= file.mimetype.split('/')[1];
    console.log(req);
    callback(null, `${req.body.username}.jpg`);
  },
});
const uploadd = multer({
  storage: multerConfig,
});
export const uploadImage = uploadd.single("photo");

export const upload = (req, res) => {
  res.status(200).json({
    succes: "success",
  });
};

// image upload ends here

export const updateProfile= async (req,res)=>{
  const {userid}=req.body
  const user = await UserModal.findById(userid)
  const{firstname,lastname,phonenumber,facebook,instagram,youtube,spotify}=req.body
  user.firstname=firstname;
  user.lastname=lastname;
  user.phone=phonenumber;
  user.facebook=facebook;
  user.instagram=instagram;
  user.youtube=youtube;
  user.spotify=spotify;
  user.save()
  return res.status(200).json(user)
}

export const updateChannelDescription= async (req,res)=>{
  const {userid}=req.body
  const user = await UserModal.findById(userid)
  const{text}=req.body
  user.channel_description=text;
  user.save()
  return res.status(200).json(user)
}