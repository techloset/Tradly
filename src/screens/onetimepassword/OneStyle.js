import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';
import Fonts from '../../components/Fonts';

export const styles = StyleSheet.create({
  container: {backgroundColor: Colors.primary, flex: 1},
  welcome: {
    fontSize: 24,
    fontFamily: Fonts.medium,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 137,
  },
  login: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 29,
    marginHorizontal: 24,
  },
  input: {
    marginTop: 25,
    rowGap: 16,
  },
  button: {
    marginTop: 16,
  },
  forgot: {
    marginTop: 32.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotText: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: Fonts.regular,
  },
  account: {
    marginTop: 64,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  signup: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: Fonts.regular,
    marginLeft: 5,
  },
});
