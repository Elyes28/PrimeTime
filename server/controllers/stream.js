import express from 'express';
import mongoose from 'mongoose';
import logger from '../helpers/logger.js';
import stream from '../models/stream.js';

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

    