
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Share2, Bookmark, Book, MessageSquare, Quote, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

const Practice = () => {
  const [tabValue, setTabValue] = useState("problem");
  
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F6F6F7] to-[#F1F1F1] pt-14">
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between z-10">
        <div className="flex items-center">
          <span className="text-[#33C3F0] text-xl font-medium">Academic Arc</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <Button variant="ghost" className="flex items-center gap-2 text-gray-700">
            <FileText className="h-4 w-4" />
            <span>Chapter 1</span>
          </Button>
          
          <Button variant="ghost" className="flex items-center gap-2 text-gray-700">
            <Book className="h-4 w-4" />
            <span>Set Objectives</span>
          </Button>
          
          <Button variant="ghost" className="flex items-center gap-2 text-gray-700">
            <span>Timer Mode</span>
          </Button>
          
          <div className="border-l border-gray-200 h-6"></div>
          
          <div className="flex items-center gap-2 text-gray-700">
            <span>Rank:</span>
            <span className="font-medium">#1</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-green-500"
            >
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-6 py-16">
        {/* Problem / Solution / Quotes Tabs */}
        <Tabs 
          defaultValue="problem" 
          value={tabValue} 
          onValueChange={setTabValue}
          className="w-full mb-8"
        >
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 bg-[#edf2f7] p-1 rounded-md">
            <TabsTrigger 
              value="problem" 
              className="data-[state=active]:bg-white data-[state=active]:text-[#33C3F0] rounded-md py-2"
            >
              Problem
            </TabsTrigger>
            <TabsTrigger 
              value="solution" 
              className="data-[state=active]:bg-white data-[state=active]:text-[#33C3F0] rounded-md py-2"
            >
              Solution
            </TabsTrigger>
            <TabsTrigger 
              value="quotes" 
              className="data-[state=active]:bg-white data-[state=active]:text-[#33C3F0] rounded-md py-2"
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
                  <div className="w-full h-60 border border-gray-200 rounded-lg mb-6">
                    {/* Empty space for working through the problem */}
                  </div>
                
                  <div className="mt-10">
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
                </div>
              </div>
            </Card>
            
            {/* Answer Options */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {currentProblem.options.map((option) => (
                <div 
                  key={option.id}
                  className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
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
    </div>
  );
};

export default Practice;
