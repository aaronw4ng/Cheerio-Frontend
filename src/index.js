import React from 'react';
import * as Font from 'expo-font';
import { Router, Stack } from 'react-native-router-flux';

// Fonts
import { Root, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import theme from '../native-base-theme/variables/commonColor';

import Routes from './routes/index';
import Loading from './components/UI/Loading';

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
    });

    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <Root>
        <StyleProvider style={getTheme(theme)}>
          <Router>
            <Stack key="root">{Routes}</Stack>
          </Router>
        </StyleProvider>
      </Root>
    );
  }
}

export default App;
