import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Group5 from '../assets/images/Group5.svg';
import Colors from '../assets/colors/Colors';
import Fonts from './Fonts';

function SearchInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', top: 15, left: 24}}>
        <Group5 />
      </View>
      <TextInput
        placeholderTextColor="rgba(79, 79, 79, 1)"
        style={styles.email}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginHorizontal: 10,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.white,
    paddingLeft: 64,
    paddingRight: 10,
    flexDirection: 'row',
    width: '90%',
  },
  email: {
    fontFamily: Fonts.medium,
    fontSize: 14,
  },
});
export default SearchInput;
