import React from 'react';

import GallerySwiper from 'react-native-gallery-swiper';
import * as Progress from 'react-native-progress';
import { Container, Content, H1, H2 } from 'native-base';
import { Alert, Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
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
  button: {
    fontFamily: 'Arial_Round',
    textAlign: 'center',
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 35,
    borderColor: 'white',
    backgroundColor: 'rgba(255,255,255,0.3)',
    height: 72,
    width: 334,


  },
  buttonText: { textAlign: 'center', marginTop: 20, fontSize: 20 },
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Question2 = () => (
  <Container>
    <LinearGradient
      colors={['#A9CDEB', '#B9B6E5', '#FFC38F', '#FF6E90']}
      start={[0.1, 0.1]}
      style={styles.linearGradient}>
      <Content padder>
        <Spacer size={15} />
        <H1 style={styles.H1Style}>READ ME</H1>
        <Spacer size={25} />
        <Progress.Bar
          progress={0.3}
          width={332}
          height={8}
          unfilledColor="rgba(246, 246, 246, 0.1)"
          borderColor="white"
          color="white"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
        <Spacer size={25} />
        <H2 style={styles.H2Style}>Is this feeling caused by a person or something that happened?</H2>
        <Spacer size={100} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>A Person</Text>
        </TouchableOpacity>
        <Spacer size={25} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Something that happened</Text>
        </TouchableOpacity>
        <Spacer size={25} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Both</Text>
        </TouchableOpacity>
        <Spacer size={100} />
        <AppButton onPress={() => alert("question 2")} title="Next Question" />

      </Content>
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
    </LinearGradient>
  </Container>
);



export default Question2;
