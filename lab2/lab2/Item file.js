import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity onPress= {props.onDelete} >
   <View style={ styles.listItem} >
    <Text> {props.title} </Text>
    </View>
   </ TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  listItem:{
    padding: 10,
    margin: 5,
    backgroundColor: 'purple',
    borderColor: 'black',
    borderWidth: 2

  }
  });
