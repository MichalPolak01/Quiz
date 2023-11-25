import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { tests } from '../../testData';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { mainStyles as styles } from '../Styles/style';

export const TestScreen = () => {
  const route = useRoute();
  const { testId } = route.params;

  const selectedTest = tests.find((test) => test.id === testId);
  return (
    <View style={styles.body}>
      <View style={{width: '90%', margin: '5%', height: '45%'}}>
        <Text style={{fontSize: 30, fontWeight: 500, textAlign: 'center'}}>{selectedTest.questions.question1}/10</Text>
        <Text style={{fontSize: 20, fontWeight: 500, textAlign: 'center', marginTop: '20%'}}>{selectedTest.questions.text}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>a: {selectedTest.questions.answers.a}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>b: {selectedTest.questions.answers.b}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>c: {selectedTest.questions.answers.c}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>d: {selectedTest.questions.answers.d}</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default TestScreen