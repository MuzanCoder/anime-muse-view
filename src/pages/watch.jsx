// src/pages/Watch.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Watch = () => {
  const { id, ep } = useParams(); // expects route like /watch/:id/:ep
  const [anime, setAnime] = useState(null);
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    const fetchAnime = async () => {
      const res = await fetch(`http://localhost:5000/api/anime/${id}`);
      const data = await res.json();
      setAnime(data);
      const selectedEp = data.episodes.find(e => e.epNumber === parseInt(ep));
      setEpisode(selectedEp);
    };
    fetchAnime();
  }, [id, ep]);

  if (!anime || !episode) return <div>Loading...</div>;

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-2">{anime.title} - Episode {ep}</h1>
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${episode.youtubeId}`}
        title={`Episode ${ep}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="rounded-xl shadow-lg"
      ></iframe>
    </div>
  );
};

export default Watch;
