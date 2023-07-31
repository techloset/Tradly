import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './style';
import Button from '../../components/Button';
import Colors from '../../assets/colors/Colors';
import {useNavigation} from '@react-navigation/native';

function Onboarding1() {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <View
        style={{
          backgroundColor: Colors.primary,
          flex: 0.27,
          alignItems: 'center',
          paddingTop: '40%',
        }}>
        <Image source={require('../../assets/images/Group71.png')} />
      </View>
      <View style={styles.dotContainer}>
        <View style={styles.dot1}></View>
        <View style={styles.dot}></View>
        <View style={styles.dot1}></View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          paddingBottom: 15,
        }}>
        <Button title={'Next'} screen={'Onboarding2'} navigation={navigation} />
      </View>
    </View>
  );
}

export default Onboarding1;
