import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from '../Screens/HomeScreen';
import {TestScreen} from '../Screens/TestScreen';
import {ResultsScreen} from '../Screens/ResultsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CustomDrawer } from './CustomDrawer';

const Drawer = createDrawerNavigator();

const generateDrawerScreens = (tests) => {
  return tests.map((test) => (
    <Drawer.Screen
      key={test.id}
      name={test.name}
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
  const [tests, setTest] = useState([]);

  const url = 'https://tgryl.pl/quiz/tests';

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((json) => setTest(json))
    .catch((error) => console.log(error));
  }, []);

  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
        initialRouteName="Home"
        screenOptions={{headerTitleAlign: 'center', headerTintColor: '#fff', statusBarColor: '#0909db',
        headerStyle: {backgroundColor: '#0909db'}, headerTitleStyle: {fontFamily: 'Mina-Bold', fontSize: 25}}}>
      <Drawer.Screen
        name="Home"
        headerStyle={{fontFamily: 'Mina-Regular'}}
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