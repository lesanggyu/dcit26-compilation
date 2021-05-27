//BSCS 3-4

import React from 'react';
import { Button, View, StyleSheet, SafeAreaView, Text, Alert, Redirect } from 'react-native';
import { Linking} from 'react-native';
import { Platform } from 'react-native';

export default function App() { 
    return ( 
        <View style={styles.container}> 
        
        <Text style={styles.paragraph}>Hello World!</Text>
            <Button
                title="Click Me"
                onPress={() => window.open(
                  'https://www.youtube.com/watch?v=5UMgw3V-Q5I&list=RD5UMgw3V-Q5I&start_radio=1'
                )}
            /> 
        </View> 
    ); 
} 
const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        backgroundColor: `#ffdead`, 
        alignItems: 'center', 
        justifyContent: 'center', 
    }, 
    paragraph: {
    margin: 15,
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Bernard MT Condensed',
    color: '#ffaabb',
  },
}); 