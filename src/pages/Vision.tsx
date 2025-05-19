
import React from 'react';
import { Clock, FileImage, Globe, Zap, MessageSquare } from 'lucide-react';
import MainLayout from '@/components/layouts/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Vision = () => {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">What's Next for Force</h1>
        <p className="text-muted-foreground">
          Welcome to the Force beta! We're focused on perfecting your AI journaling companion, 
          but we're also dreaming big. Here's a sneak peek at exciting features we're building 
          to support your growth journey even further.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="feature-coming-soon">
          <CardHeader>
            <div className="w-12 h-12 bg-force-purple/10 rounded-full flex items-center justify-center mb-4">
              <FileImage className="w-6 h-6 text-force-purple" />
            </div>
            <CardTitle className="flex items-center gap-2">
              Deeper Insights: Image & Video Analysis
              <span className="coming-soon-badge ml-2">
                <Clock className="w-3 h-3" /> Coming Soon
              </span>
            </CardTitle>
            <CardDescription>
              Upload images and videos to your journal for even deeper personal insight.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Our AI will analyze the visual content you share, helping you understand 
              the environments, people, and moments that matter most to you. Connect 
              visual experiences with your written and spoken reflections.
            </p>
          </CardContent>
        </Card>

        <Card className="feature-coming-soon">
          <CardHeader>
            <div className="w-12 h-12 bg-force-blue/10 rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-force-blue" />
            </div>
            <CardTitle className="flex items-center gap-2">
              Transcribing Meetings & Lectures
              <span className="coming-soon-badge ml-2">
                <Clock className="w-3 h-3" /> Coming Soon
              </span>
            </CardTitle>
            <CardDescription>
              Turn any audio conversation into searchable, analyzable text.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Record important meetings or lectures, and Force will automatically 
              transcribe them for you. You'll be able to highlight key points, 
              search for specific topics, and even get AI-powered summaries.
            </p>
          </CardContent>
        </Card>

        <Card className="feature-coming-soon">
          <CardHeader>
            <div className="w-12 h-12 bg-force-green/10 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-force-green" />
            </div>
            <CardTitle className="flex items-center gap-2">
              Force Experiences
              <span className="coming-soon-badge ml-2">
                <Clock className="w-3 h-3" /> Coming Soon
              </span>
            </CardTitle>
            <CardDescription>
              Guided reflection sessions designed for specific life events.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Whether you're preparing for a job interview, processing a breakup, 
              or celebrating a personal win, Force Experiences will guide you through 
              specially designed reflection sessions tailored to important life moments.
            </p>
          </CardContent>
        </Card>

        <Card className="feature-coming-soon">
          <CardHeader>
            <div className="w-12 h-12 bg-force-yellow/10 rounded-full flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-force-yellow" />
            </div>
            <CardTitle className="flex items-center gap-2">
              Force Community
              <span className="coming-soon-badge ml-2">
                <Clock className="w-3 h-3" /> Coming Soon
              </span>
            </CardTitle>
            <CardDescription>
              Connect with others on their personal growth journeys.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Join groups focused on specific goals or interests, share selected insights 
              from your journal (always with your explicit permission), and learn from 
              others' reflections to accelerate your personal growth.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Which of these ideas excites you most?</h3>
        <p className="text-muted-foreground mb-4">
          We'd love your feedback to help us prioritize our development roadmap.
        </p>
        <Button className="bg-force-purple hover:bg-force-purple/90">
          Share Your Feedback
        </Button>
      </div>
    </MainLayout>
  );
};

export default Vision;
