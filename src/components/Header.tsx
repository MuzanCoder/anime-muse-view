import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, Bell, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
              AnimeStream
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Home
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Anime
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Movies
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Popular
          </Button>
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search anime..." 
              className="pl-10 w-64 bg-secondary/50 border-border focus:border-primary"
            />
          </div>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5 sm:hidden" />
            <Bell className="h-5 w-5 hidden sm:block" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};