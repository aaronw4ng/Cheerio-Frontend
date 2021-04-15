import React from 'react';

import { Container, Content, H1, H2 } from 'native-base';

import Spacer from '../UI/Spacer';

const About = () => (
  <Container>
    <Content padder>
      <Spacer size={15} />
      <H1 style={{ fontFamily: 'Bungee_Regular', fontSize: 26 }}>READ ME</H1>
      <Spacer size={10} />
      <H2
        style={{
          fontFamily: 'Arial_Round',
          textAlign: 'center',
          fontSize: 20,
        }}
      >
        How are you feeling?
      </H2>
    </Content>
  </Container>
);

export default About;
