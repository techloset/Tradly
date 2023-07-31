import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../assets/colors/Colors';
import Fonts from './Fonts';

function IconText({icon, text}) {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '30%',
    height: 30,
    marginTop: 45,
    marginLeft: 10,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  text: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: Colors.white,
  },
});

export default IconText;
