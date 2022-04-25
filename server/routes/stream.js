import express from 'express';


import { createStream, fetch_sessions,getStreamByName, getStreamById, getStreams,setRecording,upload,uploadImage, viewsInc,getAllStreamsByName } from '../controllers/stream.js';

const router = express.Router();

router.post('/uploadStreamImg',uploadImage,upload)

router.post('/', createStream);
router.post('/viewsInc/:id', viewsInc);
router.get('/allStreams', getStreams);
router.get('/getStreamById/:id',getStreamById)
router.get('/fetchSessions/:meetid',fetch_sessions)
router.get('/setStreamRecorded/:meetid',setRecording)
router.get('/getStreamByName/:name',getStreamByName)
router.get('/getAllStreamsByName/:name',getAllStreamsByName)




export default router;