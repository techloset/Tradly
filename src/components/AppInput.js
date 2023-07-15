import React from 'react';
import {View, StyleSheet} from 'react-native';
import InputField from './InputField';
import Colors from '../assets/colors/Colors';

function AppInput(props) {
  return (
    <View style={styles.container}>
      <InputField label="Name" placeholder="Tradly team" />
      <InputField label="Phone" placeholder="+621234567890" />
      <InputField label="Street address" placeholder="Kualalumpur Malaysia" />
      <InputField label="City" placeholder="Kualalumpur" />
      <InputField label="State" placeholder="Malaysia" />
      <InputField label="Zipcode" placeholder="75119" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.white, flex: 1},
});
export default AppInput;
