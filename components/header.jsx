import React, { useReducer,useState } from "react";
import {View,StyleSheet,Text,Dimensions} from "react-native";

let v1 = "";
let v2 = "";
const windowwidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height/2;

// console.log(windowHeight,windowHeight/2);

let boolvalue = "";

export default function Header(props){
  boolvalue = props.boolvalue;
  // console.log(boolvalue);
  if(props.value === v2){
    v1 = v2;
    v2 = "";
  }
  else{
    v1 = props.value;
    try{
      if(v1 === ""){
        v2 = "";
      }
      else{
        v2 = eval(v1);
      }
    }
    catch(e){
    }
  }

    return(
        <View style={styles.container1}>
        <View style={styles.innercontainer1}>
          <Text style={[styles.text1, {color: "white"}]}>Calculator</Text>
        </View>
        <View style={styles.innercontainer2}>
          <Text maxLength={1} style={[{fontSize: boolvalue === "true" ? 30:50,color: "white"}, styles.displaytext1]}>{v1}</Text>
          <Text maxLength={1} style={[{fontSize: boolvalue === "true" ? 30:50,color: "white"}, styles.displaytext2]}>{v2 === "" ? "" : "="+v2}</Text>
          </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container1: {
        flex: 1,
        height: windowHeight,
      },
      text1: {
        color: "white",
        position: "relative",
        fontSize:50
      },
      innercontainer1: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: windowHeight/2,
        // backgroundColor: "red"
      },
      innercontainer2: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        width: windowwidth,
        height: windowHeight / 2,
        // backgroundColor: "blue",
      },  
})

// console.log(windowHeight,windowHeight/2);