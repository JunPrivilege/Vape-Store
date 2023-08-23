import { View, Text, TouchableOpacity, Button, ImageBackground, Image,StatusBar} from 'react-native'
import React, { useEffect } from 'react'
import { navigation } from '@react-navigation/native'
import  Icon  from 'react-native-vector-icons/FontAwesome5';

const Splashscreen = ({ navigation }) => {
  useEffect(() => {
    const splashDuration = 3000;
    const timer = setTimeout(() => {
      navigation.replace('MyTabs');
    }, splashDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{flex:1,}}>
    <StatusBar translucent backgroundColor={'transparent'} barStyle={'light-content'}/>
    <ImageBackground source={require('../src/images/bck2.jpg')} style={{flex:1}}>
    <View style={{flex:1, }}>
    <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
      <View style={{flexDirection:'row', justifyContent:'center'}}>
        <Icon style={{color:'#808080', fontSize:25, marginRight:7}} name ='crown'/>
        <Icon style={{color:'#808080', fontSize:25}} name ='crown'/>
        <Icon style={{color:'#808080', fontSize:25, marginLeft:7}} name ='crown'/>
      </View>
      <Text style={{textAlign:'center',fontSize:45, fontWeight:'300',color:'#808080'}}>Jun<Text style={{fontWeight:'bold', color:'#808080'}}>store</Text></Text>
      <Text style={{textAlign:'center',fontSize:21, fontWeight:'300',color:'#808080'}}>Vapoorizer No.1</Text>
    </View>
    </View>
    </ImageBackground>
    </View>
  );
};

export default Splashscreen