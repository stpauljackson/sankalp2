import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import { ScrollView, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native';
import data from './data.json'

export default function Front({navigation}) {
    const [isSelected, setSelection] = useState(Array(data.length).fill(false));

    const handleSelection = (index) => {
      const newSelection = [...isSelected];
      newSelection[index] = !newSelection[index];
      setSelection(newSelection);
    };
  return (
    <ImageBackground  source={
      require('./image3.png')

          } style={styles.background}>
    <View>
      <Text style={styles.heading}>Choose the disease that you want to check product for -</Text>
      <Text style={{fontSize:15, color:"black", marginLeft:200}}>Scroll for more...</Text>
      <ScrollView style={{ height: 400, marginVertical:20,marginHorizontal:20, backgroundColor: "black",borderRadius:10,  }}>
        {data.map((x, index) => (
          <View key={x.name} style={styles.checkboxContainer}>
            <CheckBox disabled={false} value={isSelected[index]} onValueChange={() => handleSelection(index)} />
            <Text style={{fontSize:18, margin:10, fontWeight:"bold"}}>{x.name}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity onPress={()=>navigation.navigate('Home',{selection:isSelected})} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({

  heading: {
    color:"black",
    fontSize: 20,
    fontWeight: 800,
    paddingVertical:20,
    marginBottom:60,
    marginHorizontal: 20
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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