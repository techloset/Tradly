import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Group5 from '../assets/images/Group5.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../assets/colors/Colors';

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
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginHorizontal: 10,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 1)',
    paddingLeft: 64,
    paddingRight: 10,
    flexDirection: 'row',
    width: '90%',
  },
  email: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
});
export default SearchInput;
