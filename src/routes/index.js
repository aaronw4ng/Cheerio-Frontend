import React from 'react';
import { Scene, Stack } from 'react-native-router-flux';
import Question1 from '../components/Questions/Question1';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Stack key="home">
        <Scene key="home" component={Question1} />
      </Stack>
    </Scene>
  </Stack>
);

export default Index;
