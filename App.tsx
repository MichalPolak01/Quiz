import React, { useState, useEffect } from 'react';
import {NavigationAction, NavigationContainer} from '@react-navigation/native';
import { Navigation } from './src/Navigation/Navigation';
import { Onboarding } from './src/Onboarding/Onboarding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';
import { mainStyles } from './src/Styles/style';
import SplashScreen from 'react-native-splash-screen';
import { Platform } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const Loading = () => {
  return (
    <View style={mainStyles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const db = SQLite.openDatabase(
  {
    name: 'quizStorage',
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);
  }
);

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


  // const createTable = () => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       "CREATE TABLE IF NOT EXISTS "
  //       + "Tests "
  //       + "(id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, informations TEXT);"
  //     )
  //   })
  // }

  // const setData = async () => {
  //   await db.transaction(async (tx) => {
  //     await tx.executeSql(
  //       "INSERT INTO Tests (date, informations) VALUES ('2023-12-27', 'test')"
  //     );
  //   })
  // }

  // const getData = () => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       "SELECT date FROM Tests",
  //       [],
  //       (tx, results) => {
  //         var len = results.rows.length;
  //         if (len > 0) {
  //           var date = results.rows.item(0).date;
  //           console.log(date);
  //         } else {
  //           console.log('No data');
  //         }
  //       },
  //       (error) => {
  //         console.log('Error executing SQL:', error);
  //       }
  //     );
  //   })
  // }

  // useEffect(() => {
  //   createTable();
  //   setData();
  //   getData();
  // }, []);


  return (
    <NavigationContainer>
    {loading ? <Loading /> : viewOnboarding ?
        <Navigation />
      : < Onboarding setRefresh={ () => setRefresh(!refresh) }/>}
    </NavigationContainer>
  );
}
