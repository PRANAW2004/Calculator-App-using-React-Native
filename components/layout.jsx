import React,{useState} from "react";
import { View,StyleSheet,Text, TextInput, Button } from "react-native";
import Button1 from './buttons';

export default function Layout(){
    const [text,setText] = useState("");

    return(
        <View style={styles.view}>
            <View style={styles.view1}>
                <View style={styles.view2}>
                    <Button1 />
                </View>
            </View>
            <View>
                <Text>Hello world</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%'
    },
    text1: {
        width: '50%',
        backgroundColor: "green",
    },
    view1: {
        width: '100%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '50%',
    },
    view2: {
        display: "flex",
        width: "90%",
        backgroundColor: "white",
        borderRadius: 10,
        
        height: '100%',
        borderColor: "black",
        borderWidth: 5,
        flexDirection: "row",
        flexWrap: "wrap",
    },
})