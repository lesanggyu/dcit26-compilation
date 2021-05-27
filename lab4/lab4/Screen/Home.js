import * as React from 'react';
import { Text, Button, View, Image, ImageBackground, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const image = { uri: "https://pm1.narvii.com/6328/408293d39dde5d412ed4dffd382b3f0af8e3cfc7_hq.jpg" };
const Home = ({navigation}) => {
  return(
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
      </ImageBackground>
      
      <Text style={styles.text}>  PROFILE {'\t'} 
      <AntDesign onPress={() => navigation.navigate('Profile')} name='profile' color='white' size={40}/>
      </Text>
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    alignmentItem:'center',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'georgia',
    textAlign: 'center',
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#FF69B4',
    justifyContent:'center',
    margin:3,
    padding:10
 },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'

 },
 
  
});
