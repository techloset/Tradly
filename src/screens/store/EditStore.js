import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../../assets/colors/Colors';
import Bars1 from '../../components/Bars1';
import Avatar4 from '../../assets/images/avatar4.svg';
import Button1 from '../../components/Button1';
import BottomTab from '../../components/BottomTab';
import {useNavigation} from '@react-navigation/native';

function EditStore(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Bars1 title="My Store" />
      <View style={styles.business}>
        <Avatar4 style={{marginBottom: 16}} />
        <Text style={styles.text}>Tradly Store</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.edit}>
          <Text style={styles.editText}>Edit store</Text>
        </View>
        <View style={styles.store}>
          <TouchableOpacity onPress={() => navigation.navigate('StoreProfile')}>
            <Text style={styles.storeText}> View Store</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.removeView}>
        <Text style={styles.removeText}>Remove Store</Text>
      </View>
      <View style={styles.productView}>
        <Text style={styles.productText}>You dont have product</Text>
        <Button1
          title="Add Product"
          screen={'AddProduct'}
          navigation={navigation}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  business: {
    marginTop: 60,
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    color: Colors.black,
  },
  main: {
    flexDirection: 'row',
    marginHorizontal: 50,
    justifyContent: 'space-around',
    padding: 5,
    paddingBottom: 30,
  },
  edit: {
    borderColor: Colors.primary,
    borderRadius: 15,
    borderWidth: 1,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  editText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: Colors.primary,
  },
  store: {
    backgroundColor: Colors.primary,
    borderRadius: 15,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storeText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: Colors.white,
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: 20,
  },
  removeView: {
    padding: 12,
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: Colors.black,
  },
  removeText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: Colors.neutralBlack,
  },
  productView: {
    backgroundColor: Colors.grey,
    flex: 1,
    alignItems: 'center',
  },
  productText: {
    marginTop: 60,
    marginBottom: 40,
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.black,
  },
});
export default EditStore;
