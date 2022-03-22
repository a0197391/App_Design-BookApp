import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import PopularDetail from "./PopularDetail";

const PopularList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <PopularDetail album={item} navigation={navigation} />;
  return (
    <View>
    <Text style={styles.h1}>Popular Books</Text>
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    /> 
     </View>  
  );  
}
const styles = StyleSheet.create({
  h1:{
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
    letterSpacing: 0.3,
    marginLeft: 20,
    marginTop: 16,
    marginBottom: 0,
  }
});

export default PopularList;

