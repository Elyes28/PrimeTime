import express from 'express';
import mongoose from 'mongoose';
import logger from '../helpers/logger.js';
import stream from '../models/stream.js';
import multer from "multer";
import fetch from 'node-fetch';


export const createStream = async (req, res) => {
    const post = req.body;
    const newPostMessage = new stream({ ...post })

    try {
        console.log(newPostMessage)
       await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const setRecording = async (req,res) => {
    const meetid = req.params.meetid;
    const streams = await stream.findOne({meetingId:meetid});
    streams.isrecorded=true;
    streams.save();
    return res.status(200).json(streams);
}

export const getStreamByName = async (req, res) => { 
const name = req.params.name;
const streams = await stream.find({streamerName:name,isrecorded:true});
return res.status(200).json(streams);

}


export const getStreamById = async (req, res) => { 
        
    
    try {
        logger.info("tesst");
        const post = await stream.findById(req.params.id);
        
        res.status(200).json(post);
    } catch (error) {
        logger.error("errr");
        res.status(404).json({ message: error.message });
    }
}

    export const getStreams = async (req, res) => { 
        
    
        try {
            logger.info("tesst");
            const post = await stream.find();
            
            res.status(200).json(post);
        } catch (error) {
            logger.error("errr");
            res.status(404).json({ message: error.message });
        }
    }

    // image upload start here
const multerConfig = multer.diskStorage({
    destination : (req,file,callback)=>{
      callback(null,'../client/public/images/Streams')
    },
    filename:(req,file,callback)=>{
     // const ext= file.mimetype.split('/')[1];
      console.log(req);
      callback(null,`${req.body.username}.jpg`);
    }
  })
  const uploadd =multer({
    storage:multerConfig,
  })
  export const uploadImage = uploadd.single('photo')
  
  export const upload = (req,res)=>{
    res.status(200).json({
      succes:'success',
    })
  }
  
  // image upload ends here

export const fetch_sessions = async(req,res)=>{
  const options = {
	method: "GET",
	headers: {
		"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIxYjllMjE1Zi04NTFmLTQyZjQtOTljOS05MWJmMjE0ZDUwMTciLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY1MDIwMTc5OSwiZXhwIjoxNjUwODA2NTk5fQ.6ZNK-yP6xJz9FZG9qG8pNyggYgfhottCAhiU48B86y4",
		"Content-Type": "application/json",
	},
};
const url= `https://api.videosdk.live/v2/sessions/`;
const response = await fetch(url, options);
const data = await response.json();
console.log(data);
res.status(200).json(data)
}