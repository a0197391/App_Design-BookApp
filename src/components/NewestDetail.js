import React from "react";
import { View,Text, Image,StyleSheet, Pressable} from "react-native"

const NewestDetail = ({ album, navigation }) => {
  return (
    <View style={styles.container}>
       <View>
        <Pressable 
          onPress={() => navigation.navigate('Detail', album)}
        >
          {/* <AspectRatio h='200' w="140" ratio={1}> */}
            <Image
              style={styles.imageStyle}
              source={{ uri: album.image }}
              alt="album"
            />            
          {/* </AspectRatio> */}
        </Pressable>
        </View>
        <View style={styles.rate}>
          {
                album.score  === "4.0"
              ?<Image style={styles.rateImg} source={{uri: 'https://i.imgur.com/tfPkdNt.png'}}/>
              :<Image style={styles.rateImg} source={{uri: 'https://i.imgur.com/GUFtMNo.png'}}/>
              }
        </View>
        <View>
            <Text style={styles.h1}>{album.title}</Text>
            <Text style={styles.h2}>{album.artist}</Text>
        </View>  
    </View>
  )};
 
  const styles = StyleSheet.create({
    container:{
        borderRadius: 2,
        marginLeft: 20,
        marginTop: 16,
    },
    imageStyle: {
      height: 200,
      width: 140
    },
    rate:{
      marginTop: 16.5,
      marginBottom: 8.5
    },
    rateImg:{
      width: 86,
      height:14,
    },
    h1:{
      fontSize: 16,
      lineHeight: 28,
      fontWeight: '500',
      fontWeight: 'bold',
      letterSpacing: 0.3,
    },
    h2:{
      fontSize: 12,
      lineHeight: 18,
      fontWeight: '500',
      letterSpacing: 0.012,
      marginTop: 0,
      marginBottom: 8,
      color: '#666666',
    },
  });

  
export default NewestDetail;
