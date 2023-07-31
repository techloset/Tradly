import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
  Animated,
} from 'react-native';
import Colors from '../../assets/colors/Colors';
import {useNavigation} from '@react-navigation/native';

function Splash() {
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1));
  const navigation = useNavigation();

  useEffect(() => {
    // Fade out the splash screen after a delay
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000, // Adjust the duration as per your requirement
      useNativeDriver: true,
    }).start(() => {
      // After the animation completes, navigate to the Welcome screen
      navigation.reset({
        index: 0,
        routes: [{name: 'Onboarding'}],
      });
    });
  }, [fadeAnim, navigation]);

  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
      <ImageBackground
        source={require('../../assets/images/Rectangle.png')}
        style={styles.imageBack}>
        <View style={styles.logoCont}>
          <Text style={styles.logoText}>T</Text>
        </View>
      </ImageBackground>
      <Text style={styles.appText}>Tradly</Text>
    </Animated.View>
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
    color: Colors.white,
    fontFamily: 'Montserrat-Medium',
    marginTop: 10,
  },
});

export default Splash;
