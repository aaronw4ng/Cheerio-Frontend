import React from 'react';

import GallerySwiper from 'react-native-gallery-swiper';
import * as Progress from 'react-native-progress';
import { Container, Content, H1, H2 } from 'native-base';
import { Alert, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import AppButton from '../UI/AppButton';
import Spacer from '../UI/Spacer';

const styles = StyleSheet.create({
  H1Style: { fontFamily: 'Bungee_Regular', fontSize: 26 },
  H2Style: {
    fontFamily: 'Arial_Round',
    textAlign: 'center',
    fontSize: 20,
  },
});

const Question1 = () => (
  <Container>
    <LinearGradient
    colors={['#64B3F4', '#B9B6E5']}
    start={[0.1, 0.1]}
    style={styles.linearGradient}>
    <Content padder>
      <Spacer size={15} />
      <H1 style={styles.H1Style}>READ ME</H1>
      <Spacer size={25} />
      <Progress.Bar
        progress={0.1}
        width={335}
        height={10}
        unfilledColor="#fff"
        borderColor="#000"
        color="#FCEAB8"
        style={{ marginLeft: 'auto', marginRight: 'auto' }}
      />
      <Spacer size={25} />
      <H2 style={styles.H2Style}>How are you feeling?</H2>
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
          {
            uri: 'https://i.imgur.com/c9x0VLe.jpg',
            dimensions: { width: 1080, height: 1920 },
          },
        ]}
      />
      <Spacer size={100} />
      <AppButton onPress={() => alert("button pressed")} title="Next Question" />
    </Content>
    </LinearGradient>
  </Container>
);

export default Question1;
