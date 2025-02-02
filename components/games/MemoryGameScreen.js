import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function MemoryGameScreen() {
  const [cards, setCards] = useState([1, 1, 2, 2, 3, 3, 4, 4]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const shuffleCards = () => {
    setCards(cards.sort(() => Math.random() - 0.5));
    setFlipped([]);
    setMatched([]);
    setGameOver(false);
  };

  const handleCardPress = (index) => {
    if (flipped.length === 2) return;

    setFlipped([...flipped, index]);

    if (flipped.length === 1) {
      if (cards[flipped[0]] === cards[index]) {
        setMatched([...matched, cards[index]]);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Memory Game</Text>
      <View style={styles.cards}>
        {cards.map((card, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCardPress(index)}
            style={styles.card}
          >
            <Text style={styles.cardText}>
              {flipped.includes(index) || matched.includes(card) ? card : '?'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {gameOver ? (
        <Text style={styles.gameOverText}>Congratulations! You matched all the pairs!</Text>
      ) : (
        <Button title="Shuffle Cards" onPress={shuffleCards} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    justifyContent: 'center',
  },
  card: {
    width: 70,
    height: 70,
    margin: 5,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  gameOverText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
