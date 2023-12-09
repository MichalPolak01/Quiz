import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { mainStyles } from '../Styles/style';


export const TestScreen = () => {

  const route = useRoute();
  const { testId } = route.params;

  const [selectedTest, setSelectedTest] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(30);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);

  const navigation = useNavigation();

  const allQuestions = selectedTest.tasks;
  const [currentQuestionIndex, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  // const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
  const [answerSelected, setAnswerSelected] = useState(null);
  const [isAnswerDisable, setIsAnswerDisable] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [sentScore, setSentScore] = useState(false);

  const url = `https://tgryl.pl/quiz/test/${testId}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setSelectedTest(json);
        setLoading(false);
        startTimer(json.tasks[0].duration);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  useEffect(() => {
    if (isTimerActive) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
  
      return () => clearInterval(interval);
    }
  }, [isTimerActive]);

  useEffect(() => {
    if (timer === 0) {
      handleTimeout();
    }
  }, [timer]);

  // useEffect(() => {
  //   resetTimer();
  // }, [currentQuestionIndex]);

  const startTimer = (duration) => {
    setTimer(duration);
  };

  const resetTest = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
    setCorrectAnswerIndex(null);
    setAnswerSelected(null);
    setIsAnswerDisable(false);
    setShowNextButton(false);
    resetTimer();
  };

  const handleTimeout = () => {
    setCorrectAnswerIndex(allQuestions[currentQuestionIndex].answers.findIndex((a) => a.isCorrect));
    setAnswerSelected(null);
    setIsAnswerDisable(true);
    setShowNextButton(true);
    setIsTimerActive(false);
  };

  const goToHome = () => {
    resetTest();
    navigation.navigate('Home');
  };

  const handleNext = () => {
    if (currentQuestionIndex === allQuestions.length - 1) {
      setSentScore(true);
      setShowScore(true);
    } else {
      setCurrentQuestion((prevIndex) => prevIndex + 1);
      setCorrectAnswerIndex(null);
      setAnswerSelected(null);
      setIsAnswerDisable(false);
      setShowNextButton(false);
      startTimer(allQuestions[currentQuestionIndex + 1].duration);
      setIsTimerActive(true);
    }
  };

  const renderQuestion = () => {
    if (loading) {
      return <Loading />;
    }

    return (
      <View style={{ padding: 20 }}>
        <View style={{  margin: 2 }}>
          <Text style={{ fontSize: 20, opacity: 0.6, marginRight: 2, fontFamily: 'Kalnia-Medium', color: '#0909db' }}>
            Pytanie {currentQuestionIndex + 1}/{allQuestions.length}
          </Text>
          <Text style={{ fontSize: 20, opacity: 0.6, marginRight: 2, fontFamily: 'Kalnia-Medium', color: '#0909db' }}>
            <Text style={{color: 'red'}}>Time: {timer}s</Text>
          </Text>
        </View>

        <Text style={{ fontSize: 30, textAlign: 'center', marginVertical: 20, color: '#e91e62', fontFamily: 'Mina-Bold' }}>
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
      </View>
    );
  };

  const renderOptions = () => {
    if (loading) {
      return <Loading />;
    }

    return (
      <View>
        {allQuestions[currentQuestionIndex]?.answers.map((answer, index) => (
          <View key={index} style={{ width: '95%', marginHorizontal: '2.5%', marginVertical: '1.5%' }}>
            <TouchableOpacity
              onPress={() => validateAnswer(answer, index)}
              key={index}
              style={[
                mainStyles.answer,
                index === answerSelected && index === correctAnswerIndex && {
                  borderColor: 'green',
                  backgroundColor: 'rgba(0, 255, 0, 0.3)',
                },
                index === answerSelected && index !== correctAnswerIndex && {
                  borderColor: 'red',
                  backgroundColor: 'rgba(255, 0, 0, 0.3)',
                },
                index !== answerSelected && index === correctAnswerIndex && {
                  borderColor: 'green',
                  backgroundColor: 'rgba(0, 255, 0, 0.3)',
                },
              ]}
              disabled={isAnswerDisable}
            >
              <Text style={{ fontSize: 14, color: '#0909db', fontFamily: 'Kalnia-Medium', width: '90%' }}>
                {answer.content}
              </Text>
  
              {index === correctAnswerIndex && answerSelected !== null && (
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40 / 2,
                    backgroundColor: 'green',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Ionicons name="checkmark-outline" size={30} color={'white'} />
                </View>
              )}
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  };

  const validateAnswer = (answer, index) => {
    setAnswerSelected(index);
    setCorrectAnswerIndex(allQuestions[currentQuestionIndex].answers.findIndex((a) => a.isCorrect));
    setIsAnswerDisable(true);
  
    if (answer.isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setShowNextButton(true);
    setIsTimerActive(false);
  };

  const resetTimer = () => {
    setTimer(allQuestions[currentQuestionIndex].duration);
  };

  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress={handleNext}
          style={{ marginTop: 20, width: '90%', backgroundColor: '#e91e62', padding: 15, borderRadius: 20, margin: '5%' }}>
          <Text style={{ fontSize: 25, color: 'white', textAlign: 'center', fontFamily: 'Mina-Bold' }}>Następne pytanie</Text>
        </TouchableOpacity>
      );
    }
  };

  const sendResult = async () => {
    const url_POST = 'https://tgryl.pl/quiz/result';
  
    try {
      const response = await fetch(url_POST, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          nick: 'Test',
          score: score,
          total: allQuestions.length,
          type: selectedTest.name,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      console.log('Response ok');
  
    } catch (error) {
      console.error('Error sending result:', error);
    }
    setSentScore(false);
  };
  

  const showResults = () => {
    if (sentScore) {
      sendResult();
    }
    return (
      <View style={{ height: 600, alignItems: 'center', justifyContent: 'center', backgroundColor: '#faf5f5' }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '90%',
            borderRadius: 20,
            padding: 20,
            alignItems: 'center',
            borderColor: '#0909db',
            borderWidth: 2,
          }}>
          <Text style={{ fontSize: 40, fontFamily: 'Mina-Bold', color: '#e91e62', marginBottom: 20 }}>
            Gratulacje!
          </Text>
          <Text style={{ fontSize: 25, color: '#0909db', textAlign: 'center', marginBottom: 10, fontFamily: 'Kalnia-Medium' }}>
            Punkty, które udało Ci się zdobyć w quizie {selectedTest.name} to:
          </Text>
          <Text style={{ fontSize: 30, fontFamily: 'Kalnia-Medium', color: 'purple', marginBottom: 20 }}>
            {score}/{allQuestions.length}
          </Text>
          <TouchableOpacity onPress={goToHome} style={{ backgroundColor: '#e91e62', padding: 15, width: '100%', borderRadius: 20 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 25, fontFamily: 'Mina-Bold' }}>
              Strona główna
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const Loading = () => {
    return (
      <View style={mainStyles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  return (
    <ScrollView>
      {showScore ? (
        showResults()
      ) : (
        <>
          {renderQuestion()}
          {renderOptions()}
          {renderNextButton()}
        </>
      )}
    </ScrollView>
  );
};