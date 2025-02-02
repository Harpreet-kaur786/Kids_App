import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function QuizScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Choose Your Quiz!</Text>

      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/iconQuiz.png')} // Add a fun, colorful image to catch attention
          style={styles.image}
        />
      </View>

      <Text style={styles.subHeader}>Select a topic to start</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.quizButton}
          onPress={() => navigation.navigate('Math Quiz')}
        >
          <Icon name="calculator" size={30} color="#fff" />
          <Text style={styles.buttonText}>Math Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.quizButton}
          onPress={() => navigation.navigate('Science Quiz')}
        >
          <Icon name="flask" size={30} color="#fff" />
          <Text style={styles.buttonText}>Science Quiz</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Get ready to have fun and learn!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFEB3B', // Yellow color, kid-friendly
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#F44336', // Bright red for an exciting header
    marginBottom: 20,
    fontFamily: 'Comic Sans MS', // Fun, playful font
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 22,
    color: '#0288D1', // Blue color for sub-header
    fontFamily: 'Comic Sans MS',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  quizButton: {
    backgroundColor: '#4CAF50', // Green for a calm, welcoming color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginBottom: 20,
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
    marginLeft: 10, // Space between icon and text
  },
  footerContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#0288D1',
    fontFamily: 'Comic Sans MS',
  },
});
