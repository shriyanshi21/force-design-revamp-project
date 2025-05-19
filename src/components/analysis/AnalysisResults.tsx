
import React from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// This is a sample PieChart component using recharts - it can be customized as needed
const SentimentPieChart = () => {
  // We'd use recharts for an actual implementation
  return (
    <div className="flex items-center justify-center h-64 w-full">
      <div className="flex items-center gap-4">
        <div className="relative w-32 h-32">
          {/* Simple CSS pie chart as placeholder */}
          <div className="absolute inset-0 bg-force-green rounded-full"></div>
          <div className="absolute inset-0 bg-force-red rounded-full" style={{ 
            clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 50% 100%)' 
          }}></div>
          <div className="absolute inset-0 bg-force-blue rounded-full" style={{ 
            clipPath: 'polygon(50% 50%, 100% 0, 100% 30%, 50% 30%)' 
          }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white w-20 h-20 rounded-full"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-force-green rounded-full"></div>
            <span className="text-sm">Positive: 65%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-force-red rounded-full"></div>
            <span className="text-sm">Negative: 25%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-force-blue rounded-full"></div>
            <span className="text-sm">Neutral: 10%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface AnalysisResultsProps {
  type: 'text' | 'audio';
  title: string;
  dateRange: string;
}

const AnalysisResults = ({ type, title, dateRange }: AnalysisResultsProps) => {
  const isAudio = type === 'audio';
  
  return (
    <MainLayout>
      <div className="mb-6">
        <Button variant="ghost" className="mb-4" asChild>
          <a href="/analysis">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Analysis
          </a>
        </Button>
        
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {isAudio 
                ? 'Analysis of Your Audio Reflection' 
                : 'Insights from Your Written Entries'}
            </h1>
            <p className="text-muted-foreground">{dateRange}</p>
          </div>
          
          <Button variant="outline" className="flex items-center">
            <Download className="w-4 h-4 mr-2" /> Export Report
          </Button>
        </div>
      </div>
      
      <div className="space-y-6">
        {/* Overall Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Overall Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Force has analyzed your {isAudio ? 'voice recording' : 'journal entries'} and detected a predominantly positive tone. 
              You expressed enthusiasm about your recent project progress and shared some concerns about upcoming deadlines. 
              Your reflections showed thoughtfulness and self-awareness, particularly when discussing work-life balance.
            </p>
          </CardContent>
        </Card>
        
        {/* Sentiment Deep Dive */}
        <Card>
          <CardHeader>
            <CardTitle>Your Emotional Landscape</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <SentimentPieChart />
            
            <div>
              <h3 className="font-medium mb-2">Key Emotional Words</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-force-green/10 text-force-green px-3 py-1 rounded-full text-sm">excited</span>
                <span className="bg-force-green/10 text-force-green px-3 py-1 rounded-full text-sm">proud</span>
                <span className="bg-force-red/10 text-force-red px-3 py-1 rounded-full text-sm">worried</span>
                <span className="bg-force-blue/10 text-force-blue px-3 py-1 rounded-full text-sm">thoughtful</span>
                <span className="bg-force-green/10 text-force-green px-3 py-1 rounded-full text-sm">grateful</span>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="font-medium mb-2">Force's Interpretation</h3>
              <p className="text-sm">
                Force noticed a strong sense of accomplishment when you discussed your project milestones, 
                alongside some anxiety about upcoming deadlines. Your overall emotional tone was optimistic
                and forward-looking, with brief moments of concern that didn't overshadow your positive outlook.
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* Key Themes & Topics */}
        <Card>
          <CardHeader>
            <CardTitle>What Was On Your Mind</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <div className="bg-force-purple/10 px-4 py-2 rounded-md">
                <h4 className="font-medium">Work Projects</h4>
                <p className="text-sm text-muted-foreground">Mentioned 8 times</p>
              </div>
              <div className="bg-force-blue/10 px-4 py-2 rounded-md">
                <h4 className="font-medium">Personal Growth</h4>
                <p className="text-sm text-muted-foreground">Mentioned 5 times</p>
              </div>
              <div className="bg-force-green/10 px-4 py-2 rounded-md">
                <h4 className="font-medium">Relationships</h4>
                <p className="text-sm text-muted-foreground">Mentioned 4 times</p>
              </div>
              <div className="bg-force-yellow/10 px-4 py-2 rounded-md">
                <h4 className="font-medium">Health & Wellness</h4>
                <p className="text-sm text-muted-foreground">Mentioned 3 times</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Transcription - Only shown for audio analysis */}
        {isAudio && (
          <Card>
            <CardHeader>
              <CardTitle>Your Spoken Words</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-md max-h-64 overflow-y-auto">
                <p className="text-sm">
                  "Today I made significant progress on the research project. I'm really excited about the direction 
                  it's taking, especially after the breakthrough we had last week. The team has been incredibly supportive,
                  and I feel like we're finally gaining momentum. There's still that deadline looming next month, which 
                  has me a bit worried, but I think we can handle it if we maintain this pace. On a personal note, 
                  I've been trying to balance work with more self-care activities, which has been helping me stay focused..."
                </p>
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* Force's Reflection Nudge */}
        <Card className="border-force-purple">
          <CardHeader>
            <CardTitle>A Nudge from Force ✨</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="italic">
              "Your focus on balancing work achievements with personal wellbeing shows great self-awareness. 
              Have you considered creating specific boundaries or rituals that might help you transition between 
              work mode and personal time more effectively?"
            </p>
            <div className="mt-4 space-x-4">
              <Button className="bg-force-purple hover:bg-force-purple/90">
                Reflect on this
              </Button>
              <Button variant="outline">
                Save for later
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default AnalysisResults;
