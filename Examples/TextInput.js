import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('John');
  const [age, setAge] = useState(40);


  return (
    <View style={styles.container}>
      <Text>Name: {name}, Age: {age}</Text>
      <Text></Text>
      <Text>Enter Name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder={'e.g Jay Seo'}
        onChangeText={(e)=> setName(e)}
      />
       <Text>Enter Age:</Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input}
        placeholder={'e.g 40'}
        onChangeText={(a)=> setAge(a)}
      />

      {/* <View style={styles.buttonContainer}>
        <Button title='update'/>
      </View> */}
    </View>
  );
}

//styles do not get inherited
//but text components inside text components do inherit styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth: 1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200
  },
  buttonContainer: {
    marginTop:20
  }
});
