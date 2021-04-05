import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createSwitchNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import GameScreen from './src/screens/GameScreen';


const switchNavigator = createSwitchNavigator(
  {
    Home: HomeScreen,
    Game: GameScreen
  }
);



export default createAppContainer(switchNavigator);
