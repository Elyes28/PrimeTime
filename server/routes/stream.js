import express from 'express';

import { createStream } from '../controllers/stream.js';

const router = express.Router();


router.post('/', createStream);


export default router;