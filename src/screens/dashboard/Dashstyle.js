import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';

export const styles = StyleSheet.create({
  container: {backgroundColor: Colors.white, flex: 1},
  back: {
    marginTop: -10,
    marginLeft: 16,
    // marginHorizontal: 10,
    height: 450,
    marginBottom: -55,
  },
  backImage: {
    flex: 1,
  },
  textView: {
    marginTop: 51,
    width: '60%',
    paddingLeft: 40,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff',
  },
  startView: {
    marginTop: 17,
    width: '40%',
    height: 35,
    borderColor: '#fff',
    borderRadius: 14,
    borderWidth: 1,
    marginLeft: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
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
    fontFamily: 'Montserrat-Bold',
    color: 'rgba(79, 79, 79, 1)',
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
    fontFamily: 'Montserrat-Medium',
    color: '#FFFFFF',
  },
  scroll: {
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 30,
    // backgroundColor: '#E5E5E5',
  },
  bar: {
    marginTop: 16,
    // marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
