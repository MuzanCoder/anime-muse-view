import express from 'express';

const router = express.Router();

router.get('/muse-asia', async (req, res) => {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Missing YOUTUBE_API_KEY' });
    }
    const channelId = 'UCmOu8FwLycEBqfPjGcOIMbQ';
    const maxResults = 10;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&order=date&type=video&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const videos = data.items?.map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default.url,
      publishedAt: item.snippet.publishedAt,
    })) || [];
    res.json(videos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
});

export default router;
