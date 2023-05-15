import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, TouchableWithoutFeedback, Keyboard, StyleSheet, ImageBackground,ScrollView,Dimensions } from 'react-native';
import data from './data.json'

const OcrDetail = ({ route }) => {
    const [text, setText] = useState(route.params.resultText.toString().toLowerCase());
    const [selection,setSelection] = useState(route.params.selection)
    const temparr = [];
    const temparr1 = [];
    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }
    const [val,setval] = useState([]);
    const [val1,setval1] = useState([]);
    const x = () =>{
        for(let i=0;i<data.length;i++)
        {console.log("loop no. ",i );
            if(selection[i])
            {
                data[i].i.map(x=>{
                    if(text.indexOf(x)>=0){
                temparr.push(x);
                temparr1.push(data[i]["name"]);
                }
                })
            }
        }
    
        setval(temparr);
        setval1(temparr1);
    }
useEffect(()=>{x();},[])
    return (<ImageBackground  source={
        require('./image5.png')

            } style={styles.background}>
                <Text style={styles.heading}>Result-</Text>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={{ flex: 1, marginTop: 6, marginHorizontal: 10 }} >
       {val.length!=0 ?  <Text style={{color:"black"}}><Text style={{fontSize:20,fontWeight:800}}>Not recommended to consume this product, because it contains{'\n\n\n'}</Text>
       <ScrollView  style={{ height: 200, marginVertical:10,marginHorizontal:10, backgroundColor: "black",borderRadius:10 }}>
       {
        removeDuplicates(val).map(x=>(<Text key={x} style={{fontSize:18,fontWeight:800,margin:10}}>{`\u2022 ${x}`}</Text>) )
       }</ScrollView><Text style={{fontSize:20,fontWeight:800}}>{'\n\n'}which is harmful in{'\n\n\n'}</Text>
        <ScrollView style={{ height: 200,fontSize:20, marginVertical:20,marginHorizontal:20, backgroundColor: "black",borderRadius:10,  }}>
        {
        removeDuplicates(val1).map(x=>(<Text key={x} style={{fontSize:18,fontWeight:800,margin:10}}>{`\u2022 ${x}`}</Text>) )
       }
        </ScrollView>

       </Text> : text.length == 0 ? <Text  style={{fontSize:20,fontWeight:800, color:'black'}}>Selected image has no text or its not clear</Text> :<Text  style={{fontSize:20,fontWeight:800, color:'black'}}>You can safely eat or drink this product</Text>}
    
            </View>
        </TouchableWithoutFeedback>
        </ImageBackground>
    );
};
export default OcrDetail;

const styles = StyleSheet.create({
    container: {
      // backgroundColor:"black",
      // backgroundImage: require('./start.png'),
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      color:"black",

    },
    heading: {
      color:"black",
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    button: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: 'blue',
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