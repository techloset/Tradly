import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Colors from '../../assets/colors/Colors';
import BackArrow from '../../assets/images/BackArrow.svg';
import Business from '../../assets/images/Business.svg';
import SectionHeader from '../../components/SectionHeader';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

function CreateStore(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SectionHeader icon={<BackArrow />} title="My Store" />
      <View style={styles.container1}></View>
      <View style={styles.business}>
        <Business style={{marginBottom: 35}} />
        <Text style={styles.text}>
          This information is used to setup your shop
        </Text>
      </View>
      <ScrollView>
        <View style={styles.inputView}>
          <InputField label="Store Name" placeholder="Tradly Store" />
          <InputField label="Store Web Address" placeholder="tradly.app" />
          <InputField
            label="Store Description"
            placeholder="Sell Groceries and homecare product"
          />
          <InputField label="Store Type" placeholder="Groceries Store" />
          <InputField
            label="Address"
            placeholder="125  Crescent Ave, Woodbury "
          />
          <InputField label="City" placeholder="New York" />
          <InputField label="State" placeholder="125  Crescent Ave, Woodbury" />
          <InputField label="Country" placeholder="USA" />
          <InputField label="Courier Name" placeholder="Blue Dart" />
          <InputField label="Tagline" placeholder="Groceries" />
        </View>
        <Button title="Create" screen={'EditStore'} navigation={navigation} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingBottom: 20,
  },
  container1: {
    backgroundColor: Colors.primary,
    paddingBottom: 13,
  },
  business: {
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: 'center',
    marginBottom: 2,
    backgroundColor: Colors.grey,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: Colors.neutralBlack,
  },
  inputView: {
    backgroundColor: Colors.white,
    paddingBottom: 20,
  },
});
export default CreateStore;
