import React from 'react';
// import { Center, Text } from "native-base";
import { ScrollView, Text, View,Image,Pressable,StyleSheet } from 'react-native';

const MyBooks = () => {
    return (
    // <Center bg="#FEDFE1" flex={1}>
    //     <Text fontSize={20}>
    //         This is a MyBooks Page
    //     </Text>              
    // </Center>
    <ScrollView style={{backgroundColor:'#3A8FB7'}}>
    <View style={styles.container}>
       <View>
            <Image
              style={styles.imageStyle}
              source={{ uri:"https://i.imgur.com/GaN2i9Z.png" }}
              alt="album"
            />            
        </View>
        <View>
            <Text style={styles.h1}>終於做完了QAQ</Text>
        </View>  
    </View>
    </ScrollView>
    );
}
const styles = StyleSheet.create({
    container:{
        borderRadius: 2,
        marginLeft: 20,
        marginTop: 16,
    },
    imageStyle: {
      marginTop: 180,
      alignItems: 'center',
      height: 200,
      width: 355
    },
    h1:{
      fontSize: 20,
      fontWeight: '500',
      letterSpacing: 0.012,
      marginTop:20,
      color: '#A5DEE4',
      textAlign:'center',
    },
  });

export default MyBooks;