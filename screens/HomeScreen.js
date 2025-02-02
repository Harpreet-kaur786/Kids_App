import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Welcome to Kids' Science World!</Text>

      <View style={styles.section}>
        <Icon name="puzzle-piece" size={50} color="#4CAF50" />
        <Text style={styles.title}>Quizzes</Text>
        <Text style={styles.fact}>Do you know the Earth’s core is as hot as the sun’s surface? 🌍</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Quiz')}
        >
          <Text style={styles.buttonText}>Start Quizzes</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Icon name="paint-brush" size={50} color="#FF9800" />
        <Text style={styles.title}>Art & Drawing</Text>
        <Text style={styles.fact}>The Eiffel Tower can grow by 15 cm during the summer! 🖌️</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Art')}
        >
          <Text style={styles.buttonText}>Start Drawing</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Icon name="book" size={50} color="#2196F3" />
        <Text style={styles.title}>Storybooks</Text>
        <Text style={styles.fact}>A day on Venus is longer than a year! 📚</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Storybooks')}
        >
          <Text style={styles.buttonText}>Read Stories</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Icon name="paw" size={50} color="#FF5722" />
        <Text style={styles.title}>Animal Facts</Text>
        <Text style={styles.fact}>Elephants are the only animals that can’t jump! 🐘</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Animals')}
        >
          <Text style={styles.buttonText}>Learn About Animals</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Icon name="flask" size={50} color="#9C27B0" />
        <Text style={styles.title}>Experiments</Text>
        <Text style={styles.fact}>Water can boil and freeze at the same time! 🧪</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Experiments')}
        >
          <Text style={styles.buttonText}>Learn Experiments</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Light grey background for a clean look
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    color: '#FF4081',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Arial',
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 10,
    color: '#333',
    fontFamily: 'Arial',
  },
  fact: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: 'Arial',
  },
  button: {
    backgroundColor: '#FF4081',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 15,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
