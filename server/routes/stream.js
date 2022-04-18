import express from 'express';


import { createStream, fetch_sessions, getStreamById, getStreams,upload,uploadImage } from '../controllers/stream.js';

const router = express.Router();

router.post('/uploadStreamImg',uploadImage,upload)

router.post('/', createStream);
router.get('/allStreams', getStreams);
router.get('/getStreamById/:id',getStreamById)
router.get('/fetchSessions',fetch_sessions)


export default router;