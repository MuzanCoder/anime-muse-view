import express from 'express';
import Anime from '../models/Anime.js';

const router = express.Router();

// Public route
router.get('/', async (req, res) => {
  const data = await Anime.find();
  res.json(data);
});

// Public: Get single anime
router.get('/:id', async (req, res) => {
  const anime = await Anime.findById(req.params.id);
  res.json(anime);
});

// Admin only (you can later protect this)
router.post('/', async (req, res) => {
  const anime = new Anime(req.body);
  await anime.save();
  res.status(201).json("Anime added");
});

export default router;
