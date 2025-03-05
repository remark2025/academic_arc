
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Menu, X, Book, Target, Timer, Award, 
  Home, BarChart, Settings, FileText
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Circular Navigation Panel */}
      <div 
        className={cn(
          "fixed z-50 left-5 top-1/2 -translate-y-1/2 transition-transform duration-300",
          sidebarOpen ? "translate-x-0" : "-translate-x-2"
        )}
      >
        {/* Toggle Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="rounded-full h-14 w-14 shadow-md bg-white text-primary border-primary/20 hover:bg-primary/5 absolute -right-7 top-1/2 -translate-y-1/2 z-10"
        >
          {sidebarOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        {/* Circular Navigation Menu */}
        <div className={cn(
          "bg-white rounded-r-3xl shadow-lg pt-6 pb-10 px-4 w-16 flex flex-col items-center space-y-8 transition-all duration-300",
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}>
          <Link to="/" className="relative group">
            <div className="absolute -right-9 bg-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
              Home
            </div>
            <Button 
              variant={location.pathname === "/" ? "default" : "ghost"} 
              size="icon" 
              className={cn("rounded-full", location.pathname === "/" && "bg-primary text-white")}
            >
              <Home className="h-5 w-5" />
            </Button>
          </Link>
          
          <Link to="/practice" className="relative group">
            <div className="absolute -right-14 bg-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
              Practice
            </div>
            <Button 
              variant={location.pathname === "/practice" ? "default" : "ghost"} 
              size="icon" 
              className={cn("rounded-full", location.pathname === "/practice" && "bg-primary text-white")}
            >
              <Target className="h-5 w-5" />
            </Button>
          </Link>
          
          <Link to="/dashboard" className="relative group">
            <div className="absolute -right-14 bg-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
              Progress
            </div>
            <Button 
              variant={location.pathname === "/dashboard" ? "default" : "ghost"} 
              size="icon" 
              className={cn("rounded-full", location.pathname === "/dashboard" && "bg-primary text-white")}
            >
              <BarChart className="h-5 w-5" />
            </Button>
          </Link>
          
          <Link to="/settings" className="relative group">
            <div className="absolute -right-14 bg-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
              Settings
            </div>
            <Button 
              variant={location.pathname === "/settings" ? "default" : "ghost"} 
              size="icon" 
              className={cn("rounded-full", location.pathname === "/settings" && "bg-primary text-white")}
            >
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
          
          <Link to="/about" className="relative group">
            <div className="absolute -right-13 bg-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
              About
            </div>
            <Button 
              variant={location.pathname === "/about" ? "default" : "ghost"} 
              size="icon" 
              className={cn("rounded-full", location.pathname === "/about" && "bg-primary text-white")}
            >
              <FileText className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      <header
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-300 py-4 px-6 md:px-8",
          isScrolled
            ? "glass border-b border-neutral-200/20 shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Using md:hidden to hide this on larger screens since we now have the circular navigation */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Toggle menu"
                onClick={() => setSidebarOpen(!sidebarOpen)}
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

            {/* Mobile menu button - not needed since we have the circular navigation */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle menu"
            >
              {sidebarOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
