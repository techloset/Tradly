import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../assets/colors/Colors';

function SectionHeader({title, icon}) {
  return (
    <View style={styles.container}>
      <View style={styles.gView}>
        {icon}
        <Text style={styles.g}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.primary, paddingBottom: 13},
  gView: {
    marginTop: 24,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
  },
  g: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    color: 'rgba(255, 255, 255, 1)',
  },
});

export default SectionHeader;
