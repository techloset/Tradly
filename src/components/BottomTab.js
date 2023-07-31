import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../assets/colors/Colors';
import {useNavigation} from '@react-navigation/native';
import TabItem from './TabItem';
import Home from '../assets/images/home.svg';
import Search from '../assets/images/Search.svg';
import Store from '../assets/images/Store.svg';
import Order from '../assets/images/Order.svg';
import Profile from '../assets/images/Profile.svg';

function BottomTab() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <TabItem
          label="Home"
          icon={<Home />}
          screen={'Dashboard'}
          navigation={navigation}
        />
        <TabItem
          label="Browse"
          icon={<Search />}
          screen={'Browse'}
          navigation={navigation}
        />
        <TabItem
          label="Store"
          icon={<Store />}
          screen={'MyStore'}
          navigation={navigation}
        />
        <TabItem
          label="Order History"
          icon={<Order />}
          screen={'History'}
          navigation={navigation}
        />
        <TabItem
          label="Profile"
          icon={<Profile />}
          screen={'Prof'}
          navigation={navigation}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.white},
  bar: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
});
export default BottomTab;
