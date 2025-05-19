import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { ArrowRight, BarChart2, FileText, Mic, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Get current hour to personalize greeting
  const hour = new Date().getHours();
  let greeting = '';
  
  if (Number(hour) < 12) {
    greeting = 'Good morning';
  } else if (Number(hour) < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  return (
    <MainLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{greeting}, Reeshika</h1>
        <p className="text-muted-foreground">
          Track your progress and gain insights from your journal entries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Journal Streak</CardTitle>
            <CardDescription>You're building a great habit!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold">7 days</span>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Sparkles className="h-4 w-4" />
                      <span>Level 2</span>
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Journaling Level</h4>
                      <p className="text-xs">Keep writing to reach Level 3!</p>
                      <Progress value={65} className="h-2" />
                      <p className="text-xs text-muted-foreground">65% to next level</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
              <Progress value={70} className="h-2" />
              <p className="text-sm text-muted-foreground">3 more days to beat your record</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Recent Insights</CardTitle>
            <CardDescription>From your last analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-force-purple/10 p-2 rounded-full">
                  <BarChart2 className="h-5 w-5 text-force-purple" />
                </div>
                <div>
                  <h3 className="font-medium">Positive sentiment increasing</h3>
                  <p className="text-sm text-muted-foreground">Your entries show 15% more positive language this week</p>
                </div>
              </div>
              <Link to="/analysis/results/text">
                <Button variant="outline" className="w-full justify-between">
                  <span>View full analysis</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Link to="/journal">
          <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center gap-3">
            <FileText className="h-6 w-6" />
            <div className="text-center">
              <h3 className="font-medium">Write Journal Entry</h3>
              <p className="text-xs text-muted-foreground">Record your thoughts and feelings</p>
            </div>
          </Button>
        </Link>
        
        <Link to="/audio-analysis">
          <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center gap-3">
            <Mic className="h-6 w-6" />
            <div className="text-center">
              <h3 className="font-medium">Voice Recording</h3>
              <p className="text-xs text-muted-foreground">Speak your thoughts aloud</p>
            </div>
          </Button>
        </Link>
        
        <Link to="/analysis">
          <Button variant="outline" className="w-full h-auto py-6 flex flex-col items-center gap-3">
            <BarChart2 className="h-6 w-6" />
            <div className="text-center">
              <h3 className="font-medium">Run New Analysis</h3>
              <p className="text-xs text-muted-foreground">Get insights from your entries</p>
            </div>
          </Button>
        </Link>
      </div>
    </MainLayout>
  );
};

export default Index;
