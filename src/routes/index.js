import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import DefaultProps from '../constants/navigation';
import AppConfig from '../constants/config';
import Question1 from '../components/Questions/Question1';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        <Stack
          key="home"
          title={AppConfig.appName}
          icon={() => <Icon name="planet" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="home" component={Question1} />
        </Stack>
      </Tabs>
    </Scene>
  </Stack>
);

export default Index;
