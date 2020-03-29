import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>To Do List</Text>
    </View>
  );
};

const styles=StyleSheet.create({
  header: {
    height:80,
    backgroundColor:'coral',
    paddingTop:38
  },
  title: {
     textAlign: 'center',
     color:'#fff',
     fontWeight:'bold',
     fontSize:20
  }
})

export default Header;