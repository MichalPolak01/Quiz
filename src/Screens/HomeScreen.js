import { View, Text, Button } from 'react-native'
import React from 'react'
import {tests} from '../../testData';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const generateItems = ({ navigation }) => {
  return (
    tests.map((test) => (
      <TouchableOpacity key={test.id} style={{width: '90%', height: '120px', backgroundColor: 'lightblue', marginTop: '5%',
                                  padding: 25, borderRadius: 20}} onPress={() => navigation.navigate(test.title, { testId: test.id })}>
        <Text style={{color: '#0909db', fontSize: 20, fontWeight: 500, marginBottom: '5%', textAlign: 'center'}}>Tytuł: {test.title}</Text>
        <Text style={{color: 'green'}}>Tagi: {test.tags}</Text>
        <Text style={{color: '#0909db', fontWeight: 500, marginTop: '2%'}}>Opis:</Text>
        <Text style={{color: '#000', textAlign: 'justify'}}>{test.description}</Text>
      </TouchableOpacity>
    ))
  )
}

export const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
      {generateItems({navigation})}
      
      <TouchableOpacity onPress={() => navigation.navigate('Results')} 
      style={{margin: '5%', backgroundColor: '#0909db', padding: '5%', borderRadius: 20 }}>
        <Text style={{color: '#fff', fontWeight: 500}}>Sprawdź wyniki</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}