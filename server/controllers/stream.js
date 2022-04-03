import express from 'express';
import mongoose from 'mongoose';
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