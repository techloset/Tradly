import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import Colors from '../assets/colors/Colors';

function InputField({label, ...otherProps}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor="#333A42"
        style={styles.input}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 32,
    marginTop: 24,
    borderBottomWidth: 1,
    borderColor: Colors.grey,
  },
  label: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: Colors.neutralBlack,
    marginBottom: 8,
  },
  input: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: '#333A42',
    marginLeft: -4,
  },
});

export default InputField;
