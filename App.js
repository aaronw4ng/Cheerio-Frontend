import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import React, { useState } from 'react';

import Root from './src/index';

const fetchFonts = () => Font.loadAsync({ 'Bungee-Regular': require('./assets/fonts/Bungee-Regular.ttf') });

export default function App() {
  // Load fonts
  const [dataLoaded, setDataLoaded] = useState(false);

  // Check if loaded
  if (!dataLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} />;
  }
  return <Root />;
}
