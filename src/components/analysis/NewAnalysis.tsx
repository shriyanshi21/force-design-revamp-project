
import React from 'react';
import { FileText, Mic, Camera } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const NewAnalysis = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">What Would You Like to Analyze?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="bg-force-purple/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-force-purple" />
            </div>
            <CardTitle>Analyze My Written Entries (Text)</CardTitle>
            <CardDescription>
              Explore themes, emotions (sentiment), and patterns in your journal text.
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
            <CardTitle>Analyze My Spoken Entries (Audio)</CardTitle>
            <CardDescription>
              Understand reflections from your voice notes, including content and emotional nuances (sentiment).
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

        <Card className="opacity-75 hover:shadow-md transition-shadow md:col-span-2">
          <div className="absolute top-3 right-3 bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
            Coming Soon
          </div>
          <CardHeader>
            <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Camera className="w-6 h-6 text-gray-500" />
            </div>
            <CardTitle>Analyze My Visual Entries (Image/Video)</CardTitle>
            <CardDescription>
              Gain deeper understanding from your uploaded images and videos.
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
    </div>
  );
};

export default NewAnalysis;
