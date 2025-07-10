
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Activity, 
  Heart, 
  Moon, 
  Utensils, 
  Target, 
  TrendingUp,
  Calendar,
  Bell,
  Settings,
  User,
  BarChart3,
  Shield,
  Smartphone
} from 'lucide-react';
import { StatsCard } from '@/components/StatsCard';
import { HealthChart } from '@/components/HealthChart';
import { GoalTracker } from '@/components/GoalTracker';
import { QuickActions } from '@/components/QuickActions';
import { ActivityFeed } from '@/components/ActivityFeed';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const healthMetrics = [
    {
      title: "Steps Today",
      value: "8,432",
      target: "10,000",
      percentage: 84,
      icon: Activity,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      trend: "+12%"
    },
    {
      title: "Heart Rate",
      value: "72 bpm",
      target: "60-100",
      percentage: 75,
      icon: Heart,
      color: "text-red-600",
      bgColor: "bg-red-50",
      trend: "Normal"
    },
    {
      title: "Sleep Quality",
      value: "7.2 hrs",
      target: "8 hrs",
      percentage: 90,
      icon: Moon,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      trend: "Good"
    },
    {
      title: "Calories",
      value: "1,850",
      target: "2,200",
      percentage: 84,
      icon: Utensils,
      color: "text-green-600",
      bgColor: "bg-green-50",
      trend: "+5%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Good morning, Sarah!</h1>
              <p className="text-lg text-gray-600">
                {currentTime.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule
              </Button>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Alerts
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {healthMetrics.map((metric, index) => (
            <StatsCard key={index} {...metric} />
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="fitness">Fitness</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="sleep">Sleep</TabsTrigger>
            <TabsTrigger value="mental">Mental Health</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Charts Section */}
              <div className="lg:col-span-2 space-y-6">
                <HealthChart />
                <GoalTracker />
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                <QuickActions />
                <ActivityFeed />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="fitness" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-blue-600" />
                    Workout Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>This Week</span>
                      <Badge variant="secondary">5 workouts</Badge>
                    </div>
                    <Progress value={75} className="h-2" />
                    <p className="text-sm text-gray-600">3 more workouts to reach your weekly goal</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2 text-green-600" />
                    Fitness Goals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Daily Steps</span>
                      <span className="text-sm font-medium">8,432 / 10,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Weekly Workouts</span>
                      <span className="text-sm font-medium">5 / 7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Calories Burned</span>
                      <span className="text-sm font-medium">2,180 / 2,500</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="nutrition" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Utensils className="w-5 h-5 mr-2 text-green-600" />
                    Daily Nutrition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Calories</span>
                      <span className="font-medium">1,850 / 2,200</span>
                    </div>
                    <Progress value={84} className="h-2" />
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-medium text-blue-600">120g</div>
                        <div className="text-gray-600">Protein</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-orange-600">180g</div>
                        <div className="text-gray-600">Carbs</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-purple-600">65g</div>
                        <div className="text-gray-600">Fat</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Meal Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Breakfast</span>
                      <Badge variant="outline">Logged</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Lunch</span>
                      <Badge variant="outline">Logged</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium">Dinner</span>
                      <Badge>Planned</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sleep" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Moon className="w-5 h-5 mr-2 text-purple-600" />
                    Sleep Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">7.2</div>
                      <div className="text-sm text-gray-600">Hours slept last night</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium">Bedtime</div>
                        <div className="text-gray-600">10:30 PM</div>
                      </div>
                      <div>
                        <div className="font-medium">Wake up</div>
                        <div className="text-gray-600">6:15 AM</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Sleep Quality</span>
                        <Badge variant="secondary">Good</Badge>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Sleep Patterns</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Deep Sleep</span>
                      <span className="font-medium">2.1 hrs</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>REM Sleep</span>
                      <span className="font-medium">1.8 hrs</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Light Sleep</span>
                      <span className="font-medium">3.3 hrs</span>
                    </div>
                    <div className="pt-4">
                      <Button variant="outline" className="w-full">
                        View Detailed Analysis
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="mental" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-pink-600" />
                    Mood Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-600">😊</div>
                      <div className="text-sm text-gray-600 mt-2">Feeling good today</div>
                    </div>
                    <div className="flex justify-center space-x-2">
                      {['😫', '😞', '😐', '😊', '😄'].map((emoji, index) => (
                        <button
                          key={index}
                          className={`p-2 rounded-full ${index === 3 ? 'bg-pink-100' : 'hover:bg-gray-100'}`}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Wellness Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      🧘 Meditation (10 min)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      📖 Journaling
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      🌿 Breathing Exercise
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      🎵 Relaxing Music
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
