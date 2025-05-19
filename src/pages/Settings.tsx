
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Check, Sun as SunIcon, Moon as MoonIcon } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState("appearance");
  const [colorTheme, setColorTheme] = useState("purple");
  const [theme, setTheme] = useState("light");

  const colors = [
    { name: "red", class: "bg-force-red" },
    { name: "orange", class: "bg-force-orange" },
    { name: "yellow", class: "bg-force-yellow" },
    { name: "green", class: "bg-force-green" },
    { name: "blue", class: "bg-force-blue" },
    { name: "indigo", class: "bg-force-indigo" },
    { name: "purple", class: "bg-force-purple" },
    { name: "pink", class: "bg-force-pink" },
    { name: "teal", class: "bg-force-teal" },
    { name: "cyan", class: "bg-force-cyan" },
  ];

  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your preferences and account settings
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-64 space-y-1">
          <Button
            variant={activeTab === "appearance" ? "default" : "ghost"}
            className={cn(
              "w-full justify-start",
              activeTab === "appearance" && "bg-force-purple"
            )}
            onClick={() => setActiveTab("appearance")}
          >
            Appearance
          </Button>
          <Button
            variant={activeTab === "profile" ? "default" : "ghost"}
            className={cn(
              "w-full justify-start",
              activeTab === "profile" && "bg-force-purple"
            )}
            onClick={() => setActiveTab("profile")}
          >
            Profile Details
          </Button>
          <Button
            variant={activeTab === "notifications" ? "default" : "ghost"}
            className={cn(
              "w-full justify-start",
              activeTab === "notifications" && "bg-force-purple"
            )}
            onClick={() => setActiveTab("notifications")}
          >
            Notifications
          </Button>
          <Button
            variant={activeTab === "security" ? "default" : "ghost"}
            className={cn(
              "w-full justify-start",
              activeTab === "security" && "bg-force-purple"
            )}
            onClick={() => setActiveTab("security")}
          >
            Security
          </Button>
        </div>

        <div className="flex-1">
          {activeTab === "appearance" && (
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
                <CardDescription>
                  Customize how Force looks for you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Color Theme</h3>
                  <div className="grid grid-cols-5 gap-4">
                    {colors.map((color) => (
                      <div 
                        key={color.name} 
                        className={cn(
                          "w-10 h-10 rounded-full cursor-pointer transition-transform hover:scale-110",
                          color.class,
                          colorTheme === color.name && "ring-2 ring-offset-2 ring-black"
                        )}
                        onClick={() => setColorTheme(color.name)}
                      >
                        {colorTheme === color.name && (
                          <div className="w-full h-full flex items-center justify-center">
                            <Check className="w-5 h-5 text-white" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium mb-4">Mode</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button 
                      variant="outline" 
                      className={cn(
                        "p-4 h-auto border-2 flex flex-col items-start",
                        theme === "light" && "border-force-purple"
                      )}
                      onClick={() => setTheme("light")}
                    >
                      <div className="flex justify-between w-full mb-4">
                        <div className="bg-yellow-400 rounded-full p-1">
                          <SunIcon className="h-5 w-5 text-white" />
                        </div>
                        {theme === "light" && <Check className="h-5 w-5 text-force-purple" />}
                      </div>
                      <div className="text-left">
                        <h4 className="font-medium">Light Mode</h4>
                        <p className="text-sm text-muted-foreground">
                          Bright theme with light backgrounds
                        </p>
                      </div>
                    </Button>

                    <Button 
                      variant="outline" 
                      className={cn(
                        "p-4 h-auto border-2 flex flex-col items-start",
                        theme === "dark" && "border-force-purple"
                      )}
                      onClick={() => setTheme("dark")}
                    >
                      <div className="flex justify-between w-full mb-4">
                        <div className="bg-slate-700 rounded-full p-1">
                          <MoonIcon className="h-5 w-5 text-white" />
                        </div>
                        {theme === "dark" && <Check className="h-5 w-5 text-force-purple" />}
                      </div>
                      <div className="text-left">
                        <h4 className="font-medium">Dark Mode</h4>
                        <p className="text-sm text-muted-foreground">
                          Dark theme to reduce eye strain
                        </p>
                      </div>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "profile" && (
            <Card>
              <CardHeader>
                <CardTitle>Profile Details</CardTitle>
                <CardDescription>
                  Update your personal information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Reeshika" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="reeshika@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="about">About Me</Label>
                  <Textarea 
                    id="about" 
                    placeholder="Share a little about yourself and your goals..."
                  />
                </div>
                <Button className="bg-force-purple hover:bg-force-purple/90">
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          )}

          {activeTab === "notifications" && (
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Control how and when Force notifies you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Daily Prompt Reminder</h3>
                    <p className="text-sm text-muted-foreground">
                      Get notified about new journal prompts daily
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Weekly Summary Email</h3>
                    <p className="text-sm text-muted-foreground">
                      Receive a weekly email with your journal insights
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Achievement Notifications</h3>
                    <p className="text-sm text-muted-foreground">
                      Get notified when you reach journaling milestones
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Product Updates</h3>
                    <p className="text-sm text-muted-foreground">
                      Stay informed about new features and improvements
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Button className="bg-force-purple hover:bg-force-purple/90">
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          )}

          {activeTab === "security" && (
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Manage your account security
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Change Password</h3>
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button className="bg-force-purple hover:bg-force-purple/90 mt-2">
                    Update Password
                  </Button>
                </div>

                <div className="border-t pt-4 mt-6">
                  <h3 className="font-medium text-red-500">Danger Zone</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    These actions are irreversible. Please proceed with caution.
                  </p>
                  <Button variant="destructive">
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Settings;
