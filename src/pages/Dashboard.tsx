
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, BarChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Calendar, Clock, Trophy, ArrowUpRight, Activity, Calendar as CalendarIcon } from "lucide-react";
import TransitionWrapper from "@/components/UI/TransitionWrapper";
import GlassPanel from "@/components/UI/GlassPanel";

// Mock data
const progressData = [
  { day: "Mon", score: 65, time: 25 },
  { day: "Tue", score: 59, time: 20 },
  { day: "Wed", score: 80, time: 40 },
  { day: "Thu", score: 81, time: 30 },
  { day: "Fri", score: 56, time: 15 },
  { day: "Sat", score: 85, time: 45 },
  { day: "Sun", score: 90, time: 60 },
];

const skillsData = [
  { name: "Problem Solving", mastery: 75 },
  { name: "Critical Thinking", mastery: 65 },
  { name: "Pattern Recognition", mastery: 80 },
  { name: "Speed", mastery: 60 },
  { name: "Accuracy", mastery: 85 },
];

const achievements = [
  { id: 1, name: "First Session", description: "Complete your first practice session", completed: true },
  { id: 2, name: "Quick Learner", description: "Complete 5 consecutive daily sessions", completed: true },
  { id: 3, name: "Persistence", description: "Practice for 10 days total", completed: false },
  { id: 4, name: "Perfectionist", description: "Score 100% in any session", completed: false },
];

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");
  
  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-6">
        <TransitionWrapper animation="slide-up">
          <div className="max-w-4xl mx-auto mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-4xl font-semibold mb-2">Your Progress</h1>
                <p className="text-muted-foreground">
                  Track your learning journey and see your improvements
                </p>
              </div>
              <Button>
                Start New Session
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </TransitionWrapper>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <TransitionWrapper animation="slide-up" delay={100}>
            <GlassPanel className="p-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-lg bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Practice Time</p>
                  <h3 className="text-3xl font-bold mt-1">24h 35m</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    <span className="text-green-500">↑ 12%</span> from last week
                  </p>
                </div>
              </div>
            </GlassPanel>
          </TransitionWrapper>
          
          <TransitionWrapper animation="slide-up" delay={200}>
            <GlassPanel className="p-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-lg bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Streak</p>
                  <h3 className="text-3xl font-bold mt-1">7 Days</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    <span className="text-green-500">↑ 3 days</span> from previous best
                  </p>
                </div>
              </div>
            </GlassPanel>
          </TransitionWrapper>
          
          <TransitionWrapper animation="slide-up" delay={300}>
            <GlassPanel className="p-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-lg bg-primary/10">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Achievements</p>
                  <h3 className="text-3xl font-bold mt-1">2/10</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    2 completed, 8 remaining
                  </p>
                </div>
              </div>
            </GlassPanel>
          </TransitionWrapper>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Progress Charts */}
          <TransitionWrapper animation="fade-in" delay={400} className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Progress Over Time</CardTitle>
                    <CardDescription>Your performance trends</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant={selectedPeriod === "week" ? "default" : "outline"} 
                      size="sm"
                      onClick={() => setSelectedPeriod("week")}
                    >
                      Week
                    </Button>
                    <Button 
                      variant={selectedPeriod === "month" ? "default" : "outline"} 
                      size="sm"
                      onClick={() => setSelectedPeriod("month")}
                    >
                      Month
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={progressData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="day" stroke="#888888" />
                      <YAxis stroke="#888888" />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="score" 
                        name="Score" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={2}
                        activeDot={{ r: 8 }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="time" 
                        name="Time (mins)" 
                        stroke="#888888" 
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TransitionWrapper>

          {/* Skills */}
          <TransitionWrapper animation="fade-in" delay={500}>
            <Card>
              <CardHeader>
                <CardTitle>Skill Mastery</CardTitle>
                <CardDescription>Breakdown of your skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      layout="vertical"
                      data={skillsData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis type="number" stroke="#888888" />
                      <YAxis dataKey="name" type="category" width={100} stroke="#888888" />
                      <Tooltip />
                      <Bar dataKey="mastery" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TransitionWrapper>
        </div>

        {/* Recent Activity & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TransitionWrapper animation="slide-up" delay={600}>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest practice sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-start space-x-4 border-b border-border/50 pb-4 last:border-0">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Activity className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">Practice Session #{item}</p>
                          <span className="text-xs text-muted-foreground">
                            {item === 1 ? "Today" : item === 2 ? "Yesterday" : "3 days ago"}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Completed {30 - (item * 5)} problems in {20 + (item * 5)} minutes
                        </p>
                        <div className="flex items-center text-sm">
                          <span className="text-primary">Score: {85 - (item * 5)}%</span>
                          <span className="mx-2 text-muted-foreground">•</span>
                          <span className="text-muted-foreground">Difficulty: {item === 1 ? "Hard" : item === 2 ? "Medium" : "Easy"}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TransitionWrapper>

          <TransitionWrapper animation="slide-up" delay={700}>
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Your learning milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {achievements.map((achievement) => (
                    <div 
                      key={achievement.id} 
                      className={`flex items-start space-x-4 pb-4 border-b border-border/50 last:border-0 ${
                        achievement.completed ? "" : "opacity-50"
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        achievement.completed ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                      }`}>
                        <Trophy className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="font-medium">{achievement.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                        <div className="text-xs font-medium">
                          {achievement.completed ? (
                            <span className="text-green-500">Completed</span>
                          ) : (
                            <span className="text-muted-foreground">In progress</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TransitionWrapper>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
