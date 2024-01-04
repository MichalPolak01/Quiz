import { View, Text, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { mainStyles } from '../Styles/style';
import SQLite from 'react-native-sqlite-storage';
import _ from 'lodash';
import { CommonActions } from '@react-navigation/native';


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


const generateItems = ({ navigation }) => {
  const [tests, setTest] = useState([]);

  const getTests = async () => {
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

  const formatTags = (tags) => {
    if (!tags || tags.length === 0) {
      return '';
    }

    const formatedTags = tags.map((tag) => `#${tag}`).join(', ');

    return formatedTags;
  }

  useEffect(() => {
    getTests();
  }, []);

  const shuffledTests = _.shuffle(tests);

  const handleNavigateToTest = (testName, testId) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: testName,
            params: { testId: testId },
          },
        ],
      })
    );
  };

  return (
    shuffledTests.map((test) => (
      <View key={test.id} style={{width:'90%'}}>
        <TouchableOpacity key={test.id} style={mainStyles.box} 
            onPress={() => handleNavigateToTest(test.name, test.id)}>
          <Text style={{color: '#0909db', fontSize: 20, fontFamily: 'Mina-Bold', marginBottom: '5%', textAlign: 'center',
          backgroundColor: '#e91e62', color: 'white', padding:10, borderRadius: 15}}>Temat: {test.name}</Text>
          <Text style={{color: '#0909db', fontFamily: 'Mina-Regular'}}>Tagi: 
            <Text style={{color: 'green'}}> {formatTags(test.tags)}</Text></Text>
          <Text style={{color: '#0909db', marginTop: '2%', fontFamily: 'Mina-Regular' }}>Poziom: 
            <Text style={{color: '#000'}}> {test.level}</Text></Text>
          <Text style={{color: '#0909db', marginTop: '2%', fontFamily: 'Mina-Regular' }}>Liczba pytań:
            <Text style={{color: '#000'}}> {test.numberOfTasks}</Text></Text>
          <Text style={{color: '#0909db', marginTop: '2%', fontFamily: 'Mina-Regular' }}>Opis:</Text>
          <Text style={{color: '#000', textAlign: 'justify', fontFamily: 'Kalnia-Medium'}}>{test.description}</Text>
        </TouchableOpacity>
      </View>
    ))
  )
}

export const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
      {generateItems({navigation})}
      <View style={{width:'90%', margin: '5%'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Results')} 
        style={{backgroundColor: '#e91e62', padding: '4%', borderRadius: 20 }}>
          <Text style={{color: '#fff', fontFamily: 'Mina-Bold', textAlign: 'center', fontSize: 20}}>Sprawdź wyniki</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}