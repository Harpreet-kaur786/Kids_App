import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function ArtScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎨 Art & Creativity</Text>
      
      {/* Description */}
      <Text style={styles.description}>
        Unleash your creativity! Here, kids can explore different art activities such as drawing, coloring, and making crafts. 
        Art is a wonderful way to express yourself, so start creating today!
      </Text>

      {/* Drawing Button with Icon */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Drawing')}
      >
        <Image source={require('../assets/iconQuiz.png')} style={styles.icon} />
        <Text style={styles.buttonText}>Start Drawing</Text>
      </TouchableOpacity>

      {/* Coloring Button with Icon */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Starting Coloring')}
      >
        <Image source={require('../assets/iconGames.jpeg')} style={styles.icon} />
        <Text style={styles.buttonText}>Coloring</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFEB3B', // Light yellow background
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E91E63', // Fun pink color for the header
    marginBottom: 20,
    fontFamily: 'Comic Sans MS',
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#3E2723',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Comic Sans MS',
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF4081', // Fun pink color for buttons
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 20,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    fontFamily: 'Comic Sans MS',
    marginLeft: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
});
