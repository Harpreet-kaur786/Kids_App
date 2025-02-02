import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export default function WordCountingGameScreen() {
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const sentence = 'This is a simple sentence for counting words.';
  const correctAnswer = 7; // Number of words in the sentence

  const checkAnswer = () => {
    if (parseInt(userAnswer) === correctAnswer) {
      setFeedback('Correct!');
    } else {
      setFeedback('Oops! Try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Word Counting Game</Text>
      <Text style={styles.sentence}>{sentence}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number of words"
        keyboardType="numeric"
        value={userAnswer}
        onChangeText={setUserAnswer}
      />
      <Button title="Check Answer" onPress={checkAnswer} />
      {feedback && <Text style={styles.feedback}>{feedback}</Text>}
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
  sentence: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    marginBottom: 20,
  },
  feedback: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
