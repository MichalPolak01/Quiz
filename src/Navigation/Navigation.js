import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from '../Screens/HomeScreen';
import {TestScreen} from '../Screens/TestScreen';
import {ResultsScreen} from '../Screens/ResultsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CustomDrawer } from './CustomDrawer';
import SQLite from 'react-native-sqlite-storage';
import { results } from '../../resultsData';
import _ from 'lodash';
import NetInfo from "@react-native-community/netinfo";

const Drawer = createDrawerNavigator();


const generateDrawerScreens = (tests) => {
  const shuffledTests = _.shuffle(tests);

  return shuffledTests.map((test) => (
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


const getRandomTest = (tests) => {
  const randomIndex = Math.floor(Math.random() * tests.length);
  const randomTest = tests[randomIndex];
  console.log("Test"+ randomTest);
  return (
    <Drawer.Screen
      key={randomTest.id}
      name="Random test"
      options={{
        drawerIcon: ({ color }) => (
          <Ionicons name="receipt-outline" size={22} color={color} />
        ),
      }}
      initialParams={{ testId: randomTest.id }}
    >
      {() => <TestScreen topic={randomTest.topic} />}
    </Drawer.Screen>
  );
};


const db = SQLite.openDatabase(
  {
    name: 'quiz.db',
    createFromLocation: '~www/quiz.db',
    location: 'Library',
  },
  () => {
    console.log('Database opened successfully');
  },
  (error) => {
    console.log('Open database error: ' + error.message);
  }
);


export const Navigation = () => {
  const [tests, setTest] = useState([]);

  const url = 'https://tgryl.pl/quiz/tests';
  const urlDetails = "https://tgryl.pl/quiz/test";

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS "
        + "Tests "
        + "(id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, informations TEXT);"
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS "
        + "TestDetails "
        + "(id TEXT PRIMARY KEY, data TEXT);"
      );
    })
  }


  const setData = async () => {
    const currentTimestamp = new Date().getTime();

    console.log("Data set");

    // Sprawdzenie dostępu do internetu
    const netInfoState = await NetInfo.fetch();
    if (!netInfoState.isConnected) {
      console.error("Nie udło się zsynchronizować danych. Brak dostępu do internetu.");
      return;
    }

    try {
      const response = await fetch(url);
      const testsData = await response.json();

      await db.transaction(async (tx) => {
        await tx.executeSql(
          "INSERT OR REPLACE INTO Tests (id, date, informations) VALUES (0, ?, ?)",
          [currentTimestamp, JSON.stringify(testsData)]
        );
      });

      for (const test of testsData) {
        try {
          const response2 = await fetch(`${urlDetails}/${test.id}`);
          const testDetailsData = await response2.json();
  
          await db.transaction(async (tx) => {
            await tx.executeSql(
              "INSERT OR REPLACE INTO TestDetails (id, data) VALUES (?, ?)",
              [test.id, JSON.stringify(testDetailsData)]
            );
          });
        } catch (error) {
          console.error(error);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  const getData = async () => {
    await db.transaction((tx) => {
      tx.executeSql(
        "SELECT informations FROM Tests",
        [],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            var information = results.rows.item(0).informations;
            setTest(JSON.parse(information));
          } else {
            console.log('No data');
          }
        },
        (error) => {
          console.log('Error executing SQL:', error);
        }
      );
    })
  }


  const checkSynchDate = async () => {
    const currentTimestamp = new Date().getTime();

    await db.transaction((tx) => {
      tx.executeSql(
        "SELECT date FROM Tests",
        [],
        (tx, results) => {
          if (results.rows.length > 0) {
            const lastSynchTimestamp = results.rows.item(0).date;
            console.log("Timestamp "+ lastSynchTimestamp);

            // 86400000 = 24h 
            if (currentTimestamp - lastSynchTimestamp > 86400000 || lastSynchTimestamp === undefined) {
              createTable();
              setData();
            }
          } else {
            console.log('No data');
          }
        },
        (error) => {
          console.log('Error executing SQL:', error);
        }
      );
    })
  }

  const refreshData = () => {
    createTable();
    setData();
    // setupDatabase();
  };

  const setupDatabase = async () => {
    await checkSynchDate();
    await getData();
  }

  useEffect(() => {
    setupDatabase();
  }, []);

  return (
    <Drawer.Navigator 
        // drawerContent={props => <CustomDrawer {...props} />}
        drawerContent={(props) => <CustomDrawer {...props} refreshData={refreshData} />}
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
      
      {/* Random test */}
      {tests.length > 0 && getRandomTest(tests)}
      {/* Mapa testów z bazy */}
      {generateDrawerScreens(tests)}
      
    </Drawer.Navigator>
  )
}