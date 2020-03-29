import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'jay', key:'1'},
    {name: 'aaron', key:'2'},
    {name: 'denny', key:'3'},
    {name: 'david', key:'4'},
    {name: 'john', key:'5'},
    {name: 'eric', key:'6'},
    {name: 'john', key:'7'},
    {name: 'eric', key:'8'}
  ])
  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        )}
      </ScrollView>
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
    fontSize:24
  }
});
