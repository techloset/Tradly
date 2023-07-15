import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Colors from '../../assets/colors/Colors';
import Bars1 from '../../components/Bars1';
import Home from '../../assets/images/home.svg';
import Search from '../../assets/images/Search.svg';
import Order from '../../assets/images/Order.svg';
import Store from '../../assets/images/Store.svg';
import Profile from '../../assets/images/Profile.svg';
import TabItem from '../../components/IconBars';
import Avatar4 from '../../assets/images/avatar4.svg';
import SearchInput from '../../components/SearchInput';
import Group441 from '../../assets/images/Group441.svg';
import Group442 from '../../assets/images/Group442.svg';

function AddStore(props) {
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
          <Text style={styles.storeText}> View Store</Text>
        </View>
      </View>
      <View style={styles.removeView}>
        <Text style={styles.removeText}>Remove Store</Text>
      </View>
      <ScrollView>
        <View style={styles.productView}>
          <View style={styles.search}>
            <SearchInput placeholder="Search Product    " />
          </View>
          <Text style={styles.productText}>Products</Text>
          <View style={styles.group}>
            <Group441 />
            <Group442 />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bar}>
        <TabItem icon={<Home />} label="Home" />
        <TabItem icon={<Search />} label="Browse" />
        <TabItem icon={<Store />} label="Store" />
        <TabItem icon={<Order />} label="Order History" />
        <TabItem icon={<Profile />} label="Profile" />
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
    flex: 0.8,
    paddingLeft: 20,
    paddingBottom: 15,
  },
  search: {
    marginTop: 30,
    width: '100%',
  },
  group: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
  },
  productText: {
    marginTop: 15,
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: Colors.black,
    marginLeft: 10,
  },
});
export default AddStore;
