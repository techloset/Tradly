import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Bars1 from '../../components/Bars1';
import Home from '../../assets/images/home.svg';
import Search from '../../assets/images/Search.svg';
import Order from '../../assets/images/Order.svg';
import Store from '../../assets/images/Store.svg';
import Profile from '../../assets/images/Profile.svg';
import Oval from '../../assets/images/Oval.svg';
import TabItem from '../../components/IconBars';
import Colors from '../../assets/colors/Colors';

function Prof(props) {
  return (
    <View style={styles.container}>
      <View style={styles.cont}>
        <Bars1 title="Profile" />
        <View style={styles.oval}>
          <Oval />
          <View style={styles.tradView}>
            <Text style={styles.trad}>Tradly Team</Text>
            <Text style={styles.trad2}>+1 9998887776</Text>
            <Text style={styles.trad2}>info@tradly.co</Text>
          </View>
        </View>
        <View style={styles.profRec}>
          <View style={styles.profView}>
            <Text style={styles.profText}>Edit Profile</Text>
          </View>
          <View style={styles.profView}>
            <Text style={styles.profText}>Language & Currency</Text>
          </View>
          <View style={styles.profView}>
            <Text style={styles.profText}>Feedback</Text>
          </View>
          <View style={styles.profView}>
            <Text style={styles.profText}>Refer a Friend</Text>
          </View>
          <View style={styles.profView}>
            <Text style={styles.profText}>Terms & Condditions</Text>
          </View>
          <View style={styles.profView}>
            <Text style={styles.logText}>Logout</Text>
          </View>
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
  cont: {
    backgroundColor: Colors.primary,
    flex: 0.5,
  },
  oval: {
    paddingLeft: 24,
    flexDirection: 'row',
  },
  tradView: {
    paddingLeft: 15,
  },
  trad: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    color: Colors.white,
  },
  trad2: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: Colors.white,
    marginTop: 7,
  },
  profRec: {
    marginTop: 32,
    backgroundColor: Colors.white,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
  },
  profView: {
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 20,
  },
  profText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: Colors.neutralBlack,
  },
  logText: {
    fontSize: 14,
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
export default Prof;
