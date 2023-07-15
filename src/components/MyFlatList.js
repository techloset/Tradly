import React, {useState, useRef} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import Colors from '../assets/colors/Colors';

const MyFlatList = () => {
  const slidesData = [
    {
      id: '1',
      title: 'Item 1',
      image: require('../assets/images/Group440.png'),
    },
    {
      id: '2',
      title: 'Item 2',
      image: require('../assets/images/Group433.png'),
    },
    {
      id: '3',
      title: 'Item 3',
      image: require('../assets/images/Group433.png'),
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
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const renderDot = ({index}) => (
    <TouchableOpacity
      onPress={() => carouselRef.current.scrollToIndex({index})}
      key={index}>
      <View
        style={[
          styles.dot,
          index === activeIndex ? styles.activeDot : styles.inactiveDot,
        ]}
      />
    </TouchableOpacity>
  );

  const handleScroll = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const activeIndex = Math.round(contentOffset / viewSize);
    setActiveIndex(activeIndex);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={carouselRef}
        data={slidesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        pagingEnabled
        scrollEventThrottle={16}
      />

      <View style={styles.dotContainer}>
        {slidesData.map((_, index) => renderDot({index}))}
      </View>
    </View>
  );
};

const styles = {
  container: {
    height: 200,
    marginRight: 5,
    // marginTop: 10,
  },
  slide: {
    flex: 1,
    // padding: 10,
    borderRadius: 10,
    marginRight: 10,
    width: 300,
    // marginTop: 32,
  },
  defaultSlideContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideContent: {
    flex: 1,
    justifyContent: 'center',
    // padding: 20,
    marginTop: 20,
    marginLeft: 23,
  },
  slideHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalBalanceText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#000000',
  },
  balanceText: {
    fontSize: 24,
    fontFamily: 'Inter-Black',
    color: '#000000',
    // marginTop: 20,
  },
  bcmText: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    color: '#000000',
    marginTop: 20,
  },
  accountText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#000000',
    marginBottom: 20,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 20,
    marginRight: 6,
    backgroundColor: '#FE6310',
    marginTop: 10,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDot: {
    backgroundColor: Colors.primary,
    width: 22,
  },
  inactiveDot: {
    backgroundColor: Colors.grey,
  },
};

export default MyFlatList;
