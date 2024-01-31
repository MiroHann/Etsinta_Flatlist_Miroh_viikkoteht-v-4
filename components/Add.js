import { useState } from "react";
import { View,TextInput,StyleSheet,Button } from "react-native"


export default function Add({items,setItems,storeData}){
    const [firstname, setFirstname] =useState('');
    const [lastname, setLastname] =useState('');

    const save = () => {
        const newPerson = {
            id: items.length + 1,
            lastname: lastname, 
            firstname: firstname,
        }
        const tempItems = [...items,newPerson]
        storeData(tempItems)
        setItems(tempItems)
        setFirstname('')
        setLastname('')
    }
    return ( 
        <View style={styles.container}>
<TextInput
value={firstname}
onChangeText={text => setFirstname(text)}
placeholder='Firstname...'
/>
<TextInput
value={lastname}
onChangeText={text => setLastname(text)}
placeholder='Lastname...'
/>
<Button title='Save' onPress={save}></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       marginBottom: 16
    },
})