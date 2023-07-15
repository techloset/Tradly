import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';

export const styles = StyleSheet.create({
  container: {backgroundColor: Colors.primary, flex: 1},
  welcome: {
    fontSize: 24,
    fontFamily: 'Montserrat-Medium',
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    marginTop: 129,
  },
  login: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    marginTop: 66,
  },
  input: {
    marginTop: 45,
    rowGap: 16,
  },
  button: {
    marginTop: 38,
  },
  forgot: {
    marginTop: 32.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Regular',
  },
  account: {
    marginTop: 45.5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  signup: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 5,
  },
});
