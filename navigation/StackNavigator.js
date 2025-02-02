import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import AnimalFactsScreen from '../screens/AnimalFactsScreen';
import ArtScreen from '../screens/ArtScreen';
import ExperimentsScreen from '../screens/ExperimentsScreen';
import GamesScreen from '../screens/GamesScreen';
import QuizScreen from '../screens/QuizScreen';
import StorybookScreen from '../screens/StorybookScreen';

// Components for each game, quiz, storybook, experiment
import MathQuizGameScreen from '../components/games/MathQuizGameScreen';
import MemoryGameScreen from '../components/games/MemoryGameScreen';
import WordCountingGameScreen from '../components/games/WordCountingGameScreen';
import BakingSodaVolcanoScreen from '../components/experiments/BakingSodaVolcanoScreen';
import DancingRaisinsScreen from '../components/experiments/DancingRaisinsScreen';
import MagicMilkScreen from '../components/experiments/MagicMilkScreen';
import MathQuiz from '../components/quizzes/MathQuiz';
import ScienceQuiz from '../components/quizzes/ScienceQuiz';
import AnimalStories from '../components/storybooks/AnimalStories';
import SpaceStories from '../components/storybooks/SpaceStories';

// Import DrawingScreen
import DrawingScreen from '../components/art/DrawingScreen' ; // Ensure this import is correct

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About Us" component={AboutUsScreen} />
      <Stack.Screen name="Animal Facts" component={AnimalFactsScreen} />
      <Stack.Screen name="Art" component={ArtScreen} />
      <Stack.Screen name="Experiments" component={ExperimentsScreen} />
      <Stack.Screen name="Games" component={GamesScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
      <Stack.Screen name="Storybooks" component={StorybookScreen} />

      {/* Individual Game, Quiz, and Storybook Screens */}
      <Stack.Screen name="Math Quiz Game" component={MathQuizGameScreen} />
      <Stack.Screen name="Memory Game" component={MemoryGameScreen} />
      <Stack.Screen name="Word Counting Game" component={WordCountingGameScreen} />
      
      {/* Experiments Screens */}
      <Stack.Screen name="Baking Soda Volcano" component={BakingSodaVolcanoScreen} />
      <Stack.Screen name="Dancing Raisins" component={DancingRaisinsScreen} />
      <Stack.Screen name="Magic Milk" component={MagicMilkScreen} />

      {/* Quizzes Screens */}
      <Stack.Screen name="Math Quiz" component={MathQuiz} />
      <Stack.Screen name="Science Quiz" component={ScienceQuiz} />

      {/* Storybooks Screens */}
      <Stack.Screen name="Animal Stories" component={AnimalStories} />
      <Stack.Screen name="Space Stories" component={SpaceStories} />

      {/* Add DrawingScreen */}
      <Stack.Screen name="Drawing" component={DrawingScreen} />
    </Stack.Navigator>
  );
}
