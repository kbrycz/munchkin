import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import InfoScreen from './src/screens/InfoScreen';


const switchNavigator = createSwitchNavigator({
  Home: HomeScreen,
  Info: InfoScreen
})

export default createAppContainer(switchNavigator);
