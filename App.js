import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList,TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'

export default function App() {
  const [todos, setTodos] = useState([
    {text:'buy coffee', key:'1'},
    {text:'create an app', key:'2'},
    {text:'play on the switch', key:'3'},
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter(item=>(key != item.key))
    })
  }

  const addTodo = (text) => {
    const newText = {
      text,
      key: Math.random().toString()
    }
   
    if(text.length>3) {
      setTodos((prevState)=>{
        return(
          [newText, ...prevState]
        )
      });
      return
    }
    
    Alert.alert('Oops!',`"${text}" is too short. To do item should be longer than 3 characters.`, [
      {text:'understood', onPress: ()=> console.log(`${text} was too short, alert closed now`)}
    ])
  
  }
  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodo addTodo={addTodo}/>
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({item}) => (
               <TodoItem item={item} pressHandler={pressHandler} />
             )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 40,
    // paddingHorizontal:20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    padding:40,
    // backgroundColor:'pink',
    flex:1
  },
  list: {
    marginTop:20,
    // backgroundColor:'yellow',
    flex:1
  }
});