import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './OneStyle';
import PasswordInput from '../../components/PasswordInput';
import Button1 from '../../components/Button1';
import Back from '../../assets/images/Back.svg';
import {useNavigation} from '@react-navigation/native';

function OneTimePassword(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Back style={{marginTop: 5, marginLeft: 19}} />
      </TouchableOpacity>
      <Text style={styles.welcome}>Verify your phone number</Text>
      <Text style={styles.login}>
        We have sent you an SMS with a code to enter number{' '}
      </Text>
      <View style={styles.input}>
        <PasswordInput placeholder="9876543210" />
      </View>

      <View style={styles.account}>
        <TouchableOpacity>
          <Text style={styles.signup}>Or login with Social network</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <Button1
          title={'Next'}
          screen={'PhoneVerification'}
          navigation={navigation}
        />
      </View>
    </View>
  );
}

export default OneTimePassword;
