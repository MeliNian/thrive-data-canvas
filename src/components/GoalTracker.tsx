
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Target, Plus, CheckCircle } from 'lucide-react';

const goals = [
  {
    id: 1,
    title: "Walk 10,000 steps daily",
    progress: 84,
    current: 8432,
    target: 10000,
    unit: "steps",
    deadline: "Daily",
    status: "active"
  },
  {
    id: 2,
    title: "Drink 8 glasses of water",
    progress: 62,
    current: 5,
    target: 8,
    unit: "glasses",
    deadline: "Daily",
    status: "active"
  },
  {
    id: 3,
    title: "Sleep 8 hours",
    progress: 90,
    current: 7.2,
    target: 8,
    unit: "hours",
    deadline: "Daily",
    status: "near_complete"
  },
  {
    id: 4,
    title: "Exercise 5 times this week",
    progress: 100,
    current: 5,
    target: 5,
    unit: "sessions",
    deadline: "Weekly",
    status: "completed"
  }
];

export const GoalTracker = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center">
              <Target className="w-5 h-5 mr-2 text-green-600" />
              Health Goals
            </CardTitle>
            <CardDescription>
              Track your progress towards your health objectives
            </CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Goal
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {goals.map((goal) => (
            <div 
              key={goal.id} 
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                goal.status === 'completed' 
                  ? 'border-green-200 bg-green-50' 
                  : goal.status === 'near_complete'
                  ? 'border-yellow-200 bg-yellow-50'
                  : 'border-gray-200 bg-white hover:border-blue-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {goal.status === 'completed' && (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                  <h4 className="font-medium text-gray-900">{goal.title}</h4>
                </div>
                <div className="text-sm text-gray-500">{goal.deadline}</div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {goal.current} / {goal.target} {goal.unit}
                  </span>
                  <span className="font-medium text-gray-900">
                    {goal.progress}%
                  </span>
                </div>
                <Progress 
                  value={goal.progress} 
                  className={`h-2 ${
                    goal.status === 'completed' ? 'progress-green' : ''
                  }`} 
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
