import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const NavBar = () => (
  <View
    style={{
      height: 80,
      width: 410,
      borderRadius: 24,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    }}
  >
    <TouchableOpacity
      onPress={() => {
        Actions.LandingPage();
      }}
    >
      <Image source={require('../../assets/images/navbar/home-nav-inactive.png')} />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        Actions.LandingPage();
      }}
    >
      <Image source={require('../../assets/images/navbar/readme-nav-active.png')} />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        Actions.GeneralEmotionSearch();
      }}
    >
      <Image source={require('../../assets/images/navbar/dictionary-nav-inactive.png')} />
    </TouchableOpacity>
  </View>
);

export default NavBar;
