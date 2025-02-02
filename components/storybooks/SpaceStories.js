import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const SpaceStories = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Space Stories</Text>
      
      <View style={styles.storyContainer}>
        <Text style={styles.storyTitle}>The Adventures of the Little Astronaut</Text>
        <Text style={styles.storyText}>
          Once upon a time, in a galaxy far, far away, a young astronaut named Lily
          traveled through space. She went on exciting adventures and discovered
          new planets filled with strange creatures. One day, she found a planet
          where the clouds were made of candy, and the trees had stars hanging
          from their branches. Lily made many new friends and had the best time
          of her life exploring the universe!
        </Text>
      </View>

      <View style={styles.storyContainer}>
        <Text style={styles.storyTitle}>The Space Race</Text>
        <Text style={styles.storyText}>
          The space race began between two planets, one filled with robots and the
          other with aliens. The robots had advanced technology, but the aliens
          had special powers. The race was tough, but the aliens used their ability
          to control gravity to win! Everyone celebrated the victory, and the two
          planets formed an alliance to explore space together.
        </Text>
      </View>

      <View style={styles.storyContainer}>
        <Text style={styles.storyTitle}>The Moonlight Mystery</Text>
        <Text style={styles.storyText}>
          On a dark night, the moon disappeared from the sky! Astronaut Max set
          off in his rocket to discover what happened. After a long journey, he
          found out that a mischievous space creature had hidden the moon behind
          a cloud. With a little teamwork, Max and his friends managed to bring
          the moon back and restore light to the night sky.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  storyContainer: {
    marginBottom: 20,
  },
  storyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  storyText: {
    fontSize: 18,
    color: '#333',
    lineHeight: 24,
  },
});

export default SpaceStories;
