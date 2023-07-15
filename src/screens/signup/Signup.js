import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './SignupStyle';
import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';
import Button1 from '../../components/Button1';
import Back from '../../assets/images/Back.svg';

function Signup(props) {
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
        <Button1 title={'Create'} />
      </View>
      <View style={styles.account}>
        <Text style={styles.forgotText}>Have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signup}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Signup;
