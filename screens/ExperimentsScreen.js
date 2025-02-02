import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ExperimentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Science Experiments</Text>
      <Text style={styles.description}>
        Learn and try fun experiments that explain science concepts! Experiment with colors, reactions, and
        create your own science lab at home.
      </Text>
      <Button title="Baking Soda Volcano" onPress={() => alert('Starting Baking Soda Volcano Experiment')} />
      <Button title="Dancing Raisins" onPress={() => alert('Starting Dancing Raisins Experiment')} />
      <Button title="Magic Milk" onPress={() => alert('Starting Magic Milk Experiment')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});
