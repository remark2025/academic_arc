
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Menu, X, Book, Target, Timer, Award, 
  Home, BarChart, Settings, FileText
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showObjectiveModal, setShowObjectiveModal] = useState(false);
  const [showPracticeModeModal, setShowPracticeModeModal] = useState(false);
  const [objectiveTab, setObjectiveTab] = useState("questions");
  const [questionCount, setQuestionCount] = useState(20);
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setObjective = () => {
    toast({
      title: "Objective Set",
      description: `You'll practice ${questionCount} questions`,
    });
    setShowObjectiveModal(false);
  };

  return (
    <>
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
              {/* Sidebar Toggle Button - now positioned BEFORE the logo */}
              <Button
                variant="ghost"
                size="icon"
                className="md:block"
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

              {/* Set Objective - now opens a modal */}
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => setShowObjectiveModal(true)}
                data-header-set-objective
              >
                <Target className="h-4 w-4" />
                Set Objective
              </Button>

              {/* Timer Mode - now opens a modal */}
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => setShowPracticeModeModal(true)}
                data-header-timer-mode
              >
                <Timer className="h-4 w-4" />
                Timer Mode
              </Button>

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
      
      {/* Circular Navigation Panel - moved out of the header */}
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

      {/* Set Objective Modal */}
      <Dialog open={showObjectiveModal} onOpenChange={setShowObjectiveModal}>
        <DialogContent className="bg-white p-0 max-w-md">
          <DialogHeader className="p-4 border-b">
            <DialogTitle className="text-xl font-semibold">Set Your Practice Objective</DialogTitle>
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogHeader>
          
          <div className="p-4">
            <Tabs 
              value={objectiveTab} 
              onValueChange={setObjectiveTab} 
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="questions" className="text-center">Questions</TabsTrigger>
                <TabsTrigger value="time" className="text-center">Time</TabsTrigger>
              </TabsList>
              
              <TabsContent value="questions" className="mt-0">
                <Input 
                  type="number" 
                  value={questionCount} 
                  onChange={(e) => setQuestionCount(parseInt(e.target.value) || 0)}
                  className="mb-4" 
                />
              </TabsContent>
              
              <TabsContent value="time" className="mt-0">
                <Input 
                  type="number" 
                  placeholder="Minutes" 
                  className="mb-4"
                />
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-end">
              <Button 
                onClick={setObjective}
                className="bg-[#33C3F0] hover:bg-[#33C3F0]/90 text-white px-6"
              >
                Set Objective
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Practice Mode Modal */}
      <Dialog open={showPracticeModeModal} onOpenChange={setShowPracticeModeModal}>
        <DialogContent className="bg-white p-0 max-w-md">
          <DialogHeader className="p-4 border-b">
            <DialogTitle className="text-xl font-semibold">Select Practice Mode</DialogTitle>
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogHeader>
          
          <div className="p-4 space-y-2">
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => {
                toast({
                  title: "Timer Mode Selected",
                  description: "You've selected Timer Mode for your practice session",
                });
                setShowPracticeModeModal(false);
              }}
            >
              Timer Mode
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => {
                toast({
                  title: "Pomodoro Mode Selected",
                  description: "You've selected Pomodoro Mode for your practice session",
                });
                setShowPracticeModeModal(false);
              }}
            >
              Pomodoro Mode
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => {
                toast({
                  title: "Level Mode Selected",
                  description: "You've selected Level Mode for your practice session",
                });
                setShowPracticeModeModal(false);
              }}
            >
              Level Mode
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => {
                toast({
                  title: "Exam Mode Selected",
                  description: "You've selected Exam Mode for your practice session",
                });
                setShowPracticeModeModal(false);
              }}
            >
              Exam Mode
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => {
                toast({
                  title: "Manual Mode Selected",
                  description: "You've selected Manual Mode for your practice session",
                });
                setShowPracticeModeModal(false);
              }}
            >
              Manual Mode
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
