
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, SafeAreaView, FlatList } from 'react-native';
import Constant from 'expo-constants';
import Row from './components/Row'
import Search from './components/Search'
import Add from './components/Add'
import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = '@persons_key'

export default function App() {
  const [searchitems, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const select = (id) => {
    setSelectedId(id);
  }
  useEffect(() => {
    AsyncStorage.clear()
    //setItems(Data)
    getData();
  }, [])

  const getData = async () => {
    console.log("data")
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY)
      const json = JSON.parse(value)
      if (json === null) {
        json = [];
      }
      setItems(json)
    } catch (ex) {
      console.log(ex)
    }
  }

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue)
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Search executeSearch={executeSearch} DATA={searchitems}/>
        <Add items={searchitems} setItems={setItems} storeData={storeData} />
        <FlatList
          data={searchitems}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          renderItem={({ item }) => (<Row person={item} selectedId={selectedId} select={select} />)}
        >
        </FlatList>
      </SafeAreaView>
    </View>
  );
  async function executeSearch(search) {
    if(search.length !== 0){
    } else {
      getData();
    }
   
    const searchArray = searchitems.filter((item) => item.lastname.startsWith(search));
    
    setItems(searchArray);
  }
}
/*function renderItem({item}){
return (<Text>{item.lastname}</Text>)
}*/
const styles = StyleSheet.create({
  searchBox: {
    marginBottom: 20,
    borderColor: '#333',
    borderWidth: 1,
    padding: 5,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  image: {
    marginRight: 16
  },
  rowText: {
    fontSize: 16,
    marginLeft: 5,
    padding: 1
  },
  container: {
    paddingTop: Constant.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8
  },
});
