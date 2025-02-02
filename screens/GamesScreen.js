import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function GameScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Game to Play</Text>

      <Button 
        title="Word Counting Game" 
        onPress={() => navigation.navigate('Word Counting Game')} 
      />
      <Button 
        title="Memory Matching Game"
        onPress={() => navigation.navigate('Memory Game')} 
      />
      <Button 
        title="Math Quiz Game" 
        onPress={() => navigation.navigate('Math Quiz Game')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
