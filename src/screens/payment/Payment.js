import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../assets/colors/Colors';
import BackArrow from '../../assets/images/BackArrow.svg';
import SectionHeader from '../../components/SectionHeader';
import Plus from '../../assets/images/Plus.svg';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import Fonts from '../../components/Fonts';

function Payment() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SectionHeader icon={<BackArrow />} title="Payment Option" />
      <View style={styles.container1}></View>
      <View style={styles.address}>
        <ImageBackground
          source={require('../../assets/images/Rectangle282.png')}
          style={styles.background}>
          <Plus style={styles.plus} />
          <TouchableOpacity onPress={() => navigation.navigate('AddCard')}>
            <Text style={styles.paymentText}>Add Payment Method</Text>
          </TouchableOpacity>
          <View style={styles.dotContainer}>
            <View style={styles.dot1} />
            <View style={styles.dot2} />
            <View style={styles.dot2} />
          </View>
        </ImageBackground>
      </View>
      <ScrollView>
        <View style={styles.rec}>
          <View style={styles.cardView}>
            <ImageBackground
              source={require('../../assets/images/Rectangle14.png')}
              style={styles.backDot}>
              <Image
                source={require('../../assets/images/Rectangle15.png')}
                style={styles.green}
              />
            </ImageBackground>
            <Text style={styles.cardText}>Debit / Credit Card</Text>
          </View>
        </View>
        <View style={styles.rec2}>
          <View style={styles.cardView}>
            <Image
              source={require('../../assets/images/Rectangle16.png')}
              style={styles.green}
            />
            <Text style={styles.cardText}>Net Banking</Text>
          </View>
        </View>
        <View style={styles.rec2}>
          <View style={styles.cardView}>
            <Image
              source={require('../../assets/images/Rectangle16.png')}
              style={styles.green}
            />
            <Text style={styles.cardText}>Cash On Delivery</Text>
          </View>
        </View>
        <View style={styles.rec2}>
          <View style={styles.cardView}>
            <Image
              source={require('../../assets/images/Rectangle16.png')}
              style={styles.green}
            />
            <Text style={styles.cardText}>Wallet</Text>
          </View>
        </View>
        <View style={styles.address2}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.addressText}>
              Deliver To Tradly Team, 75119{' '}
            </Text>
            <View style={styles.changeView}>
              <Text style={styles.changeText}>Change</Text>
            </View>
          </View>
          <Text>Kualalumpur, Malaysia</Text>
        </View>
        <View style={styles.rec3}>
          <Text style={styles.detailText}>Price Details</Text>
          <View style={styles.rec4}>
            <Text style={styles.priceText}>Price ( 1 item)</Text>
            <Text style={styles.priceText}>$25</Text>
          </View>
        </View>
        <View style={styles.button}>
          <Button
            title="Checkout"
            screen={'OrderDetail'}
            navigation={navigation}
          />
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
    paddingTop: 26,
    paddingBottom: 70,
    paddingHorizontal: 68,
    marginTop: 16,
    backgroundColor: Colors.white,
  },
  background: {
    width: 246,
    height: 146,
  },
  plus: {
    marginTop: 36,
    marginHorizontal: 100,
  },
  paymentText: {
    marginTop: 22,
    marginHorizontal: 45,
    fontSize: 13.8,
    fontFamily: Fonts.regular,
    color: 'rgba(0, 0, 0, 0.2)',
    textAlign: 'left',
  },
  dotContainer: {
    height: 10,
    position: 'absolute',
    top: 180,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot1: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: Colors.primary,
  },
  dot2: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: Colors.grey,
    marginLeft: 20,
  },
  rec: {
    marginTop: 6,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
  },
  backDot: {
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardView: {
    paddingVertical: 14,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  cardText: {
    fontSize: 14,
    fontFamily: Fonts.semiBold,
    color: Colors.neutralBlack,
    marginLeft: 10,
  },
  rec2: {
    marginTop: 1,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
  },
  address2: {
    backgroundColor: Colors.white,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  addressText: {
    fontSize: 14,
    fontFamily: Fonts.medium,
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
    fontFamily: Fonts.medium,
  },
  rec3: {
    marginTop: 10,
    backgroundColor: Colors.white,
    paddingTop: 20,
    paddingLeft: 16,
    paddingBottom: 8,
  },
  detailText: {
    fontSize: 18,
    fontFamily: Fonts.semiBold,
    color: Colors.black,
  },
  rec4: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  priceText: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: Colors.black,
  },
  button: {
    paddingTop: 12,
    backgroundColor: Colors.white,
    paddingBottom: 20,
    marginTop: 1,
  },
});
export default Payment;
