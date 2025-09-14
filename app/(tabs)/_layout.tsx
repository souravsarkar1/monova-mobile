import { colors } from '@/appConstant/colors';
import { Tabs } from 'expo-router';
import { BookOpen, Bookmark, Home } from 'lucide-react-native';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#9CA3AF', // Gray-400
        tabBarShowLabel: false, // Hide all tab labels
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 1,
          borderTopColor: colors.light,
          height: 60, // Reduced height since no labels
          paddingBottom: 10,
          paddingTop: 10,
          shadowColor: colors.black,
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 8,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen 
        name='home' 
        options={{ 
          tabBarIcon: ({ color, size, focused }) => (
            <Home 
              size={size} 
              color={color} 
              fill="transparent"
              strokeWidth={focused ? 2 : 1.5}
            />
          ),
        }}
      />
      
      <Tabs.Screen 
        name='explore' 
        options={{ 
          tabBarIcon: ({ color, size, focused }) => (
            <BookOpen 
              size={size} 
              color={color} 
              fill="transparent"
              strokeWidth={focused ? 2 : 1.5}
            />
          ),
        }}
      />
      
      <Tabs.Screen 
        name='save' 
        options={{ 
          tabBarIcon: ({ color, size, focused }) => (
            <Bookmark 
              size={size} 
              color={color} 
              fill="transparent"
              strokeWidth={focused ? 2 : 1.5}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;