import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const styles = StyleSheet.create({
  ButtonContainer: {
    backgroundColor: 'rgba(246, 246, 246, 0.1)',
    borderRadius: 50,
    maxWidth: 250,
    marginBottom: 70,
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderColor: 'white',
    borderWidth: 1.2,
    shadowColor: 'white', shadowRadius: 2, shadowOpacity: 5, shadowOffset: {width: 3, height: 3},
  },
  ButtonText: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Bungee_Regular',
    alignSelf: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
});

const NextButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.ButtonContainer}>
    <Text style={styles.ButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default NextButton;
