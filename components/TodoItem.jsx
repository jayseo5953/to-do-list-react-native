import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const TodoItem = ({ item, pressHandler }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <AntDesign name='delete' size={18} color='#333'></AntDesign>
      </TouchableOpacity>
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  item: {
    padding:16,
    marginTop:16,
    borderColor: '#bbb',
    borderWidth:1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection:'row',
  },
  itemText: {
    marginLeft:10
  }

})