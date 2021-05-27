import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, Image, TouchableOpacity, Button,StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function fetchRandomData() {
    setLoading(true);
    fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((json) => {
      setData(json.results[0]);
      console.log(json.results[0]);
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchRandomData();
  }, []);

  return (
    <View style={styles.container}>
      { isLoading ? <ActivityIndicator size="large" color="0000ff" /> : (
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile',data)}>
        <Image style={styles.image} source={{ uri: data.picture.large}}/>
        </TouchableOpacity>
        
        <Text style={styles.profile} >
        {data.name.first} {data.name.last}</Text>
        <TouchableOpacity onPress={() => {fetchRandomData(); }}>
       <Ionicons name="reload-circle" size={60} color="black"
       style={{alignSelf:'center'}} />
        </TouchableOpacity>
 
        </View>
      )}

    </View>
  );
};
export default Home;


const styles = StyleSheet.create({

 container:{
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `#f0fff0`
  },
  image: {
    width:220,
    height: 220,
    marginLeft: 10,
  
  },
  profile: {
    padding: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'Footlight MT Light'
    
  }
  
 
});