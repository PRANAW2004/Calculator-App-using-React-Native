import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native';
import Header from './components/header';

let passvalue = "";
let passvalue1 = "";
const windowwidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App(a) {
  const [value1,setvalue1] = useState("");
  const [valuecheck, setvaluecheck] = useState("");

  function clicked(a){
    if(a === 'C'){
      passvalue = "";
      setvalue1(passvalue);
    }
    else if(a === 'CE'){
      if(typeof(passvalue) === "number"){
        passvalue = ""+passvalue+"";
        passvalue = passvalue.slice(0,-1);
        setvalue1(passvalue);
        if(passvalue.length <= 12){
          setvaluecheck("false");
        }else{
          setvaluecheck("true");
        }
      }else{
      passvalue = passvalue.slice(0,-1);
      setvalue1(passvalue);
      if(passvalue.length  <= 12){
        setvaluecheck("false");
      }else{
        setvaluecheck("true");
      }
      }
    }
    else if(a === '='){
      try{
        if(passvalue != ""){
            passvalue1 = eval(passvalue);
            passvalue1 = ""+passvalue1+"";
            if(passvalue1.length <= 12){
              passvalue = eval(passvalue);            
              setvalue1(passvalue);
              setvaluecheck("false");
            }
            else{
              passvalue = eval(passvalue);  
              setvalue1(passvalue);
              setvaluecheck("true");
            }
        }
        else{
          passvalue = "";
          setvalue1(passvalue);
        }
      }
      catch(e){
      }
    }
    else{
      setvalue1(a);
      passvalue = ""+passvalue+""+""+a+"";
      setvalue1(passvalue);
      if(passvalue.length >12 ){
      setvaluecheck("true");    
      }else{
        setvaluecheck("false");
      }
    }
  }


  return (
    <View style={styles.container}>
        <View style={styles.container11}>
          <Header value={value1} boolvalue={valuecheck}/>
        </View>
        <View style={styles.container2}>
        <View style={[styles.view11]}>
            <TouchableOpacity style={[styles.button1, {backgroundColor: "blue"}]} onPress={()=>clicked("C")}>
                <Text style={styles.text11}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button1, {backgroundColor: "green"}]} onPress={()=>clicked("CE")}>
                <Text style={styles.text11}>CE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button1, {backgroundColor: "yellow"}]} onPress={()=>clicked("%")}>
                <Text style={styles.text11}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button1, {backgroundColor: "yellow"}]} onPress={()=>clicked("+")}>
                <Text style={styles.text11}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button1, {backgroundColor: "grey"}]} onPress={()=>clicked("7")}>
                <Text style={styles.text11}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button1, {backgroundColor: "grey"}]} onPress={()=>clicked("8")}>
                <Text style={styles.text11}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button1, {backgroundColor: "grey"}]} onPress={()=>clicked("9")}>
                <Text style={styles.text11}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button1, {backgroundColor: "yellow"}]} onPress={()=>clicked("-")}>
                <Text style={styles.text11}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button1, {backgroundColor: "grey"}]} onPress={()=>clicked("4")}>
                <Text style={styles.text11}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button1, {backgroundColor: "grey"}]} onPress={()=>clicked("5")}>
                <Text style={styles.text11}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button1, {backgroundColor: "grey"}]} onPress={()=>clicked("6")}>
                <Text style={styles.text11}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button1, {backgroundColor: "yellow"}]} onPress={()=>clicked("*")}>
                <Text style={styles.text11}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button1, {backgroundColor: "grey"}]} onPress={()=>clicked("1")}>
                <Text style={styles.text11}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button1, {backgroundColor: "grey"}]} onPress={()=>clicked("2")}>
                <Text style={styles.text11}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button1, {backgroundColor: "grey"}]} onPress={()=>clicked("3")}>
                <Text style={styles.text11}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button1, {backgroundColor: "yellow"}]} onPress={()=>clicked("/")}>
                <Text style={styles.text11}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button0} onPress={()=>clicked("0")}>
            <Text style={styles.button0text}>0</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button1, {backgroundColor: "grey"}]} onPress={()=>clicked(".")}>
                <Text style={styles.text11}>.</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.button1, {backgroundColor: "red"}]} onPress={()=>clicked("=")}>
                <Text style={styles.text11}>=</Text>
            </TouchableOpacity>
        </View>
        
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height: windowHeight,
    backgroundColor: '#232D3F',
  },
  container11: {
    height: windowHeight/2,
  },
  container2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: windowwidth,
  },
  view11: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    height: windowHeight/2,
    justifyContent: "center",
    alignItems: "center",
    columnGap: 16,
    rowGap: -22,
    gap: 7,
    border: 100,
},
button0: {
  backgroundColor: "grey",
  height: windowHeight/2<400?65:75,
  width: windowHeight/2<400?160:160,
  borderRadius: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  opacity: 0.8
},
button0text: {
  color: "white",
  fontSize: 40,
},
text11: {
  color: "white",
  fontSize: 40
},
button1: {
  height: windowHeight/2<400?62:70,
  width: windowHeight/2<400?73:73,
  color: "",
  opacity: 0.8,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 36,
  alignContent: "space-between",
  marginTop: 30,
  gap: 14,   
},
viewinbutton: {
  display:"flex",
  rowGap: -30,
}
});
