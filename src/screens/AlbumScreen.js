import React from "react";
import {ScrollView } from "native-base";
import PopularList from "../components/PopularList";
import NewestList from "../components/NewestList";
import albumData from "../json/book.json";

const AlbumScreen = ({ navigation }) => {
  return (
    <ScrollView style={{backgroundColor:'#fff'}}>
      <PopularList 
        list={albumData.albumList}
        navigation={navigation}
      />
       <NewestList 
        list={albumData.newest}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default AlbumScreen;
