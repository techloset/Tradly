import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import Colors from '../../assets/colors/Colors';
import BackArrow from '../../assets/images/BackArrow.svg';
import SectionHeader from '../../components/SectionHeader';
import Avatar5 from '../../assets/images/Avatar5.svg';
import Cross from '../../assets/images/Cross.svg';

const data = [
  {
    id: '1',
    title: 'Item 1',
    image: require('../../assets/images/Pro1.png'),
  },
  {
    id: '2',
    title: 'Item 2',
    image: require('../../assets/images/Pro2.png'),
  },
  {
    id: '3',
    title: 'Item 3',
    image: require('../../assets/images/Pro3.png'),
  },
  {
    id: '4',
    title: 'Item 4',
    image: require('../../assets/images/Pro4.png'),
  },
  {
    id: '5',
    title: 'Item 5',
    image: require('../../assets/images/Pro5.png'),
  },
  {
    id: '6',
    title: 'Item 6',
    image: require('../../assets/images/Pro6.png'),
  },
];

const renderItem = ({item}) => (
  <TouchableOpacity
    style={{
      marginTop: 20,
      marginLeft: 15,
    }}>
    <Image source={item.image} />
  </TouchableOpacity>
);

function StoreProfile(props) {
  return (
    <View style={styles.container}>
      <View>
        <SectionHeader icon={<BackArrow />} title="Tradly Store" />
      </View>
      <View style={styles.container1}></View>
      <View style={styles.ava}>
        <View style={{flexDirection: 'row'}}>
          <Avatar5 />
          <View style={styles.main}>
            <View style={styles.tradlyView}>
              <Text style={styles.tradText}>Tradly Store</Text>
              <Text style={[styles.tradText, {marginTop: 3}]}>tradly.app</Text>
            </View>
            <View style={styles.follow}>
              <Text style={styles.followText}>Follow</Text>
            </View>
          </View>
        </View>
        <View style={styles.lorem}>
          <Text style={styles.loremText}>Lorem ipsum dolor sit amet,</Text>
        </View>
        <View style={styles.button}>
          <View style={styles.groView}>
            <Text style={styles.gro}>Groceries</Text>
            <Cross />
          </View>
          <View style={styles.groView}>
            <Text style={styles.gro}>Vegetables</Text>
            <Cross />
          </View>
        </View>
      </View>
      <View style={styles.button2}>
        <Text style={styles.totalF}>Total Followers</Text>
        <Text style={styles.totalF}>Total Products</Text>
      </View>
      <View style={styles.zero}>
        <Text style={styles.totalF}>0</Text>
        <Text style={styles.totalF}>0</Text>
      </View>
      <View style={styles.allView}>
        <View style={styles.all}>
          <Text style={styles.allText}>All Product</Text>
        </View>
        <View style={styles.fruit}>
          <Text style={styles.fruitText}>Fruit</Text>
        </View>
        <View style={styles.vegetables}>
          <Text style={styles.fruitText}>Vegetables</Text>
        </View>
        <View style={styles.home}>
          <Text style={styles.fruitText}>Home</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: '#ECF0F8', flex: 1, paddingBottom: 20},
  container1: {
    backgroundColor: Colors.primary,
    paddingBottom: 13,
  },
  ava: {
    paddingLeft: 46,
    paddingTop: 22,
    backgroundColor: Colors.white,
    paddingBottom: 36,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  tradlyView: {
    paddingLeft: 12,
    marginTop: 7,
  },
  tradText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: Colors.neutralBlack,
  },
  follow: {
    backgroundColor: Colors.primary,
    marginTop: 15,
    borderRadius: 15,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
  },
  followText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: Colors.white,
  },
  lorem: {
    marginTop: 25,
  },
  loremText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: Colors.neutralBlack,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  groView: {
    marginTop: 25,
    backgroundColor: Colors.grey,
    width: '45%',
    height: 36,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 20,
  },
  gro: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: Colors.neutralBlack,
  },
  button2: {
    flexDirection: 'row',
    marginTop: 16,
    paddingTop: 24,
    backgroundColor: Colors.white,
    justifyContent: 'space-evenly',
    // paddingHorizontal: 50,
  },
  totalF: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: Colors.neutralBlack,
  },
  zero: {
    flexDirection: 'row',
    paddingTop: 6,
    backgroundColor: Colors.white,
    justifyContent: 'space-evenly',
    paddingBottom: 24,
  },
  allView: {
    marginTop: 30,
    paddingLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  all: {
    backgroundColor: Colors.primary,
    width: '30%',
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  allText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: Colors.white,
  },
  fruit: {
    backgroundColor: Colors.white,
    width: '16%',
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: Colors.grey,
  },
  fruitText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: Colors.neutralBlack,
  },
  vegetables: {
    backgroundColor: Colors.white,
    width: '30%',
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: Colors.grey,
  },
  home: {
    backgroundColor: Colors.white,
    width: '20%',
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: Colors.grey,
  },
});
export default StoreProfile;
