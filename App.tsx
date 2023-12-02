// import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {NavigationAction, NavigationContainer} from '@react-navigation/native';
import { Navigation } from './src/Navigation/Navigation';
import { Onboarding } from './src/Onboarding/Onboarding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';
import { mainStyles } from './src/Styles/style';
import SplashScreen from 'react-native-splash-screen';
import { Platform } from 'react-native';

const Loading = () => {
  return (
    <View style={mainStyles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [viewOnboarding, setViewOnboarding] = useState(false);

  const [refresh, setRefresh] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewOnboarding');

      if (value !== null) {
        setViewOnboarding(true);
      }
    } catch (err){
      console.log('Error @checkOnboarding:', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  useEffect(() => {
    < Loading />
    checkOnboarding();
  }, [refresh]);

  return (
    <NavigationContainer>
    {loading ? <Loading /> : viewOnboarding ?
        <Navigation />
      : < Onboarding setRefresh={ () => setRefresh(!refresh) }/>}
    </NavigationContainer>
  );
}
