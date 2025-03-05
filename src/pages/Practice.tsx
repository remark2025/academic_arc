import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Bookmark, 
  Book, 
  MessageSquare, 
  Quote, 
  FileText, 
  Clock,
  Menu,
  X,
  Target,
  Timer,
  BarChart,
  Tag,
  Home,
  Settings
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Practice = () => {
  const [tabValue, setTabValue] = useState("problem");
  const [timer, setTimer] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showObjectiveModal, setShowObjectiveModal] = useState(false);
  const [objectiveTab, setObjectiveTab] = useState("questions");
  const [questionCount, setQuestionCount] = useState(20);
  const [progress, setProgress] = useState(30); // Example progress value
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Sample problem data 
  const currentProblem = {
    question: "What is the probability of rolling a 15 in a single roll of a fair 25-sided die?",
    options: [
      { id: "A", text: "1/25" },
      { id: "B", text: "1/15" },
      { id: "C", text: "15/25" },
      { id: "D", text: "3/5" }
    ],
    solution: "The probability of rolling a 15 on a fair 25-sided die is 1/25 because there is exactly one face with the number 15, and there are 25 possible equally likely outcomes.",
    quotes: [
      "Probability theory tells us how likely an event is to occur based on the total number of possible outcomes.",
      "In a fair die, all outcomes have an equal probability of occurring."
    ]
  };

  // Timer effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Format timer in mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Handle click outside sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const setObjective = () => {
    toast({
      title: "Objective Set",
      description: `You'll practice ${questionCount} questions`,
    });
    setShowObjectiveModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F6F6F7] to-[#F1F1F1]">
      {/* Sidebar */}
      <div 
        ref={sidebarRef}
        className={cn(
          "fixed top-0 left-0 h-full bg-white shadow-lg w-64 z-50 transition-transform duration-300 overflow-auto",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="font-bold text-xl text-primary">Mastery</div>
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="p-4 space-y-6">
          {/* Navigation links */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-500 mb-2">NAVIGATION</div>
            <Link to="/" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
              <Home className="h-5 w-5 text-gray-500" />
              <span>Home</span>
            </Link>
            <Link to="/practice" className="flex items-center gap-3 p-2 bg-gray-100 rounded-md text-primary">
              <Target className="h-5 w-5" />
              <span>Practice</span>
            </Link>
            <Link to="/dashboard" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
              <BarChart className="h-5 w-5 text-gray-500" />
              <span>Dashboard</span>
            </Link>
            <Link to="/about" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
              <FileText className="h-5 w-5 text-gray-500" />
              <span>About</span>
            </Link>
            <Link to="/settings" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
              <Settings className="h-5 w-5 text-gray-500" />
              <span>Settings</span>
            </Link>
          </div>

          {/* Practice Options */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-500 mb-2">PRACTICE OPTIONS</div>
            
            {/* Chapter selection */}
            <div className="space-y-1">
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                <Book className="h-5 w-5 text-gray-500" />
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" className="flex w-full justify-start p-0 m-0 h-auto">
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
              </div>
            </div>
            
            {/* Set objective button */}
            <button 
              onClick={() => setShowObjectiveModal(true)}
              className="flex w-full items-center gap-3 p-2 hover:bg-gray-100 rounded-md"
            >
              <Target className="h-5 w-5 text-gray-500" />
              <span>Set Objective</span>
            </button>
            
            {/* Timer mode selection */}
            <div className="space-y-1">
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                <Timer className="h-5 w-5 text-gray-500" />
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" className="flex w-full justify-start p-0 m-0 h-auto">
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
              </div>
            </div>
          </div>
          
          <Separator />
          
          {/* Settings or other links */}
          <div className="pt-4">
            <Link to="/settings" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md">
              <Settings className="h-5 w-5 text-gray-500" />
              <span>Settings</span>
            </Link>
          </div>
        </div>
      </div>

      {/* We're removing the custom header since we'll use the global Header component */}

      <div className="container max-w-6xl mx-auto px-6 py-6 pt-20">
        {/* Progress bar and timer on the same line */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex-grow max-w-md mr-4">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Progress</span>
              <span>30%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          <div className="bg-white px-3 py-1.5 rounded-lg shadow-sm flex items-center space-x-1.5 text-gray-700">
            <Clock className="h-4 w-4 text-[#33C3F0]" />
            <span className="font-mono text-sm">{formatTime(timer)}</span>
          </div>
        </div>
        
        {/* Problem / Solution / Quotes Tabs */}
        <Tabs 
          defaultValue="problem" 
          value={tabValue} 
          onValueChange={setTabValue}
          className="w-full mb-8 pt-2"
        >
          <TabsList className="w-full max-w-sm mx-auto grid grid-cols-3 bg-[#edf2f7] p-0.5 rounded-md">
            <TabsTrigger 
              value="problem" 
              className="data-[state=active]:bg-white data-[state=active]:text-[#33C3F0] rounded-md py-1 text-sm"
            >
              Problem
            </TabsTrigger>
            <TabsTrigger 
              value="solution" 
              className="data-[state=active]:bg-white data-[state=active]:text-[#33C3F0] rounded-md py-1 text-sm"
            >
              Solution
            </TabsTrigger>
            <TabsTrigger 
              value="quotes" 
              className="data-[state=active]:bg-white data-[state=active]:text-[#33C3F0] rounded-md py-1 text-sm"
            >
              Quotes
            </TabsTrigger>
          </TabsList>

          {/* Problem Content */}
          <TabsContent value="problem" className="mt-6">
            <Card className="shadow-sm border border-gray-100 p-8 bg-white rounded-xl">
              <div className="flex justify-between">
                <div className="w-full max-w-2xl">
                  <h2 className="text-xl font-medium text-gray-800 mb-8">
                    {currentProblem.question}
                  </h2>
                
                  {/* Empty space for work/notes */}
                  <div className="w-full h-60 border border-gray-200 rounded-2xl mb-6">
                    {/* Empty space for working through the problem */}
                  </div>
                
                  <div className="mt-10 flex justify-center items-center">
                    <Button variant="ghost" className="rounded-full p-3">
                      <ArrowLeft className="h-5 w-5" />
                      <span className="sr-only">Previous question</span>
                    </Button>
                    <span className="mx-4 text-gray-400">Go to question...</span>
                    <Button variant="ghost" className="rounded-full p-3">
                      <ArrowRight className="h-5 w-5" />
                      <span className="sr-only">Next question</span>
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-4">
                  <Button variant="ghost" className="p-2">
                    <Share2 className="h-5 w-5 text-gray-500" />
                    <span className="sr-only">Share</span>
                  </Button>
                  <Button variant="ghost" className="p-2">
                    <Bookmark className="h-5 w-5 text-gray-500" />
                    <span className="sr-only">Bookmark</span>
                  </Button>
                  <Button variant="ghost" className="p-2">
                    <Tag className="h-5 w-5 text-gray-500" />
                    <span className="sr-only">Tag</span>
                  </Button>
                  <Button variant="ghost" className="p-2">
                    <MessageSquare className="h-5 w-5 text-gray-500" />
                    <span className="sr-only">Comment</span>
                  </Button>
                </div>
              </div>
            </Card>
            
            {/* Answer Options */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {currentProblem.options.map((option) => (
                <div 
                  key={option.id}
                  className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex items-center">
                    <span className="font-medium mr-2">Option {option.id}:</span>
                    <span>{option.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Solution Content */}
          <TabsContent value="solution" className="mt-6">
            <Card className="shadow-sm border border-gray-100 p-8 bg-white rounded-xl">
              <h2 className="text-xl font-medium text-gray-800 mb-6">Solution</h2>
              <p className="text-gray-700 leading-relaxed">
                {currentProblem.solution}
              </p>
            </Card>
          </TabsContent>

          {/* Quotes Content */}
          <TabsContent value="quotes" className="mt-6">
            <Card className="shadow-sm border border-gray-100 p-8 bg-white rounded-xl">
              <h2 className="text-xl font-medium text-gray-800 mb-6 flex items-center">
                <Quote className="h-5 w-5 mr-2 text-[#33C3F0]" />
                Notable Quotes
              </h2>
              
              <div className="space-y-6">
                {currentProblem.quotes.map((quote, index) => (
                  <div key={index} className="border-l-4 border-[#33C3F0] pl-4 py-2">
                    <p className="text-gray-600 italic">{quote}</p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button 
            className="bg-[#33C3F0] hover:bg-[#33C3F0]/90 rounded-full w-12 h-12 flex items-center justify-center"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          
          <Button 
            className="bg-[#33C3F0] hover:bg-[#33C3F0]/90 rounded-full w-12 h-12 flex items-center justify-center"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Set Objective Modal */}
      {showObjectiveModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Set Your Practice Objective</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowObjectiveModal(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-4">
              <div className="flex mb-4 bg-gray-100 rounded-lg p-1">
                <button 
                  className={cn(
                    "flex-1 py-2 text-center rounded-md transition-colors", 
                    objectiveTab === "questions" ? "bg-white shadow-sm" : "hover:bg-white/50"
                  )}
                  onClick={() => setObjectiveTab("questions")}
                >
                  Questions
                </button>
                <button 
                  className={cn(
                    "flex-1 py-2 text-center rounded-md transition-colors", 
                    objectiveTab === "time" ? "bg-white shadow-sm" : "hover:bg-white/50"
                  )}
                  onClick={() => setObjectiveTab("time")}
                >
                  Time
                </button>
              </div>

              {objectiveTab === "questions" && (
                <div>
                  <Input 
                    type="number" 
                    value={questionCount} 
                    onChange={(e) => setQuestionCount(parseInt(e.target.value) || 0)}
                    className="mb-4" 
                  />
                </div>
              )}

              {objectiveTab === "time" && (
                <div>
                  <Input 
                    type="number" 
                    placeholder="Minutes" 
                    className="mb-4"
                  />
                </div>
              )}

              <div className="flex justify-end">
                <Button 
                  className="bg-[#00BCD4] hover:bg-[#00BCD4]/90 text-white rounded-full px-6"
                  onClick={setObjective}
                >
                  Set Objective
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Practice;
