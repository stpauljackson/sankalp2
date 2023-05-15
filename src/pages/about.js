import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

export default function About({navigation}) {
  return (<ImageBackground  source={
    require('./image4.png')

        } style={styles.background}>
    <View style={styles.container}>
    <Text style={styles.heading}>This app is created as a capstone project</Text>
      <Text style={styles.heading}>By- </Text>
      <Text style={styles.heading}>1. Sankalp Jadon </Text>
      <Text style={styles.heading}>2. Pulok Chondra </Text>
      <Text style={styles.heading}>3. Vishal Gupta </Text>
      <TouchableOpacity onPress={()=>navigation.navigate('First')} style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
      // backgroundColor:"black",
      // backgroundImage: require('./start.png'),
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
      color:"black",
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    button: {
        backgroundColor: '#63666A',
        padding: 10,
        borderRadius: 5,
        marginHorizontal:140
        
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign:"center"
      },
    message: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    }
  });