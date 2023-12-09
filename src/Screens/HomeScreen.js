import { View, Text, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { mainStyles } from '../Styles/style';

const generateItems = ({ navigation }) => {
  const [tests, setTest] = useState([]);

  const url = 'https://tgryl.pl/quiz/tests';

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((json) => setTest(json))
    .catch((error) => console.log(error));
  }, []);

  const formatTags = (tags) => {
    if (!tags || tags.length === 0) {
      return '';
    }

    const formatedTags = tags.map((tag) => `#${tag}`).join(', ');

    return formatedTags;
  }

  return (
    tests.map((test) => (
      <View key={test.id} style={{width:'90%'}}>
        <TouchableOpacity key={test.id} style={mainStyles.box} 
            onPress={() => navigation.navigate(test.name, { testId: test.id })}>
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