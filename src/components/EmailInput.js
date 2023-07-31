import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Colors from '../assets/colors/Colors';
import Fonts from './Fonts';

function EmailInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="#fff"
        style={styles.email}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    marginHorizontal: 32,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.white,
    paddingLeft: 16,
  },
  email: {
    fontFamily: Fonts.regular,
    fontSize: 18,
  },
});
export default EmailInput;
