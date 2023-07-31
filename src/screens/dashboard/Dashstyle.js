import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';
import Fonts from '../../components/Fonts';

export const styles = StyleSheet.create({
  container: {backgroundColor: Colors.white, flex: 1},
  back: {
    height: '25%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 40,
  },
  textView: {
    marginTop: 51,
    width: '60%',
    paddingLeft: 40,
  },
  text: {
    fontSize: 14,
    fontFamily: Fonts.semiBold,
    color: Colors.white,
  },
  startView: {
    marginTop: 17,
    width: '40%',
    height: 35,
    borderColor: Colors.white,
    borderRadius: 14,
    borderWidth: 1,
    marginLeft: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startText: {
    fontSize: 12,
    fontFamily: Fonts.bold,
    color: Colors.white,
  },
  new: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  newText: {
    fontSize: 18,
    fontFamily: Fonts.bold,
    color: Colors.neutralBlack,
  },
  see: {
    backgroundColor: Colors.primary,
    width: '25%',
    height: 25,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seeText: {
    fontSize: 12,
    fontFamily: Fonts.medium,
    color: Colors.white,
  },
  scroll: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  bar: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  new1: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  newText1: {
    fontSize: 18,
    fontFamily: Fonts.bold,
    color: Colors.neutralBlack,
  },
  see1: {
    backgroundColor: Colors.primary,
    width: '25%',
    height: 25,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seeText1: {
    fontSize: 12,
    fontFamily: Fonts.medium,
    color: Colors.white,
  },
  storeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 22,
  },
  store2: {
    fontSize: 18,
    fontFamily: Fonts.bold,
    color: Colors.white,
  },
  see3: {
    backgroundColor: Colors.white,
    width: '25%',
    height: 25,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  storeText: {
    fontSize: 12,
    fontFamily: Fonts.medium,
    color: Colors.primary,
  },
});
