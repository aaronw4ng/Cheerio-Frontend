import React from 'react';
import { Scene, Stack } from 'react-native-router-flux';

import Questions from '../components/Questions/index';
import ResultPage from '../components/ResultPage';
import EmotionSearch from '../components/EmotionSearch';
import GeneralEmotionSearch from '../components/GeneralEmotionSearch';
import LandingPage from '../components/LandingPage';
import Login from '../components/Screens/Login';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Stack key="home">
        {/* Start with question flow for sake of demo */}
        <Scene key="home" component={Questions} />
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
