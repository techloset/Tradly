import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Love2 from '../assets/images/Love2.svg';
import Cart3 from '../assets/images/Cart3.svg';
import SearchInput from '../components/SearchInput';
import Colors from '../assets/colors/Colors';
import {useNavigation} from '@react-navigation/native';
import Fonts from './Fonts';

function Bars1({title}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container1}>
      <View style={styles.gView}>
        <Text style={styles.g}>{title}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingHorizontal: 15,
            width: '30%',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
            <Love2 />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ProDetail')}>
            <Cart3 />
          </TouchableOpacity>
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

export default Bars1;
