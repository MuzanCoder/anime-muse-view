import express from 'express';
import { addAnime, getAllAnime } from '../controllers/animeController.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

// Public route - no auth
router.get('/', getAllAnime);

// Protected route - requires JWT
router.post('/', verifyToken, addAnime);

export default router;
