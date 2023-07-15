import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function TabItem({icon, label}) {
  return (
    <TouchableOpacity style={styles.tabItem}>
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
    fontFamily: 'Montserrat-Medium',
    color: 'rgba(79, 79, 79, 1)',
    marginTop: 6,
  },
});

export default TabItem;
