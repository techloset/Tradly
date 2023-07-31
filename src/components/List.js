import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import Colors from '../assets/colors/Colors';
import {useNavigation} from '@react-navigation/native';

function List(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductDetail')}
          style={styles.touch}>
          <ImageBackground
            source={require('../assets/images/Rectangle28.png')}
            style={styles.imageBack}>
            <Image
              source={require('../assets/images/Women.png')}
              style={styles.image}
            />
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Bread')}
          style={styles.touch}>
          <ImageBackground
            source={require('../assets/images/Rectangle29.png')}
            style={styles.imageBack}>
            <Image
              source={require('../assets/images/Bread.png')}
              style={styles.image}
            />
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Vegetables')}
          style={styles.touch}>
          <ImageBackground
            source={require('../assets/images/Rectangle30.png')}
            style={styles.imageBack}>
            <Image
              source={require('../assets/images/Veg.png')}
              style={styles.image}
            />
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Fruit')}
          style={styles.touch}>
          <ImageBackground
            source={require('../assets/images/Rectangle31.png')}
            style={styles.imageBack}>
            <Image
              source={require('../assets/images/Fruit.png')}
              style={styles.image}
            />
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={[styles.row1, {marginTop: 1}]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Egg')}
          style={styles.touch}>
          <ImageBackground
            source={require('../assets/images/Rectangle32.png')}
            style={styles.imageBack}>
            <Image
              source={require('../assets/images/Egg.png')}
              style={styles.image}
            />
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Frozen')}
          style={styles.touch}>
          <ImageBackground
            source={require('../assets/images/Rectangle33.png')}
            style={styles.imageBack}>
            <Image
              source={require('../assets/images/Frozen.png')}
              style={styles.image}
            />
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeCare')}
          style={styles.touch}>
          <ImageBackground
            source={require('../assets/images/Rectangle34.png')}
            style={styles.imageBack}>
            <Image
              source={require('../assets/images/Home.png')}
              style={styles.image}
            />
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Pet')}
          style={styles.touch}>
          <ImageBackground
            source={require('../assets/images/Rectangle35.png')}
            style={styles.imageBack}>
            <Image
              source={require('../assets/images/Pet.png')}
              style={styles.image}
            />
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.white, height: '25%', marginTop: 16},
  row1: {flexDirection: 'row', columnGap: 1, height: '50%'},
  touch: {height: '100%', width: '25%'},
  imageBack: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {justifyContent: 'center', alignItems: 'center'},
});
export default List;
