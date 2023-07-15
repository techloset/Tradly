import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './SigninStyle';
import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';
import Button1 from '../../components/Button1';

function Signin(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to tradly</Text>
      <Text style={styles.login}>Login to your account</Text>
      <View style={styles.input}>
        <EmailInput placeholder="Email/Phone Number" />
        <PasswordInput placeholder="Password" />
      </View>
      <View style={styles.button}>
        <Button1 title={'Login'} />
      </View>
      <TouchableOpacity style={styles.forgot}>
        <Text style={styles.forgotText}>Forgot your password?</Text>
      </TouchableOpacity>
      <View style={styles.account}>
        <Text style={styles.forgotText}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signup}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Signin;
