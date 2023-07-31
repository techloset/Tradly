import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Group433 from '../assets/images/Group433.svg';
import Colors from '../assets/colors/Colors';
import Fonts from './Fonts';

function PasswordInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', top: 14, left: 20}}>
        <Group433 />
      </View>
      <TextInput
        placeholderTextColor="#fff"
        style={styles.password}
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
    paddingLeft: 75,
  },
  password: {
    fontFamily: Fonts.bold,
    fontSize: 18,
  },
});
export default PasswordInput;
