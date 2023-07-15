import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Colors from '../assets/colors/Colors';

function Button1({title}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.button2,
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
          fontSize: 16,
          color: 'rgba(19, 181, 140, 1)',
          fontFamily: 'Montserrat-Medium',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default Button1;
