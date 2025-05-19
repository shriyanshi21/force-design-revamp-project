
import React from 'react';
import { ArrowRight, Calendar, Filter, Search } from 'lucide-react';
import MainLayout from '@/components/layouts/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Journal = () => {
  // Mock data for recent entries
  const entries = [
    {
      id: 1,
      date: 'May 18th',
      sentiment: 'Neutral',
      content: 'hello',
      timestamp: '2023-05-18'
    }
  ];

  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Journal Entries</h1>
        <p className="text-muted-foreground">
          View and manage all your journal entries
        </p>
      </div>

      {/* Today's Prompt */}
      <Card className="border-force-purple mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            Today's Writing Prompt
            <Button size="sm" variant="outline" className="ml-auto">
              Change prompt
            </Button>
          </CardTitle>
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

      {/* Recent Entries */}
      <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-xl font-semibold">Recent Entries</h2>
        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-2">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search entries..." className="pl-8" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline">
            View All
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {entries.map((entry) => (
          <Card key={entry.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="border-b pb-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{entry.timestamp}</span>
                </div>
                <div className="bg-gray-200 text-gray-700 text-xs py-1 px-2 rounded-full">
                  {entry.sentiment}
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-3">
              <h3 className="font-medium mb-2">{entry.date}</h3>
              <p className="text-sm text-muted-foreground line-clamp-3">{entry.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </MainLayout>
  );
};

export default Journal;
