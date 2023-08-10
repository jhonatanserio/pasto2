import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FeedScreen from '../screens/FeedScreen';
import { MovieScreen } from '../screens/MovieScreen';

const Stack =  createNativeStackNavigator();

export function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Feed" options={{headerShown: false}} component={FeedScreen}/>
            <Stack.Screen name="Movie" options={{headerShown: false}} component={MovieScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}