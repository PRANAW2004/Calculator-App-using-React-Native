
import React, {useEffect, useState} from "react";
import { Button,StyleSheet,View,TouchableOpacity,Text } from "react-native";
import { Calculate } from "../App";
import Header from "./header";
import { render1 } from "./header";
import { update } from "./header";

let valuestring = "";

export default function Button1(props){
    const [color1,setColor] = useState(props.color);
    const [height1,setHeight] = useState(props.height);
    const [width1,setWidth] = useState(props.width);
    const [value,setValue] = useState("");

    return(
            <TouchableOpacity style={[styles.button1, {backgroundColor: color1}]} onChange={(e)=>setValue(props.val)}>
                <Text style={styles.text11}>{props.val}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text11: {
        color: "white",
        fontSize: 40
    },
    button1: {
        height: 75,
        width: 75,
        color: "",
        opacity: 0.8,
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        alignContent: "space-between",
        marginTop: 30,
        gap: 10,   
    },
    viewinbutton: {
        display:"flex",
        rowGap: -30,
    }
})
