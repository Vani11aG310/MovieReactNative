import React, {Component} from 'react';
import Container from './Container';
import Theatre from './TheatrePage';
import Trailer from './TrailerPage';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';

const RootStack = createStackNavigator(
  {
    Home: {
      screen:Container
    },
    Details: {
      screen:Theatre
    },
    Trailer: {
      screen:Trailer
    },
  },
  {
    index: 0,
    headerMode:'none',
    initialRouteName: 'Home'
  }
)
const AppContainer = createAppContainer(RootStack);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <AppContainer />;
  }
}

export default App;
