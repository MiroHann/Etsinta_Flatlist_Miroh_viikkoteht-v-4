import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function Row({person,selectedId,select}) {
    const backgroundColor = person.id === selectedId ? "#c0c0c0":'#f5f5f5';
    return (
        <Pressable onPress={() => select(person.id)}>
        <Text style={[styles.row,{backgroundColor}]}>{person.firstname} / {person.lastname}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    row: {
        marginBottom: 20, 
        borderColor:'#333',
        borderWidth: 1, 
        padding: 5,
        color:'#555'
    }
})