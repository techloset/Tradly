import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Fonts from './Fonts';
import Colors from '../assets/colors/Colors';

function TabItem({icon, label, screen, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      style={styles.tabItem}>
      {icon}
      <Text style={styles.tabLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabItem: {
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 10,
    fontFamily: Fonts.medium,
    color: Colors.neutralBlack,
    marginTop: 6,
  },
});

export default TabItem;
