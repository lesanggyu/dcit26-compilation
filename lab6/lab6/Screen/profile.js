import React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



const Profile = ({ route }) => {
  const data = route.params;
 
  return (
    <View style={styles. container}>
      <Image style={styles.image} source={{ uri: data.picture.large}}/>
      <Text style={styles.profile}> {data.name.title}. {data.name.first} {data.name.last}</Text>
      
      <Text style={styles. info}>_________<AntDesign name="infocirlce" size={24} color="black" />About_________</Text>
      
      <Text style={styles. names}>Age: {data.dob.age}</Text>
      <Text style={styles.names}>Birthday: {data.dob.date}</Text>
      <Text style={styles. names} >Gender: {data.gender}</Text>
      <Text style={styles. names} >Address:{data.location.city},{data.location.state},{data.location.country} </Text>

      <Text style={styles. info}>_________<MaterialIcons name="email" size={24} color="black" />Contact_________</Text>
      <Text style={styles. names}>Email: {data.email}</Text>
      <Text style={styles. names}>Phone: {data.phone}</Text>
      <Text style={styles. names}>Cell: {data.cell}</Text>


      <Text style={styles. info}>__________
      <Ionicons name="md-ellipsis-horizontal-outline" size={24} color="black" />Other__________</Text>
      <Text style={styles. names}>Date Registered: {data.registered.date}</Text>




    </View>
  );
};
export default Profile;


const styles = StyleSheet.create({
 container:{
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `#faebd7`
  },
  image: {
    width:155,
    height: 150,
    marginLeft: 40,
    justifyContent: "center"
    

   },
  profile: {
    padding: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Footlight MT Light'
    
  },
  info: {
    padding: 15,
    fontWeight: 'bold',
    fontSize: 23,
    fontFamily: 'Rockwell Condensed'
    },
  names: {
    fontSize: 18,
    fontFamily: 'Footlight MT Light',
    textAlign: "center"
    
  }
 
});