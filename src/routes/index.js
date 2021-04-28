import React from 'react';
import { Scene, Stack } from 'react-native-router-flux';
import Question1 from '../components/Questions/Question1';
import ResultPage from '../components/ResultPage';
import EmotionSearch from '../components/EmotionSearch';
import GeneralEmotionSearch from '../components/GeneralEmotionSearch';
import LandingPage from '../components/LandingPage';
import Login from '../components/Screens/Login';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Stack key="home">
        <Scene key="home" component={GeneralEmotionSearch} />
      </Stack>
    </Scene>
  </Stack>
);

export default Index;

/*
const AppNavigator = createStackNavigator(  
  {  
      Question1: Question1Screen,
      LandingPage: LandingPageScreen
  },  
  {  
      initialRouteName: "LandingPage"  
  }  
);  

const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
  render() {  
      return <AppContainer />;  
  }  
}  */