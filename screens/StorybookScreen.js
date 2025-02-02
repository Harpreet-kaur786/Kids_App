import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function StorybookScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Animal Stories"
        onPress={() => navigation.navigate('Animal Stories')}
      />
      <Button
        title="Space Stories"
        onPress={() => navigation.navigate('Space Stories')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
