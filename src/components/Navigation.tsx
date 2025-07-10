
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  User, 
  Bell, 
  Settings, 
  Menu,
  Shield,
  Smartphone,
  BarChart3
} from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">HealthTracker Pro</span>
              <Badge variant="secondary" className="ml-2">Enterprise</Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Dashboard
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Analytics
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Reports
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Integrations
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Security Badge */}
            <div className="hidden lg:flex items-center space-x-2 px-3 py-1 bg-green-50 rounded-full">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">HIPAA Compliant</span>
            </div>

            {/* Notification Bell */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </Button>

            {/* Mobile Integration Icon */}
            <Button variant="ghost" size="sm">
              <Smartphone className="w-5 h-5" />
            </Button>

            {/* Analytics Quick Access */}
            <Button variant="ghost" size="sm">
              <BarChart3 className="w-5 h-5" />
            </Button>

            {/* User Profile */}
            <Button variant="ghost" size="sm">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
