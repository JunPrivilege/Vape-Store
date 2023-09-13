import { View, Text, StatusBar, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, KeyboardType, ImageBackground} from 'react-native'
import React, {useState} from 'react'
import  MaterialIcons  from "react-native-vector-icons/MaterialIcons";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import { navigation } from '@react-navigation/native';


function Login ({navigation})  {
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [ShowConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    const togglePasswordVisibilityConfirm = () => {
      setShowConfirmPassword(!ShowConfirmPassword);
    };

  return (
<SafeAreaView style={{flex:1}}>
    <ImageBackground source={require('../src/images/smoke.png')} style={{flex:1}}>
        <StatusBar backgroundColor='#f5f5f5' barStyle={'dark-content'}/>
<ScrollView>
    <View style={{paddingHorizontal:10, flex:1, justifyContent:'center'}}>
    <View style={{flex:1, justifyContent:'center', alignItems:'center', paddingTop:30 }}>
      <Image style={{width:200, height:200}} source={require('../src/images/logormv.png')}/>
    </View>
                 <Text style={{
                            fontSize:25, 
                            fontWeight:'400', 
                            color:'#000', 
                            marginTop:20,
                            paddingBottom:15}}>Registration</Text>
            <View style={{
                        flexDirection:'row', 
                        alignItems:'center',
                        borderBottomWidth:1, 
                        borderColor:'#000000'}}>
                <Feather name='user' size={20}/>
                <TextInput style={{
                                flex:1, 
                                marginLeft:10, 
                                color:'black'}} placeholder='Username' placeholderTextColor='black' KeyboardType='email-address'/>
            </View>
            <View style={{
                        flexDirection:'row', 
                        alignItems:'center', 
                        borderBottomWidth:1, 
                        borderColor:'#000000', 
                        marginTop:8,
                        justifyContent:'space-between'
                       }}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Ionicons name='lock-open-outline' size={20}/>
                <TextInput style={{color:'black', marginLeft:10}}
                        value={password}
                        onChangeText={setPassword}
                        placeholder='Password' placeholderTextColor='black' secureTextEntry={!showPassword}/>
                </View>
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Feather name={showPassword ? 'eye' : 'eye-off'} size={20} />
                     </TouchableOpacity>
            </View>
            <View style={{
                        flexDirection:'row', 
                        alignItems:'center', 
                        borderBottomWidth:1, 
                        borderColor:'#000000', 
                        marginTop:8,
                        justifyContent:'space-between'
                       }}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Ionicons name={'lock-open-outline'} size={20}/>
                <TextInput style={{color:'black', marginLeft:10}}
                        value={ConfirmPassword}
                        onChangeText={setConfirmPassword}
                        placeholder='Confirm Password' 
                        placeholderTextColor='black' secureTextEntry={!ShowConfirmPassword}/>
                </View>
                    <TouchableOpacity onPress={togglePasswordVisibilityConfirm}>
                        <Feather name={ShowConfirmPassword ? 'eye' : 'eye-off'} size={20} />
                     </TouchableOpacity>
            </View>
            <TouchableOpacity style={{
                                    padding:15,
                                    borderRadius:25,
                                    marginBottom:15,
                                    backgroundColor:'green', 
                                    marginTop:20}}>
                <Text style={{
                            fontSize:15,
                            textAlign:'center',
                            color:'#fff'}}>CREATE ACCOUNT</Text>
            </TouchableOpacity>    
            <View style={{flexDirection:'row', justifyContent:'center', paddingTop:10, paddingBottom:30}}>
                <Text style={{color:'#808080', fontWeight:'400'}}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{color:'blue', borderBottomWidth:1, borderColor:'blue'}}>Login</Text>
                </TouchableOpacity>               
            </View>
        </View>
</ScrollView>

        
            </ImageBackground>
    </SafeAreaView>
    
  )
}

export default Login