import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList,TouchableOpacity } from 'react-native';

const AddTodo = ({addTodo}) => {
  const [text, setText] = useState('');
  const changeHandler = (val) => {
    setText(val)
  }
  return (
    <View>
      <TextInput  
      style={styles.form} 
      placeholder='new to do...' 
      onChangeText={changeHandler}
      value={text}
      />
      <View style={styles.submit}>
        <Button 
          title='Add To Do'
          color='coral'
          onPress={()=> {
            addTodo(text);
            setText("");
            return null;
            }
          }
        />
      </View>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  form: {
    borderColor: '#ddd',
    borderBottomWidth:1,
    height:40,
    borderRadius:5,
    paddingHorizontal:10,
    paddingVertical:8,
    marginBottom:10
  },
  // submit: {
  //   width:100
  // }
})