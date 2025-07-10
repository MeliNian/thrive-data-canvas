
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  Camera, 
  Clock, 
  Utensils, 
  Activity, 
  Heart,
  Moon,
  Pill
} from 'lucide-react';

const quickActions = [
  {
    icon: Utensils,
    label: "Log Meal",
    description: "Quick meal entry",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: Activity,
    label: "Record Workout",
    description: "Log exercise session",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Heart,
    label: "Check Vitals",
    description: "Record heart rate, BP",
    color: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    icon: Moon,
    label: "Sleep Log",
    description: "Record sleep data",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: Pill,
    label: "Medication",
    description: "Take medication",
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    icon: Camera,
    label: "Photo Log",
    description: "Visual progress",
    color: "text-pink-600",
    bgColor: "bg-pink-50"
  }
];

export const QuickActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Plus className="w-5 h-5 mr-2 text-gray-600" />
          Quick Actions
        </CardTitle>
        <CardDescription>
          Fast data entry and logging
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className={`h-auto p-3 flex flex-col items-center space-y-2 hover:${action.bgColor} hover:border-transparent transition-all duration-200`}
            >
              <div className={`p-2 rounded-lg ${action.bgColor}`}>
                <action.icon className={`w-5 h-5 ${action.color}`} />
              </div>
              <div className="text-center">
                <div className="text-sm font-medium">{action.label}</div>
                <div className="text-xs text-gray-500">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
