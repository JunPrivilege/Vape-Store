import { View, Text, TouchableOpacity, Button, ImageBackground, Image,StatusBar} from 'react-native'
import React, { useEffect } from 'react'
import { navigation } from '@react-navigation/native'
import  Icon  from 'react-native-vector-icons/FontAwesome5';

const Splashscreen = ({ navigation }) => {
  useEffect(() => {
    const splashDuration = 3000;
    const timer = setTimeout(() => {
      navigation.replace('MainApp');
    }, splashDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
    <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'}/>
    <View style={{flex:1}}>
    <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
      <Image style={{width:350, height:300}} source={require('../src/images/logoVape.png')}/>
    </View>
    </View>
    </View>
  );
};

export default Splashscreen