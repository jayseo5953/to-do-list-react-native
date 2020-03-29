import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'jay', id:'1'},
    {name: 'aaron', id:'2'},
    {name: 'denny', id:'3'},
    {name: 'david', id:'4'},
    {name: 'john', id:'5'},
    {name: 'eric', id:'6'},
    {name: 'john', id:'7'},
    {name: 'eric', id:'8'}
  ]);
  return (
    <View style={styles.container}>
       {/* 
       1) data must have a key property, and Flatlist automatically detects it and assign it, so no need to explicitly include key in     the renderitem 
       2) what if data does not have key? but instead have id? use keyExtractor
       4) Also, FlatList does not render all lists in the beginning, it renders some, and renders the rest as we scroll down, so in       terms of performance, FlatList is more efficient for a very long list
       5) Also can determin number of columns
        */}
      <FlatList
        numColumns={2}
        //if identifier is not named 'key' 
        keyExtractor={(item)=>item.id}
        //
        data={people}
        renderItem={({item})=> (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />

      {/* <ScrollView>
        {people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        )}
      </ScrollView> */}
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
