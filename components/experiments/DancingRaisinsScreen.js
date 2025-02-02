import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';

export default function DancingRaisinsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dancing Raisins</Text>
      <Image
        style={styles.image}
        source={{ uri: 'https://your-image-url.com/dancingraisins.jpg' }} // Add your image URL here
      />
      <Text style={styles.instruction}>Step 1: Fill a glass with clear soda (like Sprite).</Text>
      <Text style={styles.instruction}>Step 2: Drop a few raisins into the glass.</Text>
      <Text style={styles.instruction}>Step 3: Watch as the raisins move up and down in the soda. The bubbles in the soda lift them!</Text>
      
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
