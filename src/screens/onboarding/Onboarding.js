import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from './style';
import Button from '../../components/Button';
import Colors from '../../assets/colors/Colors';
import Group7 from '../../assets/images/Group7.png';
import Group from '../../assets/images/Group.png';
import Group4 from '../../assets/images/Group4.png';

const slidesData = [
  {
    id: 'slide1',
    backgroundColor: Colors.white,
    image: Group7,
    text: 'Empowering Artisans, Farmers & Micro Business',
  },
  {
    id: 'slide2',
    backgroundColor: Colors.white,
    image: Group,
    text: 'Connecting NGOs, Social Enterprises and communities',
  },
  {
    id: 'slide3',
    backgroundColor: Colors.white,
    image: Group4,
    text: 'Donate, Invest & Support infrastructure projects',
  },
];

function SlideItem({item}) {
  return (
    <View style={styles.rectangle}>
      {item.image && <Image source={item.image} style={{}} />}
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
}

function Onboarding() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <FlatList
          // ref={carouselRef}
          data={slidesData}
          renderItem={({item}) => <SlideItem item={item} />}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          // style={{position: 'relative'}}
          // onScroll={handleScroll}
          // pagingEnabled
          // scrollEventThrottle={16}
        />
      </View>
      <View style={styles.dotContainer}>
        <View style={styles.dot}></View>
        <View style={styles.dot1}></View>
        <View style={styles.dot1}></View>
      </View>
      <View style={{marginBottom: 12}}>
        <Button title={'Next'} />
      </View>
    </View>
  );
}

export default Onboarding;
