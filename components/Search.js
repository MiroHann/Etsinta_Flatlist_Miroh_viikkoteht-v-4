import React,{useEffect, useState} from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
export default function Search({executeSearch, DATA}){
    const [search,setSearch] = useState("");
    const [searchitems,setItems] = useState([]);

useEffect(()=> {
setItems(DATA)  
}, [])

    return ( 
        <View>
            <TextInput
            value={search}
            onChangeText={text => setSearch(text)}
            placeholder="Search...."
            returnKeyType="search"
            onSubmitEditing={() => executeSearch(search)}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    searchBox: {
        marginBottom: 20, 
        borderColor:'#333',
        borderWidth: 1, 
        padding: 5,
    }
})