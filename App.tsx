import 'react-native-gesture-handler';
import React from 'react';
import {NavigationAction, NavigationContainer} from '@react-navigation/native';
import { Navigation } from './src/Navigation/Navigation';


export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
