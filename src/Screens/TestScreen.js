import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { tests } from '../../testData';
import { mainStyles } from '../Styles/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export const TestScreen = () => {
  const route = useRoute();
  const { testId } = route.params;

  const selectedTest = tests.find((test) => test.id === testId);

  const navigation = useNavigation();

  const allQuestions = selectedTest.tasks;
  const [currentQuestionIndex, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
  const [answerSelected, setAnswerSelected] = useState(null);
  const [isAnswerDisable, setIsAnswerDisable] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const validateAnswer = (answer, index) => {
    setAnswerSelected(index);
    setCorrectAnswerIndex(allQuestions[currentQuestionIndex].answers.findIndex((a) => a.isCorrect));
    setIsAnswerDisable(true);

    if (answer.isCorrect) {
      setScore(score + 1);
    }
    setShowNextButton(true);
  }

  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      setShowScore(true);
    } else {
      setCurrentQuestion(currentQuestionIndex + 1);
      setCorrectAnswerIndex(null);
      setAnswerSelected(null);
      setIsAnswerDisable(false);
      setShowNextButton(false);
    }
  }

  const goToHome = () => {
    setShowScore(false);

    setCurrentQuestion(0);
    setScore(0);

    setCorrectAnswerIndex(null);
    setAnswerSelected(null);
    setIsAnswerDisable(false);
    setShowNextButton(false);

    navigation.navigate('Home')
  }

  const renderQuestion = () => {
    return (
      <View style={{padding: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 20, opacity: 0.6, marginRight: 2}}>
            Pytanie {currentQuestionIndex + 1}/{allQuestions.length}
          </Text>
        </View>

        <Text style={{fontSize: 30, textAlign: 'center', marginVertical: 20, color: '#0909db', fontWeight: '500'}}>
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
      </View>
    )
  }

  const renderOptions = () => {
    return (
      <View>
        {allQuestions[currentQuestionIndex]?.answers.map((answer, index) => (
          <TouchableOpacity
            onPress={() => validateAnswer(answer, index)}
            key={index}
            style={[
              mainStyles.answer,
              index === answerSelected && index === correctAnswerIndex &&
                {borderColor: 'green', backgroundColor: 'rgba(0, 255, 0, 0.3)'},
              index === answerSelected && index !== correctAnswerIndex &&
                {borderColor: 'red', backgroundColor: 'rgba(255, 0, 0, 0.3)'},
              index !== answerSelected && index === correctAnswerIndex &&
              { borderColor: 'green', backgroundColor: 'rgba(0, 255, 0, 0.3)'},
            ]}
            disabled={isAnswerDisable}
          >
            <Text style={{ fontSize: 20, color: '#0909db', fontWeight: '400' }}>{answer.content}</Text>

            {index === correctAnswerIndex && answerSelected !== null && (
              <View
                style={{ width: 40, height: 40, borderRadius: 40 / 2, backgroundColor: 'green',
                  justifyContent: 'center', alignItems: 'center'}}>
                <Ionicons name="checkmark-outline" size={30} color={'white'} />
              </View>
            )}

            {index === answerSelected && index !== correctAnswerIndex && (
              <View
                style={{ width: 40, height: 40, borderRadius: 40 / 2, backgroundColor: 'red',
                        justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="alert-outline" size={30} color={'white'} />
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity onPress={handleNext} style={{marginTop: 20, width:"90%", backgroundColor: '#0909db',
        padding: 15, borderRadius: 20, margin: '5%'}} >
          <Text style={{fontSize: 30, color: 'white', textAlign: 'center'}}>Następne pytanie</Text>
        </TouchableOpacity>
      )
    }
  }

  return (
    <View >
      {renderQuestion() }
      {renderOptions() }
      {renderNextButton() }

      <Modal animationType='slide' transparent={true} visible={showScore}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#faf5f5'}}>
          <View style={{backgroundColor: 'white', width: '90%', borderRadius: 20, padding: 20,
                        alignItems: 'center', borderColor: '#0909db', borderWidth: 2}}>
            <Text style={{fontSize: 40, fontWeight: 'bold', fontStyle:'italic', color: '#0909db', marginBottom: 20}}>
              Gratulacje!
            </Text>
            <Text style={{fontSize: 25,  color: '#0909db', textAlign: 'center', marginBottom: 10}}>
              Punkty, które udało Ci sie zdobyć:
            </Text>
            <Text style={{fontSize: 30, fontWeight: 'bold',color: 'purple', marginBottom: 20}}>
              {score}/{allQuestions.length}
            </Text>
            <TouchableOpacity onPress={goToHome} style={{backgroundColor: '#0909db', padding: 20,
                                                        width: '100%', borderRadius: 20}}>
              <Text style={{textAlign: 'center', color: 'white', fontSize: 30}}>
                Strona główna
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </Modal>
    </View>
  )
};