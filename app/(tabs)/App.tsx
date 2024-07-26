import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/navigation';
import HomeScreen from './HomeScreen';
import DirectionsScreen from './DirectionsScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Directions" component={DirectionsScreen} />
      </Stack.Navigator>
  );
}
