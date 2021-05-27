import React from 'react';
import { Button, View, Text, ImageBackground, StyleSheet } from 'react-native';

const image = { uri: "https://i.pinimg.com/736x/3e/a9/60/3ea960e3531ecc7a9bf69f761d2517d5.jpg" };
const About = ({navigation}) => {
  return(
    <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.title}> Why twice is the nations girl group? </Text>
      <Text style={styles.twice}>
      {'\t'}The main reason people call TWICE the nation's girl group is because they lead the generation in terms of digital sales, physical sales, and are pretty consistent in both, scoring hit after hit. They also have well-known members, came from a very well-known company, and can sell anything they put their face on.  {'\n\n'} 
      </Text>
    </ImageBackground>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
    backgroundColor: 'pink'
 },
  twice: {
    fontFamily: 'arial',
    textAlign: 'justify',
    letterSpacing: 1,
    fontSize: 17,
    color: 'black',
    marginTop: '10',
    marginLeft: '5',
    padding: 15
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'top',
    margin: 10    
 }, 
 title:{
    fontSize: 20,
    color: '#8B4513',
    fontWeight: 'bold',
    padding: 5
 }
});

