import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
} from 'react-native';
import Colors from '../../assets/colors/Colors';

function Splash() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Rectangle.png')}
        style={styles.imageBack}>
        <View style={styles.logoCont}>
          <Text style={styles.logoText}>T</Text>
        </View>
      </ImageBackground>
      <Text style={styles.appText}>Tradly</Text>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBack: {
    height: windowWidth * 0.35,
    width: windowWidth * 0.35,
  },
  logoCont: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logoText: {
    fontSize: windowWidth * 0.22,
    color: '#21CBAA',
    fontFamily: 'Montserrat-Light',
    marginBottom: 20,
  },
  appText: {
    fontSize: 30,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Medium',
    marginTop: 10,
  },
});
export default Splash;
