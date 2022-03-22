import React from 'react';
import { Linking } from 'react-native';
// import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button } from "native-base";
import { ScrollView, Text, View,Image,Pressable,StyleSheet } from 'react-native';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const DetailScreen = ({ route }) => {
  const { title, 
    artist,
    price,
    url,
    image,
    score,
    description
  } = route.params;
  return (

  <ScrollView style={{backgroundColor:'#fff'}}>
    <View>
          <Image
          style={styles.image}
            source={{uri: image }}
            alt='albumImage'
          />    
     
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.artist}>{artist}</Text>     
          
          <Text style={styles.score}>
          {
            score  === "4.0"
            ?<Image style={styles.rateImg} source={{uri: 'https://i.imgur.com/tfPkdNt.png'}}/>
            :<Image style={styles.rateImg}source={{uri: 'https://i.imgur.com/GUFtMNo.png'}}/>
          }
          <Text style={{color:'#000'}}>  {score} </Text>
          / 5.0
        </Text>
          <Text style={styles.des}>{description}</Text>  
          <Pressable style={styles.bt}
            onPress={() => Linking.openURL(url)}
          >
            <Text style={styles.btText}>BUY NOW FOR ${price}</Text>  
          </Pressable>  
     </View>
  </ScrollView>

  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 210,
    marginTop: 8,
    marginLeft:88,
  },
  title:{
    marginTop: 28,
    fontSize:24,
    fontWeight:"bold",
    textAlign: 'center',
  },
  artist:{
    marginTop: 8,
    fontSize:14,
    color: '#666666',
    textAlign: 'center',
  },
  rate:{
    marginBottom: 16,
    width: 147,
    justifyContent: 'space-between',
  },
  score:{
    marginTop: 8,
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
    color: '#666666',
    letterSpacing: 0.012,
    textAlign: 'center',
  },
  rateImg:{
    width: 86,
    height:14,
  },
  des:{
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 28,
    marginHorizontal: 20,
  },
  bt: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: '#6200EE',
    marginBottom: 60,
    marginLeft:100,
    width:190,
    height:36,
  },
  btText:{
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '500',
    color: 'white',
    textAlign:'center',
  },
  
});

export default DetailScreen;
