import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Colors from '../assets/colors/Colors';

function Button({title}) {
  return (
    <TouchableOpacity
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
          color: '#FFFFFF',
          fontFamily: 'Montserrat-SemiBold',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
