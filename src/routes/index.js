import React from 'react';
import { Scene, Stack } from 'react-native-router-flux';

import Question1 from '../components/Questions/Question6';
import GriefResultPage from '../components/GriefResultPage';
import ViolatedResultPage from '../components/ViolatedResultPage';
import SadEmotionSearch from '../components/SadEmotionSearch';
import AngerEmotionSearch from '../components/AngerEmotionSearch';
import GeneralEmotionSearch from '../components/GeneralEmotionSearch';
import LandingPage from '../components/LandingPage';
import Login from '../components/Screens/Login';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Stack key="home">
        {/* Start with question flow for sake of demo */}
        <Scene key="home" component={AngerEmotionSearch} />
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
