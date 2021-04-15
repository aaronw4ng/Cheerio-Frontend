import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, H1, H2, H3 } from 'native-base';
import Spacer from '../UI/Spacer';

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const About = () => (
  <Container>
    <Content padder>
      <Spacer size={30} />
      <H1 style={styles.titleText}>READ ME</H1>
      <Spacer size={10} />
      <Text>
        Dnec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
        tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
        malesuada magna mollis euismod. Donec sed odio dui.{' '}
      </Text>

      <Spacer size={30} />
      <H2>Heading 2</H2>
      <Spacer size={10} />
      <Text>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
        tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
        malesuada magna mollis euismod. Donec sed odio dui.{' '}
      </Text>

      <Spacer size={30} />
      <H3>Heading 3</H3>
      <Spacer size={10} />
      <Text>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
        tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
        malesuada magna mollis euismod. Donec sed odio dui.{' '}
      </Text>
    </Content>
  </Container>
);

export default About;
