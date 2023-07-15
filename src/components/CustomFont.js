import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Fonts from './Fonts';

const CustomFont = ({size, color, weight, text}) => {
  return (
    <Fonts
      style={[
        {
          fontSize: size,
          color: color,
          fontWeight: weight,
        },
      ]}>
      {text}
    </Fonts>
  );
};

export default CustomFont;
