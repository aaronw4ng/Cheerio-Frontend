import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const styles = StyleSheet.create({
  ButtonContainer: {
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
  ButtonText: {
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

const NextButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.ButtonContainer}>
    <Text style={styles.ButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default NextButton;
