import React from 'react';

import { Container, Content, H1, H2 } from 'native-base';
import { Image, StyleSheet, View, Alert, Text, TouchableOpacity } from 'react-native';

import AppButton from '../UI/AppButton';
import Spacer from '../UI/Spacer';

const styles = StyleSheet.create({
  H1Style: {
    fontFamily: 'Bungee_Regular',
    fontSize: 38,
    textAlign: 'left',
    marginLeft: 25,
    letterSpacing: 1.5,
    padding: 5,
  },
  H2Style: {
    fontFamily: 'Bungee_Regular',
    textAlign: 'center',
    padding: 25,
    fontSize: 18,
  },
  StackText: {
    marginTop: -55,
  },

  SignInContainer: {
    backgroundColor: '#FCEAB8',
    borderRadius: 50,
    maxWidth: 250,
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderColor: '#000',
    borderWidth: 1,
  },
  SignInText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Bungee_Regular',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    marginRight: 10,
    marginLeft: 10,
  },
  SignUpContainer: {
    backgroundColor: '#fff',
    borderRadius: 50,
    maxWidth: 250,
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderColor: '#000',
    borderWidth: 1,
  },
  SignUpText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Bungee_Regular',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    marginRight: 10,
    marginLeft: 10,
  },
});

const Login = () => (
  <Container>
    <Content padder>
      <Image source={require('../../../assets/images/Landing1.png')} style={{ marginLeft: 150 }} />
      <View style={styles.StackText}>
        <H1 style={styles.H1Style}>Hello,</H1>
        <H1 style={styles.H1Style}>Welcome!</H1>
      </View>
      <Spacer size={150} />
      <View style={{ flexDirection: 'row' }}>
        {/* Sign In Button */}
        <TouchableOpacity
          onPress={() => Alert.alert('Insert sign in code')}
          style={styles.SignInContainer}
        >
          <Text style={styles.SignInText}>Sign In</Text>
        </TouchableOpacity>

        {/* Sign Up Button */}
        <TouchableOpacity
          onPress={() => Alert.alert('Insert sign up code')}
          style={styles.SignUpContainer}
        >
          <Text style={styles.SignUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </Content>
  </Container>
);

export default Login;
