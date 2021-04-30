import React from 'react';
import * as Font from 'expo-font';
import { Router, Stack, Scene } from 'react-native-router-flux';

// Font
import { Root, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import theme from '../native-base-theme/variables/commonColor';

import Loading from './components/UI/Loading';

import Question1 from './components/Questions/Question1';
import Question2 from './components/Questions/Question2';
import Question3 from './components/Questions/Question3';
import Question4 from './components/Questions/Question4';
import Question5a from './components/Questions/Question5a';
import Question5b from './components/Questions/Question5b';
import Question6 from './components/Questions/Question6';
import GriefResultPage from './components/GriefResultPage';
import ViolatedResultPage from './components/ViolatedResultPage';
import SadEmotionSearch from './components/SadEmotionSearch';
import AngerEmotionSearch from './components/AngerEmotionSearch';
import GeneralEmotionSearch from './components/GeneralEmotionSearch';
import LandingPage from './components/LandingPage';
import Login from './components/Screens/Login';

class App extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
      NunitoBold: require('../assets/fonts/Nunito-Bold.ttf'),
      NunitoRegular: require('../assets/fonts/Nunito-Regular.ttf'),
    });

    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <Router>
        <Scene key="root">
          <Scene key="Question1" component={Question1} initial />
          <Scene key="Question2" component={Question2} />
          <Scene key="Question3" component={Question3} />
          <Scene key="Question4" component={Question4} />
          <Scene key="Question5a" component={Question5a} />
          <Scene key="Question5b" component={Question5b} />
          <Scene key="Question6" component={Question6} />
          <Scene key="GriefResultPage" component={GriefResultPage} />
          <Scene key="GeneralEmotionSearch" component={GeneralEmotionSearch} />
          <Scene key="SadEmotionSearch" component={SadEmotionSearch} />
          <Scene key="ViolatedResultPage" component={ViolatedResultPage} />
          <Scene key="AngerEmotionSearch" component={AngerEmotionSearch} />
          <Scene key="Login" component={Login} />
          <Scene key="LandingPage" component={LandingPage} />
        </Scene>
      </Router>
    );
  }
}

export default App;
