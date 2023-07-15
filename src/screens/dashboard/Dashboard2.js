import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';

function Dashboard2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scroll}>
        <View style={styles.new}>
          <Text style={styles.newText}>Popular Product</Text>
          <TouchableOpacity style={styles.see}>
            <Text style={styles.seeText}>See All</Text>
          </TouchableOpacity>
        </View>

        <Image source={require('../../assets/images/Group421.png')} />
      </View>
      <View style={{backgroundColor: Colors.primary, flex: 0.4}}>
        <View style={styles.storeView}>
          <Text style={styles.store}>Store To Follow</Text>
          <TouchableOpacity style={styles.see2}>
            <Text style={styles.storeText}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 16, marginHorizontal: 20}}>
          <Image source={require('../../assets/images/Group422.png')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.white, flex: 1},

  scroll: {
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 30,
    // backgroundColor: '#E5E5E5',
  },
  new: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
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
  storeView: {
    flexDirection: 'row',
    // marginBottom: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 22,
  },
  store: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: '#FFFFFF',
  },
  see2: {
    backgroundColor: Colors.white,
    width: '25%',
    height: 25,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  storeText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: Colors.primary,
  },
});

export default Dashboard2;
