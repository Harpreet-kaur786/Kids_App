import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

export default function DrawingScreen() {
  const [drawing, setDrawing] = useState('');

  const startDrawing = () => setDrawing('Drawing started!');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drawing Screen</Text>
      <Text style={styles.drawing}>{drawing}</Text>
      <TouchableOpacity onPress={startDrawing} style={styles.button}>
        <Text style={styles.buttonText}>Start Drawing</Text>
      </TouchableOpacity>
      <Button title="Clear" onPress={() => setDrawing('')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFEB3B',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  drawing: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
