import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AnimalStories() {
  return (
    <View style={styles.container}>
      <Text style={styles.storyTitle}>The Lion and the Mouse</Text>
      <Text style={styles.storyText}>
        Once upon a time, a lion caught a mouse. The mouse begged the lion to let him go. The lion felt sorry and let him go...
      </Text>
      <Button title="Next Story" onPress={() => alert('Next Story coming soon!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  storyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  storyText: {
    fontSize: 18,
    marginBottom: 20,
  },
});
