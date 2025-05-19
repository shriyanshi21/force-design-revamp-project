
import React from 'react';
import { ArrowRight, Calendar, ChartPie, FileText, Lightbulb } from 'lucide-react';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  // Mock data
  const username = "Reeshika";
  const todaysDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  
  return (
    <MainLayout className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">
            Good day, <span className="text-force-purple">{username}</span> 👋
          </h1>
          <p className="text-muted-foreground">{todaysDate} • 1 entry total</p>
        </div>
        <Button className="mt-4 md:mt-0 bg-force-purple hover:bg-force-purple/90">
          <FileText className="w-4 h-4 mr-2" /> Start Writing <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* How Force Helps You Grow */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>How Force Helps You Grow</span>
            <span className="text-force-green">🌱</span>
          </CardTitle>
          <CardDescription>
            Your AI-powered companion for personal growth and reflection
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 border rounded-lg">
              <FileText className="w-8 h-8 text-force-purple mb-2" />
              <h3 className="font-semibold mb-2">Understand your thoughts & feelings deeply</h3>
              <p className="text-sm text-muted-foreground">We listen via text & audio!</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 border rounded-lg">
              <ChartPie className="w-8 h-8 text-force-blue mb-2" />
              <h3 className="font-semibold mb-2">See your unique patterns</h3>
              <p className="text-sm text-muted-foreground">Like a personal mind map!</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 border rounded-lg">
              <Lightbulb className="w-8 h-8 text-force-yellow mb-2" />
              <h3 className="font-semibold mb-2">Get gentle nudges to act on your goals</h3>
              <p className="text-sm text-muted-foreground">We're your accountability buddy!</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Let's Get You Started */}
      <Card>
        <CardHeader>
          <CardTitle>Let's Get You Started:</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3 p-2 border rounded-md cursor-pointer hover:bg-slate-50">
            <div className="w-6 h-6 border-2 border-force-purple rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-force-purple rounded-full"></div>
            </div>
            <span>Make your first journal entry</span>
          </div>
          
          <div className="flex items-center gap-3 p-2 border rounded-md cursor-pointer hover:bg-slate-50">
            <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
            <span>Explore a guided journal template</span>
          </div>

          {/* Templates - Hidden by default */}
          <div className="pl-10 grid grid-cols-1 md:grid-cols-3 gap-4 hidden">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">5-Minute Reflection</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm">
                Quick prompts to capture your thoughts
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Gratitude Focus</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm">
                Identify what you're thankful for today
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Goal Setting Kickstart</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm">
                Define what you want to achieve
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Today's Prompt */}
      <Card className="border-force-purple">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-force-purple rounded-full flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <CardTitle>Today's Writing Prompt</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-medium mb-2">Who had the biggest influence on your life, and why?</h3>
          <p className="text-muted-foreground mb-4">
            Understanding our influences helps us recognize the values and beliefs that shape our decisions.
          </p>
          <Button className="bg-force-purple hover:bg-force-purple/90">
            Start writing <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>

      {/* Weekly Summary & AI Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center h-40 text-center p-4">
              <Calendar className="w-10 h-10 text-muted-foreground mb-2" />
              <p className="text-muted-foreground">
                Your personalized summaries will appear here as you journal.
                The more you share, the more Force can support you!
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center h-40 text-center p-4">
              <ChartPie className="w-10 h-10 text-muted-foreground mb-2" />
              <p className="text-muted-foreground">
                You've written 1 entries total. That's 1 this week!
                <br />
                <span className="text-xs">Last entry: May 18, 2023</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Index;
