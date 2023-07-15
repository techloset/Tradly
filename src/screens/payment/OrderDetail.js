import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Colors from '../../assets/colors/Colors';
import Vector4 from '../../assets/images/Vector4.svg';
import SectionHeader from '../../components/SectionHeader';
import Rectangle292 from '../../assets/images/Rectangle292.svg';
import Vector3 from '../../assets/images/Vector3.svg';
import Done from '../../assets/images/Done.svg';
import Line2 from '../../assets/images/Line2.svg';
import Group9 from '../../assets/images/Group9.svg';

function OrderDetail(props) {
  return (
    <View style={styles.container}>
      <SectionHeader title="Order Details" icon={<Vector4 />} />
      <View style={styles.container1}></View>
      <View style={styles.address}>
        <Done />
        <Text style={styles.addressText}>Thanks for Order</Text>
      </View>
      <View style={styles.rec}>
        <Rectangle292 />
        <View style={styles.cocaView}>
          <Text style={styles.cocaText}>Coca Cola</Text>
          <Text style={styles.price}>$25</Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={styles.qty}>Qty : 1</Text>
            <Vector3 style={{position: 'relative', top: 8, left: 5}} />
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.track}>
          <Text style={styles.trackText}>Track Order</Text>
          <Text style={styles.id}>Order ID - 123455</Text>
          <Line2 />
        </View>
        <View style={styles.rec2}>
          <Group9 />
          <View style={styles.mainView}>
            <View style={styles.orderView}>
              <Text style={styles.order}>Order Placed</Text>
              <Text style={styles.date}>05/08/2019</Text>
            </View>
            <View style={styles.orderView2}>
              <Text style={styles.date2}>order#123455 from Fashion Point</Text>
              <Text style={styles.date2}>11:10 AM</Text>
            </View>
            <View style={styles.orderView}>
              <Text style={[styles.order, {marginTop: 40}]}>
                Payment Confirmed
              </Text>
              <Text style={styles.date3}>05/08/2019</Text>
            </View>
            <View style={styles.orderView2}>
              <Text style={styles.date2}>Payment Confirmed Status</Text>
              <Text style={styles.date2}>11:10 AM</Text>
            </View>
            <View style={styles.orderView}>
              <Text style={[styles.order, {marginTop: 40}]}>Processed</Text>
              <Text style={styles.date4}>05/08/2019</Text>
            </View>
            <View style={styles.orderView2}>
              <Text style={styles.date2}>Processed Status</Text>
              <Text style={styles.date2}>11:10 AM</Text>
            </View>
            <View style={styles.orderView}>
              <Text style={[styles.order, {marginTop: 40}]}>Delivered</Text>
              <Text style={styles.date4}>05/08/2019</Text>
            </View>
            <View style={styles.orderView2}>
              <Text style={styles.date2}>Delivered Status</Text>
              <Text style={styles.date2}>11:10 AM</Text>
            </View>
          </View>
        </View>
        <View style={styles.addressView}>
          <Text style={styles.addressText}>Delivery Address</Text>
        </View>
        <View style={styles.tradly}>
          <Text style={styles.tradlyText}>Tradly Team</Text>
          <Text style={styles.tradlyText1}>
            Flat Number 512, Eden Garden, Rewari
          </Text>
          <Text style={styles.tradlyText1}>Mobile: 9876543210</Text>
        </View>
        <View style={styles.homeView}>
          <Text style={styles.homeText}>Back To Home</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.grey, flex: 1, paddingBottom: 20},
  container1: {
    backgroundColor: Colors.primary,
    paddingBottom: 30,
  },
  address: {
    backgroundColor: Colors.white,
    paddingVertical: 30,
    alignItems: 'center',
  },
  addressText: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    color: Colors.neutralBlack,
  },
  rec: {
    marginTop: 2,
    backgroundColor: Colors.white,
    paddingTop: 30,
    paddingLeft: 16,
    paddingBottom: 12,
    flexDirection: 'row',
  },
  cocaView: {
    marginLeft: 15,
  },
  cocaText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: Colors.neutralBlack,
    marginTop: 12,
  },
  price: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: Colors.primary,
    marginTop: 12,
  },
  qty: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: Colors.neutralBlack,
  },
  track: {
    marginTop: 16,
    backgroundColor: Colors.white,
    paddingTop: 18,
    paddingLeft: 20,
  },
  trackText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.blackText,
  },
  id: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: Colors.blackText1,
    marginTop: 9,
    marginBottom: 13,
  },
  rec2: {
    backgroundColor: Colors.white,
    paddingTop: 25,
    paddingLeft: 30,
    flexDirection: 'row',
    paddingBottom: 12,
  },
  mainView: {
    width: '90%',
    paddingLeft: 20,
  },
  orderView: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
  },
  order: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: Colors.blackText,
    marginLeft: 5,
  },
  date: {
    paddingLeft: 145,
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    color: Colors.blackText1,
  },
  orderView2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: -35,
  },
  date2: {
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    color: Colors.blackText1,
    marginTop: 6,
  },
  date3: {
    paddingLeft: 95,
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    color: Colors.blackText1,
    marginTop: 40,
  },
  date4: {
    paddingLeft: 165,
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    color: Colors.blackText1,
    marginTop: 40,
  },
  addressView: {
    backgroundColor: Colors.white,
    marginTop: 24,
    padding: 20,
  },
  addressText: {
    color: Colors.blackText,
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  tradly: {
    backgroundColor: Colors.white,
    marginTop: 2,
    padding: 20,
  },
  tradlyText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: Colors.blackText,
  },
  tradlyText1: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: Colors.blackText1,
    marginTop: 8,
  },
  homeView: {
    backgroundColor: Colors.grey,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeText: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.blackText,
  },
});
export default OrderDetail;
