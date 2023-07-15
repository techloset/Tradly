import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../../assets/colors/Colors';
import Bars1 from '../../components/Bars1';
import Home from '../../assets/images/home.svg';
import Search from '../../assets/images/Search.svg';
import Order from '../../assets/images/Order.svg';
import Store from '../../assets/images/Store.svg';
import Profile from '../../assets/images/Profile.svg';
import TabItem from '../../components/IconBars';
import Rectangle293 from '../../assets/images/Rectangle293.svg';

function History(props) {
  return (
    <View style={styles.container}>
      <Bars1 title="Order History" />
      <View style={styles.business}>
        <Text style={styles.text}>Transcations</Text>
        <View style={styles.janView}>
          <Text style={styles.janText}>Januari 2020</Text>
        </View>
      </View>
      <View style={styles.rec}>
        <Rectangle293 />
        <View style={styles.cocaView}>
          <Text style={styles.coca}>Coca Cola</Text>
          <Text style={styles.dollar}>$25</Text>
        </View>
        <View style={styles.delView}>
          <Text style={styles.delText}>Delivered</Text>
        </View>
      </View>
      <View style={styles.rec2}>
        <Rectangle293 />
        <View style={styles.cocaView}>
          <Text style={styles.coca}>Coca Cola</Text>
          <Text style={styles.dollar}>$25</Text>
        </View>
        <View style={styles.delView2}>
          <Text style={styles.delText2}>Order placed</Text>
        </View>
      </View>
      <View style={styles.rec2}>
        <Rectangle293 />
        <View style={styles.cocaView}>
          <Text style={styles.coca}>Coca Cola</Text>
          <Text style={styles.dollar}>$25</Text>
        </View>
        <View style={styles.delView2}>
          <Text style={styles.delText2}>Payment Confirmed</Text>
        </View>
      </View>
      <View style={styles.rec2}>
        <Rectangle293 />
        <View style={styles.cocaView}>
          <Text style={styles.coca}>Coca Cola</Text>
          <Text style={styles.dollar}>$25</Text>
        </View>
        <View style={styles.delView2}>
          <Text style={styles.delText2}>Processed</Text>
        </View>
      </View>

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
    backgroundColor: '#F6F9FF',
    flex: 1,
  },
  business: {
    paddingVertical: 30,
    paddingLeft: 10,
    flexDirection: 'row',
    backgroundColor: '#F6F9FF',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: Colors.black,
  },
  janView: {
    backgroundColor: '#E3EFF2',
    marginLeft: 10,
    marginTop: 5,
  },
  janText: {
    fontSize: 13,
    fontFamily: 'Montserrat-Bold',
    color: Colors.primary,
  },
  rec: {
    backgroundColor: Colors.white,
    paddingVertical: 16,
    paddingLeft: 16,
    flexDirection: 'row',
  },
  cocaView: {
    marginLeft: 22,
    width: '50%',
  },
  coca: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: Colors.blackText,
  },
  dollar: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: Colors.primary,
  },
  delView: {
    backgroundColor: Colors.primary,
    height: 24,
    marginTop: 8,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  delText: {
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    color: Colors.white,
  },
  rec2: {
    backgroundColor: Colors.white,
    paddingVertical: 16,
    paddingLeft: 16,
    marginTop: 6,
    flexDirection: 'row',
  },
  delView2: {
    height: 24,
    marginTop: 8,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  delText2: {
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    color: Colors.primary,
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
export default History;
