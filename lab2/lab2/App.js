import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, mage} from 'react-native';

export default function App() {
  const [addItem, setaddItem] = useState(' ');
  const [courseItems, setcourseItems] = useState([]);

  const itemInputHandler = (addText) => {
    setaddItem(addText);
  };
  const addItemHandler = () => {
    setcourseItems(currentItems => [...currentItems, addItem]);
  };
  return (
    
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Item"
          style={styles.input}
          onChangeText={itemInputHandler}
          value={addItem}
        />
        <Button title="ADD" 
        onPress={addItemHandler} />
      </View>
      <FlatList data= {courseItems} 
      renderItem= {itemData => (
      <View style= {styles.listItem} >
          <Text> {itemData.item} </Text> 
          </View>
  )} 
  />
  </View>
  
  );
}
const styles = StyleSheet.create({
  container: {
    padding: '50',
    backgroundColor: 
    'antiquewhite',
    flex: 4,
    width: null,
    height: null, 
  
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '85%',
    backgroundColor: 'mistyrose'
  },
  listItem:{
    padding: 5,
    margin: 10,
    backgroundColor: 'lightsalmon',
    borderColor: 'blackh',
    borderWidth: 1

  
  }
  
});
