import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../assets/colors/Colors';
import Fonts from './Fonts';

const DiscountedPriceText = ({originalPrice, discountPercentage}) => {
  const discountedPrice =
    originalPrice - (originalPrice * discountPercentage) / 100;

  return (
    <View style={styles.container}>
      <Text style={styles.discountedPrice}>${discountedPrice.toFixed(0)}</Text>
      <Text style={styles.originalPrice}>${originalPrice.toFixed(0)}</Text>
      <Text style={styles.discountPercentage}>{discountPercentage}% off</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  discountedPrice: {
    color: Colors.primary,
    fontSize: 18,
    fontFamily: Fonts.bold,
  },
  originalPrice: {
    marginLeft: 10,
    color: Colors.neutralBlack,
    fontSize: 14,
    fontFamily: Fonts.medium,
    textDecorationLine: 'line-through',
  },
  discountPercentage: {
    marginLeft: 10,
    color: Colors.neutralBlack,
    fontFamily: Fonts.medium,
    fontSize: 14,
  },
});

export default DiscountedPriceText;
