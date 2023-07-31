import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../../assets/colors/Colors';
import Bars1 from '../../components/Bars1';
import Rectangle293 from '../../assets/images/Rectangle293.svg';
import Disc from '../../components/Disc';
import Fonts from '../../components/Fonts';

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
          <Disc originalPrice={50} discountPercentage={50} />
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
      <View style={styles.paymentView}>
        <Rectangle293 />
        <View style={styles.cocaView2}>
          <Text style={styles.coca}>Coca Cola</Text>
          <Text style={styles.dollar}>$25</Text>
        </View>
        <View style={styles.payment}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  business: {
    paddingVertical: 30,
    paddingLeft: 10,
    flexDirection: 'row',
    backgroundColor: Colors.background,
  },
  text: {
    fontSize: 20,
    fontFamily: Fonts.bold,
    color: Colors.black,
  },
  janView: {
    backgroundColor: '#E3EFF2',
    marginLeft: 10,
    marginTop: 5,
  },
  janText: {
    fontSize: 13,
    fontFamily: Fonts.bold,
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
    fontFamily: Fonts.medium,
    color: Colors.blackText,
  },
  dollar: {
    fontSize: 16,
    fontFamily: Fonts.bold,
    color: Colors.primary,
    marginTop: 4,
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
    fontFamily: Fonts.medium,
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
    fontFamily: Fonts.medium,
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
  paymentView: {
    backgroundColor: Colors.white,
    paddingVertical: 16,
    paddingLeft: 16,
    marginTop: 6,
    flexDirection: 'row',
  },
  payment: {
    height: 24,
    marginTop: 8,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: Colors.primary,
    borderWidth: 1,
    marginLeft: 15,
  },
  cocaView2: {
    marginLeft: 22,
    width: '30%',
  },
});
export default History;
