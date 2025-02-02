import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';

export default function BakingSodaVolcanoScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Baking Soda Volcano</Text>
      <Image
        style={styles.image}
        source={{ uri: 'https://your-image-url.com/volcano.jpg' }} // Add your image URL here
      />
      <Text style={styles.instruction}>Step 1: Place a small container (like a plastic bottle) on a tray.</Text>
      <Text style={styles.instruction}>Step 2: Fill the container with baking soda.</Text>
      <Text style={styles.instruction}>Step 3: Add vinegar to the container and watch the eruption!</Text>
      
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
