import { createAppContainer } from 'react-navigation';
import {createSwitchNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import GameScreen from './src/screens/GameScreen';
import SoloScreen from './src/screens/SoloScreen';


const switchNavigator = createSwitchNavigator(
  {
    Home: HomeScreen,
    Game: GameScreen,
    Solo: SoloScreen,
  }
);



export default createAppContainer(switchNavigator);
