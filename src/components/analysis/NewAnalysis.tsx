
import React from 'react';
import { FileText, Mic, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const NewAnalysis = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader>
          <div className="bg-force-purple/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <FileText className="w-6 h-6 text-force-purple" />
          </div>
          <CardTitle>Analyze Journal Entries (Text)</CardTitle>
          <CardDescription>
            Understand themes, emotions, and patterns in your written reflections.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Get insights on:
          </p>
          <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
            <li>Emotional trends over time</li>
            <li>Recurring topics and themes</li>
            <li>Writing style and sentiment analysis</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-force-purple hover:bg-force-purple/90">
            Start Text Analysis
          </Button>
        </CardFooter>
      </Card>

      <Card className="hover:shadow-md transition-shadow">
        <CardHeader>
          <div className="bg-force-blue/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <Mic className="w-6 h-6 text-force-blue" />
          </div>
          <CardTitle>Analyze Voice Entries</CardTitle>
          <CardDescription>
            Gain insights from the tone and content of your audio reflections.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Get insights on:
          </p>
          <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
            <li>Emotional tone detection</li>
            <li>Speech patterns and verbal habits</li>
            <li>Transcribed content analysis</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-force-blue hover:bg-force-blue/90">
            Start Voice Analysis
          </Button>
        </CardFooter>
      </Card>

      <Card className="card-coming-soon hover:shadow-md transition-shadow">
        <CardHeader>
          <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <Clock className="w-6 h-6 text-gray-500" />
          </div>
          <CardTitle>Image & Video Analysis</CardTitle>
          <CardDescription>
            Unlock deeper understanding from your visual entries.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Coming soon:
          </p>
          <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
            <li>Visual sentiment analysis</li>
            <li>Object and scene recognition</li>
            <li>Pattern detection in visual journals</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" disabled>
            Coming Soon
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewAnalysis;
