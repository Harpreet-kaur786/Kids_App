import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ConfettiCannon from 'react-native-confetti-cannon';

export default function MathQuiz() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [playConfetti, setPlayConfetti] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [buttonColors, setButtonColors] = useState([]);
  const [wrongAttempts, setWrongAttempts] = useState(0); // Track number of wrong attempts

  const questions = [
    { question: '2 + 3 = ?', options: ['5', '6', '7', '4'], answer: '5' },
    { question: '4 * 2 = ?', options: ['8', '6', '10', '12'], answer: '8' },
    { question: '9 / 3 = ?', options: ['3', '2', '4', '1'], answer: '3' },
    { question: '5 - 2 = ?', options: ['3', '4', '5', '2'], answer: '3' },
  ];

  const checkAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
      setPlayConfetti(true);
      setFeedbackMessage('Correct! Great Job!');
      setButtonColors(
        questions[currentQuestion].options.map((option) =>
          option === answer ? 'green' : 'gray'
        )
      );
      setWrongAttempts(0); // Reset wrong attempts on correct answer
    } else {
      if (wrongAttempts === 0) {
        setFeedbackMessage('Wrong! Try again!');
        setButtonColors(
          questions[currentQuestion].options.map((option) =>
            option === answer ? 'red' : 'gray'
          )
        );
      } else if (wrongAttempts === 1) {
        setFeedbackMessage('Wrong again! Here is the correct answer:');
        setButtonColors(
          questions[currentQuestion].options.map((option) =>
            option === questions[currentQuestion].answer
              ? 'green'
              : option === answer
              ? 'red'
              : 'gray'
          )
        );
      }
      setWrongAttempts(wrongAttempts + 1); // Increment wrong attempts
    }
    setIsAnswerSelected(true); // Mark answer as selected
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setPlayConfetti(false);
      setFeedbackMessage('');
      setIsAnswerSelected(false);
      setButtonColors([]);
      setWrongAttempts(0); // Reset wrong attempts for next question
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Math Quiz!</Text>
      <Text style={styles.subHeader}>Let's see how much you know!</Text>

      <View style={styles.questionContainer}>
        <Text style={styles.question}>{questions[currentQuestion].question}</Text>
      </View>

      {/* Confetti Animation */}
      {playConfetti && <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />}

      {/* Feedback message */}
      {feedbackMessage && (
        <Text
          style={
            feedbackMessage === 'Correct! Great Job!' ? styles.correctFeedback : styles.wrongFeedback
          }>
          {feedbackMessage}
        </Text>
      )}

      <View style={styles.optionsContainer}>
        {questions[currentQuestion].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              { backgroundColor: buttonColors[index] || '#4CAF50' },
            ]}
            onPress={() => checkAnswer(option)}>
            <Icon name="check-circle" size={20} color="#fff" />
            <Text style={styles.buttonText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.scoreText}>Score: {score}</Text>

      {isAnswerSelected && (
        <TouchableOpacity style={styles.nextButton} onPress={nextQuestion}>
          <Text style={styles.nextButtonText}>Next Question</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEB3B',
    padding: 20,
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#F44336',
    marginBottom: 20,
    fontFamily: 'Comic Sans MS',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 20,
    color: '#0288D1',
    fontFamily: 'Comic Sans MS',
    marginBottom: 30,
    textAlign: 'center',
  },
  questionContainer: {
    marginBottom: 40,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    width: '90%',
    alignItems: 'center',
  },
  question: {
    fontSize: 24,
    color: '#3E2723',
    fontWeight: 'bold',
    fontFamily: 'Comic Sans MS',
    textAlign: 'center',
  },
  correctFeedback: {
    fontSize: 22,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Comic Sans MS',
    textAlign: 'center',
  },
  wrongFeedback: {
    fontSize: 22,
    color: '#D32F2F',
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Comic Sans MS',
    textAlign: 'center',
  },
  optionsContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  optionButton: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
    fontFamily: 'Comic Sans MS',
  },
  scoreText: {
    fontSize: 22,
    color: '#0288D1',
    fontFamily: 'Comic Sans MS',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#FF7043',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Comic Sans MS',
  },
});
