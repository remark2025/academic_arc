
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TransitionWrapper from "@/components/UI/TransitionWrapper";
import GlassPanel from "@/components/UI/GlassPanel";

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-6">
        <TransitionWrapper animation="slide-up">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider bg-primary/10 text-primary rounded-full">
              ABOUT US
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">Our Mission</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're dedicated to transforming how people learn through deliberate practice and
              scientifically proven methods that lead to mastery in any field.
            </p>
          </div>
        </TransitionWrapper>

        {/* Story section */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <TransitionWrapper animation="slide-up" delay={200}>
              <div>
                <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Mastery was born from a simple observation: traditional learning approaches often
                    fail to produce true expertise. We saw that deliberate, focused practice was the key
                    element missing from most educational platforms.
                  </p>
                  <p>
                    Founded in 2023 by a team of learning scientists, educators, and software engineers,
                    we set out to build a platform that applies the principles of deliberate practice to
                    help anyone achieve mastery in their chosen field.
                  </p>
                  <p>
                    Our approach is based on decades of research into how experts develop their skills,
                    combining the science of learning with intuitive design to create an experience that
                    naturally guides you toward improvement.
                  </p>
                </div>
              </div>
            </TransitionWrapper>
            
            <TransitionWrapper animation="slide-up" delay={400}>
              <GlassPanel className="p-6 h-full">
                <div className="aspect-square w-full bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg flex items-center justify-center">
                  <div className="text-center p-10">
                    <div className="animate-pulse-subtle">
                      <div className="text-2xl font-medium text-primary mb-3">
                        Team Photo
                      </div>
                      <p className="text-muted-foreground">
                        Image placeholder
                      </p>
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </TransitionWrapper>
          </div>
        </div>
        
        {/* Philosophy section */}
        <TransitionWrapper animation="fade-in" delay={600}>
          <div className="max-w-5xl mx-auto mb-24">
            <h2 className="text-3xl font-semibold mb-10 text-center">Our Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-4">Deliberate Practice</h3>
                  <p className="text-muted-foreground mb-4">
                    We believe that true mastery comes from focused, intentional practice that targets specific
                    skills with immediate feedback and continuous adaptation.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-4">Scientifically Proven</h3>
                  <p className="text-muted-foreground mb-4">
                    Every feature of our platform is based on research in cognitive science, learning theory,
                    and expertise development to ensure efficient skill acquisition.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-4">Human-Centered Design</h3>
                  <p className="text-muted-foreground mb-4">
                    We create intuitive, beautiful interfaces that remove friction from the learning process,
                    allowing you to focus entirely on developing your skills.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TransitionWrapper>
        
        {/* Team section */}
        <TransitionWrapper animation="slide-up" delay={800}>
          <div className="max-w-5xl mx-auto mb-24">
            <h2 className="text-3xl font-semibold mb-10 text-center">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((member) => (
                <div key={member} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary/5 to-primary/10 flex items-center justify-center">
                    <div className="text-sm text-muted-foreground">Photo</div>
                  </div>
                  <h3 className="text-lg font-medium">Team Member {member}</h3>
                  <p className="text-sm text-muted-foreground">
                    {member % 2 === 0 ? "Learning Scientist" : member % 3 === 0 ? "Software Engineer" : "Product Designer"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </TransitionWrapper>
        
        {/* CTA section */}
        <TransitionWrapper animation="fade-in" delay={1000}>
          <GlassPanel className="max-w-4xl mx-auto p-10 text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are already on their path to mastery.
              Start your practice journey today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/auth">
                <Button size="lg" className="rounded-full px-8 py-6 text-base font-medium">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/practice">
                <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base font-medium">
                  Explore Practice Modes
                </Button>
              </Link>
            </div>
          </GlassPanel>
        </TransitionWrapper>
      </div>
    </div>
  );
};

export default About;
