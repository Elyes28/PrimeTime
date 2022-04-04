import express from 'express';

import { createStream, getStreamById, getStreams } from '../controllers/stream.js';

const router = express.Router();


router.post('/', createStream);
router.get('/allStreams', getStreams);
router.get('/getStreamById/:id',getStreamById)


export default router;