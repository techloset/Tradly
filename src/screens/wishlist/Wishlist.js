import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Colors from '../../assets/colors/Colors';
import BackArrow from '../../assets/images/BackArrow.svg';
import SectionHeader from '../../components/SectionHeader';

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

function Wishlist(props) {
  return (
    <View style={styles.container}>
      <SectionHeader icon={<BackArrow />} title="Wishlist" />
      <View style={styles.container1}></View>
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
  container: {backgroundColor: Colors.white, flex: 1, paddingBottom: 20},
  container1: {
    backgroundColor: Colors.primary,
    paddingBottom: 30,
  },
});
export default Wishlist;
