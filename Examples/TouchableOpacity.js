import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList,TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'jay', id:'1'},
    {name: 'aaron', id:'2'},
    {name: 'denny', id:'3'},
    {name: 'david', id:'4'},
    {name: 'john', id:'5'},
    {name: 'eric', id:'6'},
    {name: 'john', id:'7'},
    {name: 'eric', id:'8'},
    {name: 'john', id:'9'},
  ]);
  const pressHandelr = (id) => {
    console.log(id);
    //setState automatically takes the old state inthe param
    setPeople((prePeople)=>{
      return prePeople.filter(person => person.id !== id)
    })
  }
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item)=>item.id}
        data={people}
        renderItem={({item})=> (
          <TouchableOpacity onPress={()=> pressHandelr(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

//styles do not get inherited
//but text components inside text components do inherit styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal:20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop:25,
    padding:30,
    backgroundColor:'pink',
    fontSize:24,
    marginHorizontal:10,
    marginTop:24
  }
});
