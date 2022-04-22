import express from "express";
const router = express.Router();
import Recommendation from "../models/recommendation.js";
import Customization from "../models/customization.js";

import cors from "cors";

router.use(cors());

router.get("/", async (req, res) => {
  try {
    const recommendations = await Recommendation.find();
    res.json(recommendations);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.get("/recomAndcustom", async (req, res) => {
  try {
    const recommendations = await Recommendation.find();
    const customizations = await Customization.find();

    var duplicates = recommendations.filter(function (val) {
      return customizations.some(function (o2) {
        console.log(val);
        console.log(o2);
        return (
          o2.type.toLowerCase() === val.type.toLowerCase() &&
          o2.violonBody === val.violonBody &&
          o2.violonStick === val.violonStick &&
          o2.violonChincrest === val.violonChincrest
        ); // return the ones with equal id
      });
    });
    res.json(duplicates);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  console.log(req.body.violonBody);
  const recommendations = new Recommendation({
    type: req.body.type,
    violonBody: req.body.violonBody,
    violonStick: req.body.violonStick,
    violonChincrest: req.body.violonChincrest,
  });

  try {
    const c1 = await recommendations.save();
    res.json(c1);
  } catch (err) {
    res.send("Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const recommendations = await Recommendation.findByIdAndDelete(
      req.params.id
    );
    res.json(recommendations);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const recommendations = await Recommendation.findById(req.params.id);
    if (req.body.violonBody) recommendations.violonBody = req.body.violonBody;
    if (req.body.violonChincrest)
      recommendations.violonChincrest = req.body.violonChincrest;
    if (req.body.violonStick)
      recommendations.violonStick = req.body.violonStick;

    await recommendations.save();
    res.json(recommendations);
  } catch (err) {
    res.send("Error " + err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const recommendations = await Recommendation.findById(req.params.id);
    res.json(recommendations);
  } catch (err) {
    res.send("Error " + err);
  }
});

export default router;
