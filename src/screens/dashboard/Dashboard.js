import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from './Dashstyle';
import Bars from '../../components/Bars';
import Image1 from '../../assets/images/Image1.svg';
import Home from '../../assets/images/home.svg';
import Search from '../../assets/images/Search.svg';
import Order from '../../assets/images/Order.svg';
import Store from '../../assets/images/Store.svg';
import Profile from '../../assets/images/Profile.svg';
import TabItem from '../../components/IconBars';
import Rectangle1 from '../../assets/images/Rectangle1.svg';

function Dashboard(props) {
  return (
    <View style={styles.container}>
      <Bars title="Groceries" />
      <ScrollView horizontal style={styles.back}>
        <ImageBackground
          source={require('../../assets/images/Rectangle1.png')}
          style={styles.backImage}>
          <View style={styles.textView}>
            <Text style={styles.text}>READY TO DELIVER TO YOUR HOME</Text>
          </View>
          <TouchableOpacity style={styles.startView}>
            <Text style={styles.startText}>START SHOPPING</Text>
          </TouchableOpacity>
        </ImageBackground>
        <Rectangle1
          style={{
            marginLeft: -45,
          }}
        />
      </ScrollView>
      <Image1 />
      <View style={styles.new}>
        <Text style={styles.newText}>New Product</Text>
        <TouchableOpacity style={styles.see}>
          <Text style={styles.seeText}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scroll}>
        <Image source={require('../../assets/images/Group420.png')} />
        <View style={styles.bar}>
          <TabItem icon={<Home />} label="Home" />
          <TabItem icon={<Search />} label="Search" />
          <TabItem icon={<Store />} label="Store" />
          <TabItem icon={<Order />} label="Order History" />
          <TabItem icon={<Profile />} label="Profile" />
        </View>
      </ScrollView>
    </View>
  );
}

export default Dashboard;
