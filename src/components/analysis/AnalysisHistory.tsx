
import React from 'react';
import { FileText, Mic, Calendar, ChevronRight, ChartPie } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AnalysisHistory = () => {
  // Mock data
  const reports = [
    {
      id: 1,
      type: 'text',
      date: 'May 16, 2023',
      range: 'Entries from May 10-16',
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Your Analysis Reports</h2>
      
      {reports.length > 0 ? (
        <div className="space-y-4">
          {reports.map((report) => (
            <Card key={report.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center p-4">
                <div className="bg-force-purple/10 w-10 h-10 rounded-full flex items-center justify-center">
                  {report.type === 'text' ? (
                    <FileText className="w-5 h-5 text-force-purple" />
                  ) : (
                    <Mic className="w-5 h-5 text-force-blue" />
                  )}
                </div>
                <div className="flex-1 ml-4">
                  <h3 className="font-medium">{report.type === 'text' ? 'Text Analysis' : 'Voice Analysis'}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{report.date} • {report.range}</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardHeader className="text-center">
            <div className="flex flex-col items-center mb-4">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
                <ChartPie className="w-6 h-6 text-gray-500" />
              </div>
            </div>
            <h3 className="font-medium">You haven't generated any analysis reports yet</h3>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-4">Go to 'New Analysis' to discover insights!</p>
            <Button className="bg-force-purple hover:bg-force-purple/90">
              Start New Analysis
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AnalysisHistory;
