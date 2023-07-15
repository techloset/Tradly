import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../assets/colors/Colors';

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
    borderColor: '#FFFFFF',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: Colors.white,
  },
});

export default IconText;
