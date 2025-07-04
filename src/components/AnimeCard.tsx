import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Calendar, Star } from "lucide-react";

interface AnimeCardProps {
  title: string;
  thumbnail: string;
  episode: string;
  rating: number;
  year: string;
  genre: string;
  onClick: () => void;
}

export const AnimeCard = ({ title, thumbnail, episode, rating, year, genre, onClick }: AnimeCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
      <CardContent className="p-0">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Button
            onClick={onClick}
            size="icon"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-primary/90 hover:bg-primary"
          >
            <Play className="h-6 w-6" />
          </Button>
          <div className="absolute top-2 right-2 flex gap-1">
            <Badge variant="secondary" className="text-xs">
              {episode}
            </Badge>
          </div>
          <div className="absolute top-2 left-2">
            <div className="flex items-center gap-1 bg-background/80 rounded-full px-2 py-1">
              <Star className="h-3 w-3 fill-accent text-accent" />
              <span className="text-xs font-medium">{rating}</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-sm mb-2 line-clamp-2 leading-tight">{title}</h3>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{year}</span>
            </div>
            <Badge variant="outline" className="text-xs">
              {genre}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};