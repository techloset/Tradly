import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Love2 from '../assets/images/Love2.svg';
import Ellipse1 from '../assets/images/Ellipse1.svg';
import Cart from '../assets/images/Cart.svg';
import SearchInput from '../components/SearchInput';
import Colors from '../assets/colors/Colors';
import {useNavigation} from '@react-navigation/native';
import Fonts from './Fonts';

function Bars({title}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container1}>
      <View style={styles.gView}>
        <Text style={styles.g}>{title}</Text>
        <View
          style={{
            flexDirection: 'row',
            //   backgroundColor: '#000',
            justifyContent: 'space-evenly',
            width: '30%',
            //   marginRight: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
            <Love2 />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ProDetail')}>
            <Cart />
          </TouchableOpacity>
          <Ellipse1 style={{top: 0, right: 20}} />
        </View>
      </View>
      <View style={{marginTop: 23}}>
        <SearchInput placeholder="Search Product    " />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {backgroundColor: Colors.primary, paddingBottom: 16},
  gView: {
    marginTop: 24,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  g: {
    fontSize: 24,
    fontFamily: Fonts.bold,
    color: Colors.white,
  },
});

export default Bars;
