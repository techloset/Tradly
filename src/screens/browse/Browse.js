import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Colors from '../../assets/colors/Colors';
import Vector from '../../assets/images/Vector.svg';
import Vector1 from '../../assets/images/Vector1.svg';
import Vector2 from '../../assets/images/Vector2.svg';
import IconText from '../../components/IconText';
import Bars from '../../components/Bars';
import TabItem from '../../components/IconBars';
import Home from '../../assets/images/home.svg';
import Search from '../../assets/images/Search.svg';
import Order from '../../assets/images/Order.svg';
import Store from '../../assets/images/Store.svg';
import Profile from '../../assets/images/Profile.svg';

const data = [
  {
    id: '1',
    title: 'Item 1',
    image: require('../../assets/images/Pro45.png'),
  },
  {
    id: '2',
    title: 'Item 2',
    image: require('../../assets/images/Pro46.png'),
  },
  {
    id: '3',
    title: 'Item 3',
    image: require('../../assets/images/Pro47.png'),
  },
  {
    id: '4',
    title: 'Item 4',
    image: require('../../assets/images/Pro48.png'),
  },
  {
    id: '5',
    title: 'Item 5',
    image: require('../../assets/images/Pro49.png'),
  },
  {
    id: '6',
    title: 'Item 6',
    image: require('../../assets/images/Pro50.png'),
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

function Browse(props) {
  return (
    <View style={styles.container}>
      <Bars title="Browse" />
      <View style={styles.container1}>
        <View style={{flexDirection: 'row', marginTop: -30}}>
          <IconText icon={<Vector />} text="Sort by" />
          <IconText icon={<Vector1 />} text="Location" />
          <IconText icon={<Vector2 />} text="Category" />
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      <View style={styles.bar}>
        <TabItem icon={<Home />} label="Home" />
        <TabItem icon={<Search />} label="Search" />
        <TabItem icon={<Store />} label="Product" />
        <TabItem icon={<Order />} label="Order History" />
        <TabItem icon={<Profile />} label="Profile" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.white, flex: 1, paddingBottom: 20},
  container1: {
    backgroundColor: Colors.primary,
    paddingBottom: 13,
  },
  bar: {
    marginTop: 16,
    // marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default Browse;
