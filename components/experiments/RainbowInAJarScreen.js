import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';

export default function RainbowInAJarScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Rainbow in a Jar</Text>
      <Image
        style={styles.image}
        source={{ uri: 'https://your-image-url.com/rainbowinajar.jpg' }} // Add your image URL here
      />
      <Text style={styles.instruction}>Step 1: Fill a clear jar with different liquids (e.g., honey, dish soap, water, vegetable oil, rubbing alcohol) that have different densities.</Text>
      <Text style={styles.instruction}>Step 2: Carefully pour the liquids one by one, starting with the densest liquid at the bottom.</Text>
      <Text style={styles.instruction}>Step 3: Watch as the liquids form layers and create a rainbow effect!</Text>
      
      <Button
        title="Back to Experiments"
        onPress={() => navigation.goBack()}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  instruction: {
    fontSize: 18,
    marginBottom: 10,
  },
});
