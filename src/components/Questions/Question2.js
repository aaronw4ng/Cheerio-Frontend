import React from 'react';

import GallerySwiper from 'react-native-gallery-swiper';
import * as Progress from 'react-native-progress';
import { Container, Content, H1, H2 } from 'native-base';
import { Alert, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
    borderWidth: 1,
    borderRadius:15,
    height: 60,
  }
});

const Question2 = () => (
  <Container>
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
      <H2 style={styles.H2Style}>Is this feeling caused by a person or something that happened?</H2>
      <Spacer size={100} />
      <TouchableOpacity>
          <Text style={styles.button}>A Person</Text>
      </TouchableOpacity>
      <Spacer size={25} />
      <TouchableOpacity>
          <Text style={styles.button}>Something that happened</Text>
      </TouchableOpacity>
      <Spacer size={25} />
      <TouchableOpacity>
          <Text style={styles.button}>Both</Text>
      </TouchableOpacity>
      <Spacer size={100} />
      <AppButton onPress={() => alert("question 2")} title="Next Question" />
    </Content>
  </Container>
);



export default Question2;
