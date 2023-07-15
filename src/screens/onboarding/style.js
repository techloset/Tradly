import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    // zIndex: 1,
  },
  container2: {
    backgroundColor: Colors.primary,
    // flex: 0.5,
    paddingBottom: 10,
    paddingLeft: 30,
    // zIndex: 1,
    // marginBottom: 10,
    // paddingTop: 50,
    // marginTop: 50,
    // flex: 1,
  },
  rectangle: {
    width: 307,
    // left: 31,
    backgroundColor: Colors.white,
    marginTop: 200,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    paddingTop: 57,
    // zIndex: 1,
    // marginBottom: -200,
  },
  group6: {
    marginTop: 58,
    marginRight: 15,
    zIndex: 1,
    marginBottom: 32,
  },
  textContainer: {
    marginTop: 209,
    marginHorizontal: 46,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
    color: '#33907C',
    textAlign: 'center',
    marginTop: 42,
  },
  dotContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 15,
    flexDirection: 'row',
    marginTop: 54,
    marginBottom: 50,
  },
  dot: {
    backgroundColor: 'rgba(51, 144, 124, 1)',
    height: 12,
    width: 12,
    borderRadius: 10,
  },
  dot1: {
    backgroundColor: 'rgba(51, 144, 124, 0.5)',
    height: 12,
    width: 12,
    borderRadius: 10,
    marginLeft: 10,
  },
});
