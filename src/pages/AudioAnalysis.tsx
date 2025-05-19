
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mic, Upload } from 'lucide-react';

const AudioAnalysis = () => {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Audio Analysis</h1>
        <p className="text-muted-foreground">
          Upload an audio file or record directly to analyze its content, features, and patterns
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" /> Upload Audio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed rounded-lg py-10 flex flex-col items-center justify-center">
              <Upload className="w-10 h-10 text-muted-foreground mb-4" />
              <p className="text-center text-muted-foreground mb-1">
                Click to upload or drag and drop
              </p>
              <p className="text-center text-sm text-muted-foreground">
                MP3, WAV, or M4A (MAX. 25MB)
              </p>
              <Button className="mt-6 bg-force-purple hover:bg-force-purple/90">
                Analyze Audio
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mic className="w-5 h-5" /> Record Audio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-900 rounded-lg h-64 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-force-blue rounded-full flex items-center justify-center">
                <Mic className="w-8 h-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default AudioAnalysis;
