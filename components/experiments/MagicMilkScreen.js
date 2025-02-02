import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';

export default function MagicMilkScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Magic Milk</Text>
      <Image
        style={styles.image}
        source={{ uri: 'https://your-image-url.com/magicmilk.jpg' }} // Add your image URL here
      />
      <Text style={styles.instruction}>Step 1: Fill a shallow plate with milk.</Text>
      <Text style={styles.instruction}>Step 2: Add drops of food coloring to the milk.</Text>
      <Text style={styles.instruction}>Step 3: Dip a cotton swab in dish soap and touch it to the center of the plate. Watch the colors move!</Text>
      
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
