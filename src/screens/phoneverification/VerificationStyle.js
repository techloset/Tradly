import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';

export const styles = StyleSheet.create({
  container: {backgroundColor: Colors.primary, flex: 1},
  welcome: {
    fontSize: 24,
    fontFamily: 'Montserrat-Medium',
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    marginTop: 137,
  },
  login: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    marginTop: 25,
    marginHorizontal: 24,
  },
  input: {
    marginTop: 25,
    rowGap: 16,
    // paddingLeft: 60,
  },
  button: {
    marginTop: 57,
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
    marginTop: 64,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  signup: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Regular',
    marginLeft: 5,
  },
  account1: {
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  signup: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Regular',
    marginLeft: 5,
  },
  code: {
    width: '80%',
    height: 50,
    marginTop: 122,
    marginHorizontal: 47,
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  underlineStyleHighLighted: {
    borderColor: 'rgba(255, 255, 255, 1)',
  },
});
