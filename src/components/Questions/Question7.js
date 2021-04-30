import React from 'react';

import GallerySwiper from 'react-native-gallery-swiper';
import * as Progress from 'react-native-progress';
import { Container, Content, H1, H2 } from 'native-base';
import { Alert, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import AppButton from '../UI/AppButton';
import Spacer from '../UI/Spacer';

const styles = StyleSheet.create({
  H1Style: { fontFamily: 'NunitoRegular', fontSize: 26 },
  H2Style: {
    fontFamily: 'NunitoBold',
    textAlign: 'center',
    fontSize: 20,
  },
});

const Question7 = () => (
  <Container>
    <Content padder>
      <Spacer size={15} />
      <H1 style={styles.H1Style}>READ ME</H1>
      <Spacer size={25} />
      <Progress.Bar
        progress={0.1}
        width={370}
        height={10}
        unfilledColor="#fff"
        borderColor="#000"
        color="#FCEAB8"
        style={{ marginLeft: 'auto', marginRight: 'auto' }}
      />
      <Spacer size={25} />
      <H2 style={styles.H2Style}>What would you more likely ask them?</H2>
      <Spacer size={100} />
      <GallerySwiper
        style={{
          height: 300,
          width: 250,
          marginRight: 'auto',
          marginLeft: 'auto',
          backgroundColor: '#000',
          borderRadius: 25,
          overflow: 'hidden',
        }}
        images={[
          {
            uri: '../../../assets/images/agression1.png',
            dimensions: { width: 1080, height: 1920 },
          },
          {
            uri: 'https://i.imgur.com/c9x0VLe.jpg',
            dimensions: { width: 1080, height: 1920 },
          },
          {
            uri: 'https://i.imgur.com/c9x0VLe.jpg',
            dimensions: { width: 1080, height: 1920 },
          },
          {
            uri: 'https://i.imgur.com/c9x0VLe.jpg',
            dimensions: { width: 1080, height: 1920 },
          },
          {
            uri: 'https://i.imgur.com/c9x0VLe.jpg',
            dimensions: { width: 1080, height: 1920 },
          },
        ]}
      />
      <Spacer size={100} />
      <AppButton onPress={() => alert("question 7 pressed")} title="Next Question" />
      <View style={{
          height: 80,
          width: 410,
          borderRadius: 24,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          
        }}>
          <TouchableOpacity><Image source={require('../../../assets/images/navbar/home-nav-inactive.png')} /></TouchableOpacity>
          <TouchableOpacity><Image source={require('../../../assets/images/navbar/readme-nav-active.png')} /></TouchableOpacity>
          <TouchableOpacity><Image source={require('../../../assets/images/navbar/dictionary-nav-inactive.png')} /></TouchableOpacity>

        </View>
    </Content>
  </Container>
);

export default Question7;
