import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { AnimeCard } from "@/components/AnimeCard";
import { VideoPlayer } from "@/components/VideoPlayer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Star } from "lucide-react";
import { getMuseAsiaVideos, YouTubeVideo } from "@/services/youtube";

const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState<{ id: string; title: string } | null>(null);
  const { data: videos = [] } = useQuery<YouTubeVideo[]>({
    queryKey: ["museasia-videos"],
    queryFn: getMuseAsiaVideos,
  });

  const handleVideoClick = (video: YouTubeVideo) => {
    setSelectedVideo({ id: video.id, title: video.title });
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
            {videos.map((video) => (
              <AnimeCard
                key={video.id}
                title={video.title}
                thumbnail={video.thumbnail}
                episode="Video"
                rating={0}
                year={new Date(video.publishedAt).getFullYear().toString()}
                genre="Muse Asia"
                onClick={() => handleVideoClick(video)}
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
