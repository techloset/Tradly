import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../../assets/colors/Colors';
import Bars1 from '../../components/Bars1';
import Business from '../../assets/images/Business.svg';
import Button from '../../components/Button';
import Home from '../../assets/images/home.svg';
import Search from '../../assets/images/Search.svg';
import Order from '../../assets/images/Order.svg';
import Store from '../../assets/images/Store.svg';
import Profile from '../../assets/images/Profile.svg';
import TabItem from '../../components/IconBars';

function MyStore(props) {
  return (
    <View style={styles.container}>
      <Bars1 title="My Store" />
      <View style={styles.business}>
        <Business style={{marginBottom: 35}} />
        <Text style={styles.text}>You Dont Have a Store</Text>
      </View>
      <Button title="Create Store" />
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
    backgroundColor: Colors.grey,
    flex: 1,
  },
  business: {
    marginTop: 60,
    alignItems: 'center',
    marginBottom: 37,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.black,
  },

  bar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: 20,
  },
});
export default MyStore;
