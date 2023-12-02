import { View, Text } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from '../Screens/HomeScreen';
import {TestScreen} from '../Screens/TestScreen';
import {ResultsScreen} from '../Screens/ResultsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CustomDrawer } from './CustomDrawer';
import {tests} from '../../testData';

const Drawer = createDrawerNavigator();

const generateDrawerScreens = (tests) => {
  return tests.map((test) => (
    <Drawer.Screen
      key={test.id}
      name={test.topic}
      options={{
        drawerIcon: ({ color }) => (
          <Ionicons name="receipt-outline" size={22} color={color} />
        ),
      }}
      initialParams={{ testId: test.id }}
    >
      {() => <TestScreen topic={test.topic} />}
    </Drawer.Screen>
  ));
};

export const Navigation = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
        initialRouteName="Home"
        screenOptions={{headerTitleAlign: 'center', headerTintColor: '#fff', statusBarColor: '#0909db',
        headerStyle: {backgroundColor: '#0909db'}}}>
      <Drawer.Screen
        name="Home"
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="Results"
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="ribbon-outline" size={22} color={color} />
          ),
        }}
        component={ResultsScreen}
      />
      {generateDrawerScreens(tests)}
      </Drawer.Navigator>
  )
}