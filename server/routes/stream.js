import express from 'express';

import { createStream, getStreams } from '../controllers/stream.js';

const router = express.Router();


router.post('/', createStream);
router.get('/allStreams', getStreams);


export default router;