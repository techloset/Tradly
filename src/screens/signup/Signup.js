import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './SignupStyle';
import EmailInput from '../../components/EmailInput';
import Button1 from '../../components/Button1';
import Back from '../../assets/images/Back.svg';
import {useNavigation} from '@react-navigation/native';

function Signup() {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Signin');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Back style={{marginTop: 5, marginLeft: 19}} />
      </TouchableOpacity>
      <Text style={styles.welcome}>Welcome to tradly</Text>
      <Text style={styles.login}>Signup to your account</Text>
      <View style={styles.input}>
        <EmailInput placeholder="First Name" />
        <EmailInput placeholder="Last Name" />
        <EmailInput placeholder="EmailID/Phone Number" />
        <EmailInput placeholder="Password" />
        <EmailInput placeholder="Re-enter Password" />
      </View>
      <View style={styles.button}>
        <Button1
          title={'Create'}
          screen={'OneTimePassword'}
          navigation={navigation}
        />
      </View>
      <View style={styles.account}>
        <Text style={styles.forgotText}>Have an account?</Text>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.signup}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Signup;
