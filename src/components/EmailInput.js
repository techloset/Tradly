import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
function EmailInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="#fff"
        style={styles.email}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#33907C',
    marginHorizontal: 32,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 1)',
    paddingLeft: 16,
  },
  email: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
  },
});
export default EmailInput;
