import {ScrollView, View, Text, ImageBackground, SafeAreaView, TextInput, TouchableOpacity, StatusBar, FlatList, Image} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';

const Searchpage = () => {

  const [kategoriSeleksi, setKategoriSeleksi] = useState([
    {SearchP: 'Paradewa', author:'Qorygore', price:'BUY', 
    Foundation: <Foundation name="shopping-cart" size={25} color='#808080'/>,
    image :require('../src/images/4.png')},
    {SearchP: 'Muffin & Xes', author:'Reza arap', price:'BUY', 
    Foundation: <Foundation name="shopping-cart" size={25} color='#808080'/>,
    image :require('../src/images/5.png')},
    {SearchP: 'Savage', author:'Ekoju', price:'BUY', 
    Foundation: <Foundation name="shopping-cart" size={25} color='#808080'/>,
    image :require('../src/images/1.png')},
    {SearchP: 'Groooven', author:'Xinn', price:'BUY',
     Foundation: <Foundation name="shopping-cart" size={25} color='#808080'/>,
    image :require('../src/images/3.png')},
    {SearchP: 'Creamsie Whimsie', author:'Danzel & Lilo', price:'BUY',
    Foundation: <Foundation name="shopping-cart" size={25} color='#808080'/>,
    image :require('../src/images/2.png')},
    {SearchP: 'Eskrim Mall', author:'Martinus Salim', price:'BUY', 
    Foundation: <Foundation name="shopping-cart" size={25} color='#808080'/>,
    image :require('../src/images/6.png')},              
])

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent backgroundColor={'transparent'} barStyle={'light-content'}/>
        <ImageBackground source={require('../src/images/smoke.png')} style={{flex: 1}}>
          <View style={{backgroundColor:'#808080', padding:30}}>
            <View style={{flexDirection:'row', alignItems:'center', marginRight:40}}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  borderColor: 'black',
                  backgroundColor:'#fff',
                  elevation:2,
                  marginTop:20,
                  borderRadius:10,
                  color:'black'
                }}>
                  <Ionicons style={{marginLeft:15}} name="search" size={20} />
                  <TextInput
                  style={{flex: 1, marginLeft: 15, color:'black'}}
                  placeholder="Search ..."/>
              </View>
               <TouchableOpacity style={{marginLeft:15, marginTop:15}}>
                  <Foundation name='shopping-cart' size={30} color='white'/>
                </TouchableOpacity>
            </View>
          </View>
          <ScrollView>
            <View style={{ flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly', marginTop: 10}}>
              {kategoriSeleksi.map((kategori, i)=> (
                <View key={i} style={{
                    borderRadius:8,
                    paddingHorizontal:10,
                    paddingVertical:8,
                    width:170,
                    marginBottom:10,
                    backgroundColor:'#ffffff',
                    elevation:4,
                  }}>
                    <Image style={{
                      width:150,
                      height:100,
                      resizeMode:'cover',
                    }} source={kategori.image}/>
                    <Text style={{fontWeight:'bold', fontSize:15}}>{kategori.SearchP}</Text>
                    <Text>{kategori.author}</Text>
                      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10}}>
                        <TouchableOpacity>
                        <Text style={{
                          paddingHorizontal:45,
                          paddingVertical:5,
                          backgroundColor:'green',
                          color:'#fff',
                          borderRadius:20,
                          textAlign:'center',
                          fontWeight:'bold'
                        }}>{kategori.price}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Text>{kategori.Foundation}</Text>
                        </TouchableOpacity>
                      </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </ImageBackground>
    </SafeAreaView>
  );
};

export default Searchpage;
