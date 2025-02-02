import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AnimalFactsDetailsScreen({ route }) {
  const { animal } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{animal} Facts</Text>
      <Text style={styles.details}>Here are some interesting facts about {animal}!</Text>
      {/* Add more details about the animal here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 18,
    marginTop: 10,
  },
});
