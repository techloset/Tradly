import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './SigninStyle';
import EmailInput from '../../components/EmailInput';
import Button1 from '../../components/Button1';
import {useNavigation} from '@react-navigation/native';

function Signin() {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Signup');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to tradly</Text>
      <Text style={styles.login}>Login to your account</Text>
      <View style={styles.input}>
        <EmailInput placeholder="Email/Phone Number" />
        <EmailInput placeholder="Password" />
      </View>
      <View style={styles.button}>
        <Button1
          title={'Login'}
          screen={'TabNavigator'}
          navigation={navigation}
        />
      </View>
      <TouchableOpacity style={styles.forgot}>
        <Text style={styles.forgotText}>Forgot your password?</Text>
      </TouchableOpacity>
      <View style={styles.account}>
        <Text style={styles.forgotText}>Don't have an account?</Text>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.signup}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Signin;
