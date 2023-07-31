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
    image: require('../../assets/images/Pro43.png'),
  },
  {
    id: '2',
    title: 'Item 2',
    image: require('../../assets/images/Pro44.png'),
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

function Pet(props) {
  return (
    <View style={styles.container}>
      <SectionHeader icon={<BackArrow />} title="Pet Care" />
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
        contentContainerStyle={styles.flat}
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
  flat: {
    paddingHorizontal: 12,
  },
});
export default Pet;
