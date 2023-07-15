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
import Vector from '../../assets/images/Vector.svg';
import Vector1 from '../../assets/images/Vector1.svg';
import Vector2 from '../../assets/images/Vector2.svg';
import SectionHeader from '../../components/SectionHeader';
import IconText from '../../components/IconText';

const data = [
  {
    id: '1',
    title: 'Item 1',
    image: require('../../assets/images/Pro19.png'),
  },
  {
    id: '2',
    title: 'Item 2',
    image: require('../../assets/images/Pro20.png'),
  },
  {
    id: '3',
    title: 'Item 3',
    image: require('../../assets/images/Pro21.png'),
  },
  {
    id: '4',
    title: 'Item 4',
    image: require('../../assets/images/Pro22.png'),
  },
  {
    id: '5',
    title: 'Item 5',
    image: require('../../assets/images/Pro23.png'),
  },
  {
    id: '6',
    title: 'Item 6',
    image: require('../../assets/images/Pro24.png'),
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

function Fruit(props) {
  return (
    <View style={styles.container}>
      <SectionHeader icon={<BackArrow />} title="Fruit" />
      <View style={styles.container1}>
        <View style={{flexDirection: 'row'}}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.white, flex: 1, paddingBottom: 20},
  container1: {
    backgroundColor: Colors.primary,
    paddingBottom: 13,
  },
});
export default Fruit;
