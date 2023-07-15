import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './VerificationStyle';
import Button1 from '../../components/Button1';
import Back from '../../assets/images/Back.svg';
import OTPInputView from '@twotalltotems/react-native-otp-input';

function PhoneVerification(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Back style={{marginTop: 5, marginLeft: 19}} />
      </TouchableOpacity>
      <Text style={styles.welcome}>Phone Verification</Text>
      <Text style={styles.login}>Enter your OTP code here </Text>
      <View style={styles.code}>
        <OTPInputView
          pinCount={6}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
        />
      </View>

      <View style={styles.account}>
        <Text style={styles.signup}>Didn't you received any code?</Text>
      </View>
      <TouchableOpacity style={styles.account1}>
        <Text style={styles.signup}>Resend new code</Text>
      </TouchableOpacity>
      <View style={styles.button}>
        <Button1 title={'Verify'} />
      </View>
    </View>
  );
}

export default PhoneVerification;
