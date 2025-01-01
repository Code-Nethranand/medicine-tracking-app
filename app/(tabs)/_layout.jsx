import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return (
    <Tabs screenOptions= {{ headerShown: false }} >
        <Tabs.Screen name="index"
            options={{
                tabBarIcon: (color, size) => (
                    <FontAwesome name="home" size={24} color="black" />
                )
            }}
        />
        <Tabs.Screen name="AddNew"
            options={{
                tabBarIcon: (color, size) => (
                    <FontAwesome name="plus-square" size={24} color="black" />
                )
            }}
        />
        <Tabs.Screen name="Profile"
            options={{
                tabBarIcon: (color, size) => (
                    <FontAwesome name="user" size={24} color="black" />
                )
            }}
        />
    </Tabs>
  )
}