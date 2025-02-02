import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MathQuizGameScreen() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [feedback, setFeedback] = useState('');

  const questions = [
    { question: '2 + 3', answer: 5 },
    { question: '4 - 1', answer: 3 },
    { question: '6 * 2', answer: 12 },
    { question: '9 / 3', answer: 3 },
  ];

  const checkAnswer = (userAnswer) => {
    if (parseInt(userAnswer) === questions[currentQuestion].answer) {
      setScore(score + 1);
      setFeedback('Correct!');
    } else {
      setFeedback('Oops! Try again.');
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setFeedback('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Math Quiz Game</Text>
      <Text style={styles.question}>{questions[currentQuestion].question}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Answer 1" onPress={() => checkAnswer(1)} />
        <Button title="Answer 2" onPress={() => checkAnswer(2)} />
        <Button title="Answer 3" onPress={() => checkAnswer(3)} />
        <Button title="Answer 4" onPress={() => checkAnswer(4)} />
      </View>
      <Text style={styles.feedback}>{feedback}</Text>
      <Text style={styles.score}>Score: {score}</Text>
      <Button title="Next Question" onPress={nextQuestion} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  feedback: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
