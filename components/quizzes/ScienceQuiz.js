import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

export default function ScienceQuiz() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [playConfetti, setPlayConfetti] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [buttonScale] = useState(new Animated.Value(1));

  const questions = [
    {
      question: 'What is the chemical symbol for water?',
      answer: 'H2O',
      options: ['H2O', 'O2', 'CO2', 'H3O'],
      image: require('../../assets/iconAbout.jpeg'),
    },
    {
      question: 'How many planets are in our solar system?',
      answer: '8',
      options: ['8', '9', '10', '7'],
      image: require('../../assets/iconQuiz.png'),
    },
    {
      question: 'What is the process by which plants make food?',
      answer: 'Photosynthesis',
      options: ['Respiration', 'Photosynthesis', 'Transpiration', 'Digestion'],
      image: require('../../assets/iconGames.jpeg'),
    },
    {
      question: 'What gas do plants absorb from the atmosphere?',
      answer: 'Carbon dioxide',
      options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
      image: require('../../assets/iconExperiment.jpeg'),
    },
  ];

  const checkAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
      setFeedbackMessage('Correct! Great Job!');
      setPlayConfetti(true);
    } else {
      setFeedbackMessage('Oops! Try again!');
    }

    Animated.sequence([
      Animated.spring(buttonScale, {
        toValue: 1.2,
        useNativeDriver: true,
      }),
      Animated.spring(buttonScale, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setPlayConfetti(false);
      setFeedbackMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>✨ Science Quiz Time! ✨</Text>

      <Text style={styles.question}>{questions[currentQuestion].question}</Text>

      <Image
        source={questions[currentQuestion].image}
        style={styles.image}
        resizeMode="contain"
      />

      {feedbackMessage && (
        <Text
          style={
            feedbackMessage === 'Correct! Great Job!' ? styles.correctFeedback : styles.wrongFeedback
          }
        >
          {feedbackMessage}
        </Text>
      )}

      {questions[currentQuestion].options.map((option, index) => (
        <Animated.View
          key={index}
          style={{ transform: [{ scale: buttonScale }] }}
        >
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => checkAnswer(option)}
          >
            <Text style={styles.buttonText}>{option}</Text>
          </TouchableOpacity>
        </Animated.View>
      ))}

      {playConfetti && <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />}

      <Text style={styles.scoreText}>Score: {score}</Text>

      <TouchableOpacity style={styles.nextButton} onPress={nextQuestion}>
        <Text style={styles.nextButtonText}>Next Question</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3E5F5',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8E24AA',
    marginBottom: 20,
    fontFamily: 'Comic Sans MS',
    textAlign: 'center',
    marginTop: 20,
  },
  question: {
    fontSize: 18,
    color: '#3E2723',
    fontWeight: 'bold',
    fontFamily: 'Comic Sans MS',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 20,
    borderRadius: 8,
  },
  correctFeedback: {
    fontSize: 20,
    color: '#388E3C',
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Comic Sans MS',
    textAlign: 'center',
  },
  wrongFeedback: {
    fontSize: 20,
    color: '#D32F2F',
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Comic Sans MS',
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#81C784',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Comic Sans MS',
  },
  scoreText: {
    fontSize: 22,
    color: '#0288D1',
    fontFamily: 'Comic Sans MS',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  nextButton: {
    backgroundColor: '#FF7043',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Comic Sans MS',
  },
});
