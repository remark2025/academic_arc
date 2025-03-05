
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Book, Target, Timer, Award } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-8",
        isScrolled
          ? "glass border-b border-neutral-200/20 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:flex"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
            
            <Link 
              to="/" 
              className="text-2xl font-semibold text-primary tracking-tight transition-opacity hover:opacity-80"
            >
              Mastery
            </Link>
          </div>

          {/* Header buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Chapter Selection */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Book className="h-4 w-4" />
                  Chapter 1
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-48">
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start">Chapter 1</Button>
                  <Button variant="ghost" className="w-full justify-start">Chapter 2</Button>
                  <Button variant="ghost" className="w-full justify-start">Chapter 3</Button>
                  <Button variant="ghost" className="w-full justify-start">Chapter 4</Button>
                  <Button variant="ghost" className="w-full justify-start">Chapter 5</Button>
                </div>
              </PopoverContent>
            </Popover>

            {/* Set Objective */}
            <Button variant="outline" className="gap-2">
              <Target className="h-4 w-4" />
              Set Objective
            </Button>

            {/* Timer Mode */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Timer className="h-4 w-4" />
                  Timer Mode
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-48">
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start">Timer Mode</Button>
                  <Button variant="ghost" className="w-full justify-start">Pomodoro Mode</Button>
                  <Button variant="ghost" className="w-full justify-start">Level Mode</Button>
                  <Button variant="ghost" className="w-full justify-start">Exam Mode</Button>
                  <Button variant="ghost" className="w-full justify-start">Manual Mode</Button>
                </div>
              </PopoverContent>
            </Popover>

            {/* Rank */}
            <Button variant="outline" className="gap-2">
              <Award className="h-4 w-4" />
              Rank
            </Button>

            {/* Sign In button */}
            <Link to="/auth">
              <Button size="default" variant="default" className="rounded-full px-6">
                Sign In
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden pt-4 pb-6 px-6 space-y-1 glass mt-2 rounded-xl">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Book className="h-4 w-4" />
              Chapter 1
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Target className="h-4 w-4" />
              Set Objective
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Timer className="h-4 w-4" />
              Timer Mode
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Award className="h-4 w-4" />
              Rank
            </Button>
          </div>
          <div className="pt-2">
            <Link to="/auth" className="w-full">
              <Button className="w-full rounded-lg" size="lg">
                Sign In
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
