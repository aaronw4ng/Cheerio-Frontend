import React from 'react';

import * as Progress from 'react-native-progress';
import { Actions } from 'react-native-router-flux';
import { Container, Content, H1, H2 } from 'native-base';

import { Alert, Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppButton from '../UI/AppButton';
import Spacer from '../UI/Spacer';
import NavBar from '../NavBar';

const styles = StyleSheet.create({
  H1Style: {
    fontFamily: 'NunitoRegular',
    fontSize: 26,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  H2Style: {
    fontFamily: 'NunitoBold',
    textAlign: 'center',
    fontSize: 20,
    width: 350,
  },
  button: {
    fontFamily: 'NunitoBold',
    textAlign: 'center',
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 35,
    borderColor: 'white',
    backgroundColor: 'rgba(255,255,255,0.3)',
    height: 72,
    width: 360,
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

const Question3 = () => (
  <Container>
    <LinearGradient
      colors={['#A9CDEB', '#B9B6E5', '#FFC38F', '#FF6E90']}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <Content padder>
        <Spacer size={15} />
        <H1 style={styles.H1Style}>Read Me</H1>
        <Spacer size={25} />
        <Progress.Bar
          progress={0.42}
          width={370}
          height={8}
          unfilledColor="rgba(246, 246, 246, 0.1)"
          borderColor="white"
          color="white"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
        <Spacer size={25} />
        <H2 style={styles.H2Style}>When you look at the person do you feel annoyance or pain?</H2>
        <Spacer size={100} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Annoyance</Text>
        </TouchableOpacity>
        <Spacer size={25} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pain</Text>
        </TouchableOpacity>
        <Spacer size={25} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Both</Text>
        </TouchableOpacity>
        <Spacer size={100} />
        <AppButton onPress={() => Actions.Question4()} title="Next Question" />
      </Content>
      <NavBar />
    </LinearGradient>
  </Container>
);

export default Question3;
