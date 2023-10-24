import React, {Component, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Image,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import background from '../src/images/smoke.png'
import Colors from '../src/constant/Colors';

import { categorySeleksi } from '../src/constant/DataCategorySeleksi';
import { categoryArrival } from '../src/constant/dataCategoryArrival';

function Junstore() {
  const [searchQuery, setSearchQuery, isHovered, setIsHovered] = useState('');
  const handleSearch = text => {
    setSearchQuery(text);
  };
  
  return (
    <ImageBackground style={{flex: 1}} source={background}>
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle="dark-content"
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.iconHeader}>
              <Icon name="crown" size={15} color={808080} />
              <Icon name="crown" size={15} color={808080} />
              <Icon name="crown" size={15} color={808080} />
            </View>
            <Text style={styles.titleHeader}>
              Jun
              <Text style={styles.titleHeaderSecond}>store</Text>
            </Text>
          </View>
          <View style={styles.inputWrapper}>
            <Ionicons name="search" size={20} />
            <TextInput
              style={styles.textInput}
              placeholder="Search . . ."
              placeholderTextColor="black"
              value={searchQuery}
              onChangeText={handleSearch}
            />
          </View>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Best Offers</Text>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.titleSecond}>Lihat Semua</Text>
              <Icon style={styles.iconTitle} name="chevron-right" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={categorySeleksi}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.card}>
                <Image source={item.image} style={styles.imageCard} />
                <Text style={styles.titleCard}>{item.title}</Text>
                <Text style={{color: Colors.black}}>{item.author}</Text>
              </TouchableOpacity>
            )}
          />
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>New Arrival</Text>
            <Text style={{color: 'red'}}> (HOT)</Text>
            <TouchableOpacity style={styles.iconButtonSecond}>
              <Text style={styles.titleSecond}>Lihat Semua</Text>
              <Icon style={styles.iconTitle} name="chevron-right" />
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <FlatList
              data={categoryArrival}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.cardSecond}>
                  <Image source={item.image} style={styles.imageCardSecond} />
                  <Text style={styles.titleCard}>{item.title}</Text>
                  <Text style={{color: 'red'}}>{item.price}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default Junstore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    padding: 5,
    marginHorizontal: 20,
    marginBottom: 10,
    paddingTop: 45,
    alignItems: 'center',
  },
  iconHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '22%',
  },
  titleHeader: {
    fontSize: 30,
    fontWeight: '300',
    color: Colors.primary,
  },
  titleHeaderSecond: {
    fontWeight: 'bold',
    color: Colors.primary,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 25,
    paddingVertical: 3,
    backgroundColor: Colors.white,
    elevation: 2,
  },
  textInput: {
    marginLeft: 15,
    color: Colors.black,
  },
  titleWrapper: {
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-between',
  },
  iconButton: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    color: Colors.black,
  },
  iconTitle: {
    marginLeft: 5,
    color: Colors.primary
  },
  titleSecond: {
    fontSize: 14,
    color: Colors.primary,
  },
  card: {
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 15,
    marginBottom: 10,
    backgroundColor: Colors.white,
    elevation: 4,
  },
  imageCard: {
    width: 200,
    height: 150,
    resizeMode: 'cover',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  titleCard: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 18,
  },
  iconButtonSecond: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '55%',
  },
  cardSecond: {
    borderRadius: 25,
    paddingHorizontal: 25,
    paddingVertical: 8,
    marginRight: 10,
    marginBottom: 20,
    backgroundColor: Colors.white,
    elevation: 4,
  },
  imageCardSecond: {
    width: 100,
    height: 70,
    resizeMode: 'cover',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
