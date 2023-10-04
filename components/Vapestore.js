import React, { Component, useState } from 'react';
import {ImageBackground, ScrollView, View, Text, FlatList, TouchableOpacity, StatusBar, Image, TextInput, Button,} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Junstore({navigation}) {
    const [searchQuery, setSearchQuery, isHovered, setIsHovered] = useState('');
    const handleSearch = (text) => {
      setSearchQuery(text);
    };
        const [kategoriSeleksi, setKategoriSeleksi] = useState([
            {bestS: 'Paradewa', author:'Qorygore', 
            image :require('../src/images/4.png')},
            {bestS: 'Muffin & Xes', author:'Reza arap',
            image :require('../src/images/5.png')},
            {bestS: 'Savage', author:'Ekoju',
            image :require('../src/images/1.png')},
            {bestS: 'Groooven', author:'Xinn',
            image :require('../src/images/3.png')},
            {bestS: 'Creamsie Whimsie', author:'Danzel & Lilo',
            image :require('../src/images/2.png')},
            {bestS: 'Eskrim Mall', author:'Martinus Salim',
            image :require('../src/images/6.png')},       
        ])
        const [kategoriArrival, setKategoriArrival] = useState([
          {bestA: 'SMOK', price:'Rp.300K', 
          image :require('../src/images/7.png')},
          {bestA: 'Caliburn', price:'Rp.340K',
          image :require('../src/images/8.png')},
          {bestA: 'VMATE', price:'Rp.180K',
          image :require('../src/images/9.png')},
          {bestA: 'Centaurus', price:'Rp.600K',
          image :require('../src/images/10.png')},
          {bestA: 'Argus', price:'Rp.310K',
          image :require('../src/images/11.png')},
          {bestA: 'JellyBox', price:'Rp.170K',
          image :require('../src/images/12.png')},       
      ])
    return (

      <View style={{flex:1}}>
      <ImageBackground source={require('../src/images/smoke.png')} style={{flex:1}}>
      <View style={{flex:1, paddingHorizontal:10,}}>
        <StatusBar translucent backgroundColor={'transparent'} barStyle='dark-content'/>
         <ScrollView>
        <View style={{padding:5, marginHorizontal:20, marginBottom:10, paddingTop:45, alignItems:'center'}}>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Icon style={{color:'#808080', fontSize:15, marginRight:7}} name ='crown'/>
                <Icon style={{color:'#808080', fontSize:15}} name ='crown'/>
                <Icon style={{color:'#808080', fontSize:15, marginLeft:7}} name ='crown'/>
            </View>
      <Text style={{fontSize:30, fontWeight:'300',color:'#808080'}}>Jun<Text style={{fontWeight:'bold', color:'#808080'}}>store</Text></Text>
        </View>
            <View style={{padding:8}}>
            <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius:10,
            paddingHorizontal:25,
            paddingVertical:3, 
            marginLeft:10,
            marginRight:10,
            marginBottom:10,
            backgroundColor:'#ffffff',
            elevation:2
         }}>
        <Ionicons name="search" size={20}/>
          <TextInput
            style={{
             flex:1,
             marginLeft:15,
             color:'black',
          }}  
            placeholder="Search . . ."
            placeholderTextColor='black'
            value={searchQuery}
            onChangeText={handleSearch}
       />
        </View>
     </View>
      <View style={{marginHorizontal:20, 
                    marginBottom:20, 
                    marginTop:20, 
                    flexDirection:'row',
                    marginTop:25,
                    }}>
      <Text style={{fontSize:20, fontWeight:'400',color:'#000000'}}>Best Offers</Text>
      <TouchableOpacity style={{justifyContent:'flex-end',
                    alignItems:'center',
                    flex:1,
                    flexDirection:'row'
                    }}>
      <Text style={{fontSize:14, color:'#bdbdbd'}}><Text></Text><Text></Text>Lihat Semua</Text>
      <Icon style={{marginLeft:5,}}name="chevron-right" color='#bdbdbd' />
      </TouchableOpacity>
        </View>
        <View style={{}}>
      <FlatList
       data={kategoriSeleksi}
       horizontal
       showsHorizontalScrollIndicator={false}
       renderItem={({ item }) => 
           <TouchableOpacity style={{
            borderRadius:15,
            paddingHorizontal:20,
            paddingVertical:8,
            marginLeft:10,
            marginRight:10,
            marginBottom:10,
            backgroundColor:'#ffffff',
            elevation:4
            }}>
        <Image source={item.image} style={{
            width:200, 
            height:150,
            resizeMode:'cover',
            marginTop:10,
            marginBottom:10,
            borderRadius:5,
            }}/>
        <Text style={{color:'#000000', fontWeight:'bold', fontSize: 18}}>{item.bestS}</Text>
        <Text style={{color:'#000000'}}>{item.author}</Text>
        </TouchableOpacity>}
     />
      </View>
      <View style={{marginHorizontal:20, 
                    marginBottom:20, 
                    marginTop:20, 
                    flexDirection:'row',
                    marginTop:25,
                    }}>
      <Text style={{fontSize:20, fontWeight:'400',color:'#000000'}}>New Arrival</Text>
      <Text style={{color:'red', marginLeft:4}}> (HOT)</Text>
      <TouchableOpacity style={{justifyContent:'flex-end',
                    alignItems:'center',
                    flex:1,
                    flexDirection:'row'
                    }}>
      <Text style={{fontSize:14, color:'#bdbdbd'}}><Text></Text><Text></Text>Lihat Semua</Text>
      <Icon style={{marginLeft:5,}}name="chevron-right" color='#bdbdbd' />
      </TouchableOpacity>
        </View>
      <View style={{}}>
      <FlatList
       data={kategoriArrival}
       horizontal
       showsHorizontalScrollIndicator={false}
       renderItem={({ item }) => 
           <TouchableOpacity style={{
            borderRadius:25,
            paddingHorizontal:25,
            paddingVertical:8,
            marginLeft:10,
            marginRight:10,
            marginBottom:20,
            backgroundColor:'#ffffff',
            elevation:4
            }}>
        <Image source={item.image} style={{
            width:100, 
            height:70,
            resizeMode:'cover',
            marginTop:10,
            marginBottom:10,
            borderRadius:5,
            }}/>
        <Text style={{color:'#000000', fontWeight:'bold', fontSize: 18}}>{item.bestA}</Text>
        <Text style={{color:'#000000'}}>{item.price}</Text>
        </TouchableOpacity>}
     />
      </View>
     </ScrollView>
      </View>
      
     </ImageBackground>
    </View>
  );
};

export default Junstore