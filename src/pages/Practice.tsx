
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Clock, Zap, Activity, Dumbbell } from "lucide-react";
import TransitionWrapper from "@/components/UI/TransitionWrapper";
import GlassPanel from "@/components/UI/GlassPanel";

const practiceCategories = [
  {
    id: "adaptive",
    name: "Adaptive Practice",
    icon: <Zap className="w-5 h-5" />,
    description: "Automatically adjusts to your skill level",
    sessions: [
      { id: "beginner", name: "Beginner", difficulty: "Easy", duration: "15 min" },
      { id: "intermediate", name: "Intermediate", difficulty: "Medium", duration: "20 min" },
      { id: "advanced", name: "Advanced", difficulty: "Hard", duration: "30 min" },
    ]
  },
  {
    id: "timed",
    name: "Timed Sessions",
    icon: <Clock className="w-5 h-5" />,
    description: "Practice with time constraints",
    sessions: [
      { id: "quick", name: "Quick Session", difficulty: "Various", duration: "5 min" },
      { id: "standard", name: "Standard Session", difficulty: "Various", duration: "15 min" },
      { id: "extended", name: "Extended Session", difficulty: "Various", duration: "30 min" },
    ]
  },
  {
    id: "focused",
    name: "Focused Practice",
    icon: <Activity className="w-5 h-5" />,
    description: "Target specific areas for improvement",
    sessions: [
      { id: "weak-areas", name: "Weak Areas", difficulty: "Custom", duration: "20 min" },
      { id: "spaced-repetition", name: "Spaced Repetition", difficulty: "Custom", duration: "25 min" },
      { id: "challenge", name: "Challenge Mode", difficulty: "Hard", duration: "15 min" },
    ]
  }
];

const Practice = () => {
  const [selectedTab, setSelectedTab] = useState("adaptive");

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-6">
        <TransitionWrapper animation="slide-up">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider bg-primary/10 text-primary rounded-full">
              CHOOSE YOUR SESSION
            </span>
            <h1 className="text-4xl font-semibold mb-4">Practice Dashboard</h1>
            <p className="text-xl text-muted-foreground">
              Select your preferred practice mode to begin mastering your skills.
            </p>
          </div>
        </TransitionWrapper>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="adaptive" value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              {practiceCategories.map(category => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2 py-3">
                  {category.icon}
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {practiceCategories.map(category => (
              <TabsContent key={category.id} value={category.id} className="mt-4">
                <TransitionWrapper animation="fade-in">
                  <div className="mb-8">
                    <h2 className="text-2xl font-medium mb-2">{category.name}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {category.sessions.map((session, index) => (
                      <TransitionWrapper 
                        key={session.id} 
                        animation="slide-up" 
                        delay={index * 100}
                      >
                        <Card className="overflow-hidden border-border/50 hover:shadow-md transition-all">
                          <CardHeader>
                            <CardTitle>{session.name}</CardTitle>
                            <CardDescription>
                              <div className="flex items-center gap-2 mt-1">
                                <Dumbbell className="w-4 h-4 text-muted-foreground" />
                                <span>Difficulty: {session.difficulty}</span>
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <Clock className="w-4 h-4 text-muted-foreground" />
                                <span>{session.duration}</span>
                              </div>
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Button className="w-full group">
                              Start Session
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </CardContent>
                        </Card>
                      </TransitionWrapper>
                    ))}
                  </div>
                </TransitionWrapper>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <TransitionWrapper animation="slide-up" delay={300} className="mt-20">
          <GlassPanel className="p-8 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-medium mb-4">Resume Your Last Session</h3>
                <p className="text-muted-foreground mb-6">
                  Continue where you left off in your learning journey. Your progress has been saved.
                </p>
                <Button className="group">
                  Continue Practice
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="md:w-1/2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-8 text-center">
                <div className="text-5xl font-bold text-primary mb-2">75%</div>
                <p className="text-muted-foreground">Progress in current session</p>
              </div>
            </div>
          </GlassPanel>
        </TransitionWrapper>
      </div>
    </div>
  );
};

export default Practice;
