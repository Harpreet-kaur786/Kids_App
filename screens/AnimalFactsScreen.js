import React from 'react';
import { ScrollView, Text, StyleSheet, Button } from 'react-native';

export default function AnimalFactsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Amazing Animal Facts</Text>
      <Text style={styles.fact}>1. An octopus has three hearts.</Text>
      <Button
        title="Learn More About Octopuses"
        onPress={() => navigation.navigate('Animal Facts Details', { animal: 'Octopus' })}
      />
      <Text style={styles.fact}>2. Elephants are the only mammals that can't jump.</Text>
      <Button
        title="Learn More About Elephants"
        onPress={() => navigation.navigate('Animal Facts Details', { animal: 'Elephant' })}
      />
      <Text style={styles.fact}>3. A group of flamingos is called a 'flamboyance.'</Text>
      <Button
        title="Learn More About Flamingos"
        onPress={() => navigation.navigate('Animal Facts Details', { animal: 'Flamingo' })}
      />
      <Text style={styles.fact}>4. Honey never spoils.</Text>
      <Button
        title="Learn More About Honey"
        onPress={() => navigation.navigate('Animal Facts Details', { animal: 'Honey' })}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  fact: {
    fontSize: 18,
    marginBottom: 10,
  },
});
