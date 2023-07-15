import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Colors from '../../assets/colors/Colors';
import BackArrow from '../../assets/images/BackArrow.svg';
import SectionHeader from '../../components/SectionHeader';
import Button from '../../components/Button';
import Mastercard from '../../assets/images/Mastercard.svg';
import InputField from '../../components/InputField';

function AddCard(props) {
  return (
    <View style={styles.container}>
      <SectionHeader icon={<BackArrow />} title="Add Card" />
      <View style={styles.container1}></View>
      <Mastercard style={styles.card} />
      <ScrollView>
        <View style={styles.inputView}>
          <InputField label="Card Number" placeholder="5627 2158 9854 8869" />
          <InputField label="Name" placeholder="Tradly" />
          <View style={{flexDirection: 'row'}}>
            <InputField label="Expires Date" placeholder="12/08" />
            <InputField label="CVC" placeholder="***" />
          </View>
        </View>
        <View style={styles.button}>
          <Button title="Add Credit Card" />
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
  button: {
    backgroundColor: Colors.white,
    paddingTop: 12,
    paddingBottom: 24,
    marginTop: 30,
  },
  card: {
    marginTop: -30,
    marginHorizontal: 30,
    marginBottom: 50,
  },
  inputView: {
    backgroundColor: Colors.white,
  },
});
export default AddCard;
