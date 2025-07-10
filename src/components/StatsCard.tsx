
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  target: string;
  percentage: number;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  trend: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  target,
  percentage,
  icon: Icon,
  color,
  bgColor,
  trend
}) => {
  return (
    <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
          <div className={`p-2 rounded-lg ${bgColor}`}>
            <Icon className={`w-5 h-5 ${color}`} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-baseline justify-between">
            <div className="text-2xl font-bold text-gray-900">{value}</div>
            <Badge variant="secondary" className="text-xs">
              {trend}
            </Badge>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Target: {target}</span>
              <span>{percentage}%</span>
            </div>
            <Progress value={percentage} className="h-2" />
          </div>
        </div>
      </CardContent>
      <div className={`absolute bottom-0 left-0 right-0 h-1 ${bgColor} opacity-50`}></div>
    </Card>
  );
};
