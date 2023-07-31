import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Colors from '../../assets/colors/Colors';
import BackArrow from '../../assets/images/BackArrow.svg';
import Vector from '../../assets/images/Vector.svg';
import Vector1 from '../../assets/images/Vector1.svg';
import Vector2 from '../../assets/images/Vector2.svg';
import IconText from '../../components/IconText';
import Srch from '../../assets/images/Srch.svg';
import Fonts from '../../components/Fonts';

const data = [
  {
    id: '1',
    title: 'Item 1',
    image: require('../../assets/images/Pro51.png'),
  },
  {
    id: '2',
    title: 'Item 2',
    image: require('../../assets/images/Pro52.png'),
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

function Fruit1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <BackArrow />
        <View style={styles.fruit}>
          <TextInput placeholder="Fruitt" style={styles.text} />
          <Srch />
        </View>
      </View>
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
  searchView: {
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    height: '10%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  fruit: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flex: 1,
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: Colors.white,
  },
  container1: {
    backgroundColor: Colors.primary,
    paddingBottom: 13,
  },
  flat: {
    paddingHorizontal: 12,
  },
});
export default Fruit1;
