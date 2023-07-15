import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Colors from '../../assets/colors/Colors';
import BackArrow from '../../assets/images/BackArrow.svg';
import SectionHeader from '../../components/SectionHeader';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import Group438 from '../../assets/images/Group438.svg';
import Group439 from '../../assets/images/Group439.svg';

function EditProduct(props) {
  return (
    <View style={styles.container}>
      <SectionHeader icon={<BackArrow />} title="Edit Product" />
      <View style={styles.container1}></View>
      <View style={{backgroundColor: Colors.grey, paddingBottom: 27}}>
        <View style={styles.business}>
          <Group439 />
          <Group438 />
        </View>
        <Text style={styles.text}>Max. 4 photos per product</Text>
      </View>
      <ScrollView>
        <View style={styles.inputView}>
          <InputField label="Product Name" placeholder="Brocolli" />
          <InputField label="Category Product" placeholder="Vegetables" />
          <View style={{flexDirection: 'row'}}>
            <InputField label="Price" placeholder="$ 30" />
            <InputField label="Offer Price" placeholder="$  15" />
          </View>
          <InputField
            label="Location Details"
            placeholder="Kualalumpur, Malaysia"
          />
          <InputField
            label="Product Description"
            placeholder="Lorem ipsum dolor sit amet"
          />
          <InputField label="Condition" placeholder="Organic" />
          <InputField label="Price Type" placeholder="Fixed" />
          <InputField
            label="Additional Detail "
            placeholder="Cash On Delivery"
          />
        </View>
        <Button title="Edit Product" />
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
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 2,
    backgroundColor: Colors.grey,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: Colors.neutralBlack,
    marginLeft: 30,
  },
  inputView: {
    backgroundColor: Colors.white,
    paddingBottom: 20,
  },
});
export default EditProduct;
