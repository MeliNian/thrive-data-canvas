
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp } from 'lucide-react';

const data = [
  { name: 'Mon', steps: 8400, heartRate: 72, calories: 2100 },
  { name: 'Tue', steps: 9200, heartRate: 68, calories: 2250 },
  { name: 'Wed', steps: 7800, heartRate: 75, calories: 1980 },
  { name: 'Thu', steps: 10200, heartRate: 70, calories: 2400 },
  { name: 'Fri', steps: 9600, heartRate: 73, calories: 2180 },
  { name: 'Sat', steps: 8800, heartRate: 69, calories: 2050 },
  { name: 'Sun', steps: 8432, heartRate: 72, calories: 1850 },
];

export const HealthChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
          Weekly Health Trends
        </CardTitle>
        <CardDescription>
          Your health metrics over the past week
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="stepsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="steps" 
                stroke="#3b82f6" 
                strokeWidth={2}
                fill="url(#stepsGradient)"
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: '#3b82f6' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
