import { View, Text, Button } from 'react-native'
import React from 'react'
import {tests} from '../../testData';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const generateItems = ({ navigation }) => {
  return (
    tests.map((test) => (
      <TouchableOpacity key={test.id} style={{width: '90%', height: '120px', backgroundColor: 'white', marginTop: '5%',
                                  padding: 25, borderRadius: 20, borderColor: '#0909db', borderWidth: 1}} 
                                  onPress={() => navigation.navigate(test.topic, { testId: test.id })}>
        <Text style={{color: '#0909db', fontSize: 20, fontWeight: 500, marginBottom: '5%', textAlign: 'center',
         backgroundColor: '#0909db', color: 'white', padding:10, borderRadius: 15}}>Temat: {test.topic}</Text>
        <Text style={{color: 'green', fontFamily: 'Verdana'}}>Tagi: {test.tags}</Text>
        <Text style={{color: '#0909db', fontWeight: 500, marginTop: '2%', fontFamily: 'Verdana' }}>Opis:</Text>
        <Text style={{color: '#000', textAlign: 'justify', fontFamily: 'Verdana'}}>{test.description}</Text>
      </TouchableOpacity>
    ))
  )
}

export const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
      {generateItems({navigation})}
      
      <TouchableOpacity onPress={() => navigation.navigate('Results')} 
      style={{margin: '5%', width: 300, backgroundColor: '#0909db', padding: '5%', borderRadius: 20 }}>
        <Text style={{color: '#fff', fontWeight: 500, textAlign: 'center', fontSize: 20}}>Sprawdź wyniki</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}