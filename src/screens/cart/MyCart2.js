import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../../assets/colors/Colors';
import BackArrow from '../../assets/images/BackArrow.svg';
import SectionHeader from '../../components/SectionHeader';
import Rectangle292 from '../../assets/images/Rectangle292.svg';
import Vector3 from '../../assets/images/Vector3.svg';
import Button from '../../components/Button';

function MyCart2(props) {
  return (
    <View style={styles.container}>
      <SectionHeader icon={<BackArrow />} title="My Cart" />
      <View style={styles.container1}></View>
      <View style={styles.address}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.addressText}>Deliver To Tradly Team, 75119 </Text>
          <View style={styles.changeView}>
            <Text style={styles.changeText}>Change</Text>
          </View>
        </View>
        <Text>Kualalumpur, Malaysia</Text>
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
      <View style={styles.removeView}>
        <Text style={styles.removeText}>Remove</Text>
      </View>
      <View style={styles.rec2}>
        <Text style={styles.detailText}>Price Details</Text>
        <View style={styles.rec3}>
          <Text style={styles.priceText}>Price ( 1 item)</Text>
          <Text style={styles.priceText}>$25</Text>
        </View>
        <View style={styles.rec3}>
          <Text style={styles.priceText}>Delivery Fee</Text>
          <Text style={styles.priceText}>Info</Text>
        </View>
      </View>
      <View style={styles.total}>
        <Text style={styles.detailText}>Total Amount</Text>
        <Text style={styles.detailText}>$25</Text>
      </View>
      <View style={styles.button}>
        <Button title="Continue To Payment" />
      </View>
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
    paddingVertical: 20,
    // alignItems: 'center',
    paddingHorizontal: 16,
  },
  addressText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: Colors.neutralBlack,
  },
  changeView: {
    backgroundColor: Colors.primary,
    width: 80,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  changeText: {
    color: Colors.white,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  rec: {
    marginTop: 30,
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
  removeView: {
    backgroundColor: Colors.white,
    marginTop: 2,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: Colors.neutralBlack,
  },
  rec2: {
    marginTop: 30,
    backgroundColor: Colors.white,
    paddingTop: 20,
    paddingLeft: 16,
    paddingBottom: 24,
  },
  detailText: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.black,
  },
  rec3: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  priceText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: Colors.black,
  },
  total: {
    backgroundColor: Colors.white,
    marginTop: 2,
    paddingVertical: 12,
    paddingLeft: 16,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 40,
    backgroundColor: Colors.white,
    paddingTop: 12,
    paddingBottom: 28,
  },
});
export default MyCart2;
