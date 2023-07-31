import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {styles} from './Dashstyle';
import Bars from '../../components/Bars';
import Rectangle445 from '../../assets/images/Rectangle445.svg';
import Colors from '../../assets/colors/Colors';
import Group444 from '../../assets/images/Group444.svg';
import List from '../../components/List';

function Dashboard() {
  return (
    <View style={styles.container}>
      <Bars title="Groceries" />
      <View style={styles.back}>
        <Group444 />
        <Rectangle445 />
      </View>
      <List />
      <View style={styles.new}>
        <Text style={styles.newText}>New Product</Text>
        <TouchableOpacity style={styles.see}>
          <Text style={styles.seeText}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scroll}>
        <Image source={require('../../assets/images/Group420.png')} />
        <View style={styles.new1}>
          <Text style={styles.newText1}>Popular Product</Text>
          <TouchableOpacity style={styles.see1}>
            <Text style={styles.seeText1}>See All</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('../../assets/images/Group421.png')} />
        <View
          style={{
            backgroundColor: Colors.primary,
            paddingBottom: 10,
            marginTop: 20,
          }}>
          <View style={styles.storeView}>
            <Text style={styles.store2}>Store To Follow</Text>
            <TouchableOpacity style={styles.see3}>
              <Text style={styles.storeText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 16, marginHorizontal: 10}}>
            <Image source={require('../../assets/images/Group422.png')} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Dashboard;
