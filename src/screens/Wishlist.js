import React from 'react';
import { ScrollView, Text, View,Image,Pressable,StyleSheet } from 'react-native';

const Wishlist = () => {
    return (
    <ScrollView style={{backgroundColor:'#734338'}}>
    <View style={styles.container}>
       <View>
            <Text style={styles.h1}>My WishBook</Text>
        </View> 
       <View>
            <Image
              style={styles.imageStyle}
              source={{ uri:"https://cdn.kdkw.jp/cover_500/322103/322103000310.jpg" }}
              alt="album"
            />            
        </View>
        <View>
            <Text style={styles.h2}>８６―エイティシックス―Ep.10 </Text>
            <Text style={styles.h2}>―フラグメンタル・ネオテニー―</Text>
        </View>  
        <View style={styles.container2}>
            <Text style={styles.h3}>著者：安里 アサト</Text>
            <Text style={styles.h3}>イラスト：しらび</Text>
            <Text style={styles.h3}>メカニックデザイン：Ｉ-IV</Text>
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
    container2:{
        borderRadius: 2,
        marginTop: 16,
    },
    imageStyle: {
      marginTop: 20,
      alignItems: 'center',
      height: 500,
      width: 355
    },
    h1:{
      fontSize:25,
      fontWeight: 'bold',
      letterSpacing: 0.012,
      marginTop:5,
      color: '#D7C4BB',
      textAlign:'center',
    },
    h2:{
        fontSize:20,
        fontWeight: '500',
        letterSpacing: 0.012,
        marginTop:5,
        color: '#D7C4BB',
        textAlign:'center',
      },
      h3:{
        fontSize:16,
        fontWeight: '500',
        letterSpacing: 0.012,
        marginTop:5,
        color: '#D7C4BB',
        textAlign:'center',
      }
  });

export default Wishlist;