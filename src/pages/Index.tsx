import { useState } from "react";
import { Header } from "@/components/Header";
import { AnimeCard } from "@/components/AnimeCard";
import { VideoPlayer } from "@/components/VideoPlayer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Star } from "lucide-react";

// Sample anime data with Muse Asia content
const animeData = [
  {
    id: "1",
    title: "Demon Slayer: Kimetsu no Yaiba",
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    episode: "EP 44",
    rating: 9.2,
    year: "2024",
    genre: "Action",
    videoId: "VQGcpZ2_YPE" // Sample video ID
  },
  {
    id: "2", 
    title: "Attack on Titan Final Season",
    thumbnail: "https://images.unsplash.com/photo-1606603124734-a6f64c17cb10?w=400&h=600&fit=crop",
    episode: "EP 28",
    rating: 9.5,
    year: "2023",
    genre: "Drama",
    videoId: "SlNpRThS9t8"
  },
  {
    id: "3",
    title: "Jujutsu Kaisen Season 2",
    thumbnail: "https://images.unsplash.com/photo-1617696002096-1a0c8e65e9da?w=400&h=600&fit=crop",
    episode: "EP 23",
    rating: 8.9,
    year: "2023",
    genre: "Supernatural",
    videoId: "4A_X-Dvl0ws"
  },
  {
    id: "4",
    title: "One Piece",
    thumbnail: "https://images.unsplash.com/photo-1606603124734-a6f64c17cb10?w=400&h=600&fit=crop",
    episode: "EP 1100",
    rating: 9.0,
    year: "2024",
    genre: "Adventure",
    videoId: "qIG1PiCyJ7s"
  },
  {
    id: "5",
    title: "My Hero Academia",
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    episode: "EP 158",
    rating: 8.7,
    year: "2024",
    genre: "Superhero",
    videoId: "D5fYOnwYkj4"
  },
  {
    id: "6",
    title: "Chainsaw Man",
    thumbnail: "https://images.unsplash.com/photo-1617696002096-1a0c8e65e9da?w=400&h=600&fit=crop",
    episode: "EP 12",
    rating: 8.8,
    year: "2023",
    genre: "Horror",
    videoId: "v4ylerTL77o"
  }
];

const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState<{ id: string; title: string } | null>(null);

  const handleAnimeClick = (anime: typeof animeData[0]) => {
    setSelectedVideo({ id: anime.videoId, title: anime.title });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/90" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            AnimeStream
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Watch the latest anime episodes and movies from Muse Asia. Your gateway to the best anime content.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              <Star className="mr-2 h-5 w-5" />
              Watch Now
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:border-primary">
              <TrendingUp className="mr-2 h-5 w-5" />
              Trending
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">1000+</h3>
                <p className="text-muted-foreground">Anime Series</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent/20 rounded-lg">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">24/7</h3>
                <p className="text-muted-foreground">Streaming</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/20 rounded-lg">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">HD</h3>
                <p className="text-muted-foreground">Quality</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Content */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Anime</h2>
            <Badge variant="secondary" className="px-4 py-2">
              Muse Asia Official
            </Badge>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {animeData.map((anime) => (
              <AnimeCard
                key={anime.id}
                title={anime.title}
                thumbnail={anime.thumbnail}
                episode={anime.episode}
                rating={anime.rating}
                year={anime.year}
                genre={anime.genre}
                onClick={() => handleAnimeClick(anime)}
              />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Browse by Genre</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Romance", "Thriller", "Slice of Life"].map((genre) => (
              <Button
                key={genre}
                variant="outline"
                className="h-12 border-border hover:border-primary hover:bg-primary/10"
              >
                {genre}
              </Button>
            ))}
          </div>
        </section>
      </main>

      {/* Video Player Modal */}
      <VideoPlayer
        videoId={selectedVideo?.id || ""}
        title={selectedVideo?.title || ""}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
};

export default Index;
