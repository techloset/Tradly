import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Colors from '../assets/colors/Colors';
import Fonts from './Fonts';

function Button({title, screen, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      style={{
        backgroundColor: Colors.button1,
        borderRadius: 28,
        width: '90%',
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          color: Colors.white,
          fontFamily: Fonts.semiBold,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
