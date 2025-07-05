import mongoose from 'mongoose';

const EpisodeSchema = new mongoose.Schema({
  epNumber: Number,
  youtubeId: String
});

const AnimeSchema = new mongoose.Schema({
  title: String,
  genre: String,
  year: Number,
  rating: Number,
  thumbnail: String,
  episodes: [EpisodeSchema]
});

export default mongoose.model('Anime', AnimeSchema);
