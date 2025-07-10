
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Activity, 
  Utensils, 
  Moon, 
  Heart,
  Award,
  TrendingUp
} from 'lucide-react';

const activities = [
  {
    id: 1,
    type: "achievement",
    icon: Award,
    title: "Goal Achieved!",
    description: "Completed weekly exercise goal",
    time: "2 hours ago",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50"
  },
  {
    id: 2,
    type: "meal",
    icon: Utensils,
    title: "Lunch Logged",
    description: "Grilled chicken salad - 450 calories",
    time: "3 hours ago",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    id: 3,
    type: "exercise",
    icon: Activity,
    title: "Workout Completed",
    description: "45 min cardio session",
    time: "5 hours ago",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    id: 4,
    type: "vitals",
    icon: Heart,
    title: "Heart Rate Recorded",
    description: "Resting HR: 68 bpm",
    time: "8 hours ago",
    color: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    id: 5,
    type: "sleep",
    icon: Moon,
    title: "Sleep Tracked",
    description: "7.2 hours - Good quality",
    time: "12 hours ago",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    id: 6,
    type: "trend",
    icon: TrendingUp,
    title: "Progress Update",
    description: "Weight trend: -2.5 lbs this month",
    time: "1 day ago",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  }
];

export const ActivityFeed = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Clock className="w-5 h-5 mr-2 text-gray-600" />
          Recent Activity
        </CardTitle>
        <CardDescription>
          Your latest health updates and achievements
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${activity.bgColor} flex-shrink-0`}>
                <activity.icon className={`w-4 h-4 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {activity.title}
                  </p>
                  {activity.type === "achievement" && (
                    <Badge variant="secondary" className="text-xs">
                      New
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
