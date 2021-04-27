import React from 'react';
import { Scene, Stack } from 'react-native-router-flux';
import Question1 from '../components/Questions/Question1';
import ResultPage from '../components/ResultPage';
import EmotionSearch from '../components/EmotionSearch';
import LandingPage from '../components/LandingPage';
import Login from '../components/Screens/Login';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Stack key="home">
        <Scene key="home" component={EmotionSearch} />
      </Stack>
    </Scene>
  </Stack>
);

export default Index;
