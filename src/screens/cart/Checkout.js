import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Colors from '../../assets/colors/Colors';
import BackArrow from '../../assets/images/BackArrow.svg';
import SectionHeader from '../../components/SectionHeader';
import Current from '../../assets/images/Current.svg';
import AppInput from '../../components/AppInput';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import Fonts from '../../components/Fonts';

function Checkout(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SectionHeader icon={<BackArrow />} title="Add a new address" />
      <View style={styles.container1}></View>
      <View style={styles.address}>
        <Current />
        <Text style={styles.addressText}> Use current location</Text>
      </View>
      <ScrollView>
        <AppInput />
        <View style={styles.button}>
          <Button title="Save" screen={'MyCart2'} navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.grey, flex: 1},
  container1: {
    backgroundColor: Colors.primary,
    paddingBottom: 30,
  },
  address: {
    backgroundColor: Colors.white,
    paddingVertical: 21,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  addressText: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: Colors.blue,
  },
  button: {
    backgroundColor: Colors.white,
    paddingTop: 12,
    paddingBottom: 24,
  },
});
export default Checkout;
