import React from "react";
import { View,StyleSheet,Text } from "react-native";
import Layout from "./layout";

export default function Main(){
    return(
        <View style={styles.container1}>
            <Layout />
        </View>
    )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        width: '100%',
    }
})