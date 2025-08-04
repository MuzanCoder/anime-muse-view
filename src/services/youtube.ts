export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

export const getMuseAsiaVideos = async (): Promise<YouTubeVideo[]> => {
  const res = await fetch('http://localhost:5000/api/youtube/muse-asia');
  if (!res.ok) {
    throw new Error('Failed to fetch videos');
  }
  return res.json();
};
