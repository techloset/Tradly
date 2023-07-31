import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../../assets/colors/Colors';
import Bars1 from '../../components/Bars1';
import Business from '../../assets/images/Business.svg';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

function MyStore(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Bars1 title="My Store" />
      <View style={styles.business}>
        <Business style={{marginBottom: 35}} />
        <Text style={styles.text}>You Dont Have a Store</Text>
      </View>
      <View style={{flex: 1}}>
        <Button
          title="Create Store"
          screen={'CreateStore'}
          navigation={navigation}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey,
    flex: 1,
  },
  business: {
    marginTop: 60,
    alignItems: 'center',
    marginBottom: 37,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.black,
  },

  bar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: 20,
  },
});
export default MyStore;
