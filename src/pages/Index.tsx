
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, LineChart, Zap, BarChart4, Brain } from "lucide-react";
import TransitionWrapper from "@/components/UI/TransitionWrapper";
import AnimatedCard from "@/components/UI/AnimatedCard";
import GlassPanel from "@/components/UI/GlassPanel";

const Index = () => {
  // Initialize animation on scroll functionality
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="relative">
      {/* Hero section */}
      <section className="min-h-screen relative flex items-center pt-16 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent z-0"></div>
        <div className="absolute inset-0 bg-noise opacity-50 z-0"></div>
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <TransitionWrapper animation="fade-in" duration={1000}>
              <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider bg-primary/10 text-primary rounded-full">
                MASTER ANY SKILL WITH DELIBERATE PRACTICE
              </span>
            </TransitionWrapper>
            
            <TransitionWrapper animation="slide-up" delay={300} duration={1000}>
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
                Transform Your Learning Journey
              </h1>
            </TransitionWrapper>
            
            <TransitionWrapper animation="slide-up" delay={600} duration={1000}>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                Mastery is a beautifully designed platform that helps you practice deliberately,
                track your progress, and achieve expertise in any field through science-backed methods.
              </p>
            </TransitionWrapper>
            
            <TransitionWrapper animation="fade-in" delay={900} duration={1000}>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/practice">
                  <Button size="lg" className="rounded-full px-8 py-6 text-base font-medium">
                    Start Practicing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base font-medium">
                    Learn More
                  </Button>
                </Link>
              </div>
            </TransitionWrapper>
          </div>
          
          {/* Hero image/mockup */}
          <TransitionWrapper animation="slide-up" delay={1200} duration={1000}>
            <div className="mt-16 relative max-w-5xl mx-auto">
              <GlassPanel className="p-6 md:p-10 shadow-xl">
                <div className="aspect-video w-full bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg flex items-center justify-center">
                  <div className="text-center p-10">
                    <div className="animate-pulse-subtle">
                      <div className="text-4xl font-medium text-primary mb-3">
                        Practice Interface
                      </div>
                      <p className="text-muted-foreground">
                        Beautiful, intuitive practice environment coming soon
                      </p>
                    </div>
                  </div>
                </div>
              </GlassPanel>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            </div>
          </TransitionWrapper>
        </div>
      </section>
      
      {/* Features section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <TransitionWrapper animation="slide-up" className="animate-on-scroll">
              <h2 className="text-4xl font-semibold mb-6">Master Your Skills Faster</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our platform combines cutting-edge learning science with intuitive design to help you
                achieve mastery through deliberate practice.
              </p>
            </TransitionWrapper>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCard delay={100} className="animate-on-scroll">
              <div className="p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-6">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-3">Deliberate Practice</h3>
                <p className="text-muted-foreground">
                  Structured exercises designed to target specific skills and push your boundaries.
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={300} className="animate-on-scroll">
              <div className="p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-6">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-3">Adaptive Learning</h3>
                <p className="text-muted-foreground">
                  Our system adjusts to your skill level, ensuring optimal challenge for faster growth.
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={500} className="animate-on-scroll">
              <div className="p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-6">
                  <LineChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-3">Progress Tracking</h3>
                <p className="text-muted-foreground">
                  Visualize your improvement over time with detailed analytics and insights.
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={700} className="animate-on-scroll">
              <div className="p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-6">
                  <BarChart4 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-3">Performance Analysis</h3>
                <p className="text-muted-foreground">
                  Identify strengths and weaknesses to optimize your practice sessions.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <TransitionWrapper animation="slide-up" className="animate-on-scroll">
              <h2 className="text-4xl font-semibold mb-6">Start Your Mastery Journey Today</h2>
              <p className="text-xl text-muted-foreground mb-10">
                Join thousands of learners who have accelerated their skill development through our
                specialized practice platform.
              </p>
              <Link to="/auth">
                <Button size="lg" className="rounded-full px-8 py-6 text-base font-medium">
                  Create Free Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </TransitionWrapper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
