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

function Junstore({navigation}) {
  const [searchQuery, setSearchQuery, isHovered, setIsHovered] = useState('');
  const handleSearch = text => {
    setSearchQuery(text);
  };
  const [kategoriSeleksi, setKategoriSeleksi] = useState([
    {
      bestS: 'Paradewa',
      author: 'Qorygore',
      image: require('../src/images/4.png'),
    },
    {
      bestS: 'Muffin & Xes',
      author: 'Reza arap',
      image: require('../src/images/5.png'),
    },
    {
      bestS: 'Savage',
      author: 'Ekoju',
      image: require('../src/images/1.png'),
    },
    {
      bestS: 'Groooven',
      author: 'Xinn',
      image: require('../src/images/3.png'),
    },
    {
      bestS: 'Creamsie Whimsie',
      author: 'Danzel & Lilo',
      image: require('../src/images/2.png'),
    },
    {
      bestS: 'Eskrim Mall',
      author: 'Martinus Salim',
      image: require('../src/images/6.png'),
    },
  ]);

  const [kategoriArrival, setKategoriArrival] = useState([
    {
      bestA: 'SMOK',
      price: 'Rp.300K',
      image: require('../src/images/7.png'),
    },
    {
      bestA: 'Caliburn',
      price: 'Rp.340K',
      image: require('../src/images/8.png'),
    },
    {
      bestA: 'VMATE',
      price: 'Rp.180K',
      image: require('../src/images/9.png'),
    },
    {
      bestA: 'Centaurus',
      price: 'Rp.600K',
      image: require('../src/images/10.png'),
    },
    {
      bestA: 'Argus',
      price: 'Rp.310K',
      image: require('../src/images/11.png'),
    },
    {
      bestA: 'JellyBox',
      price: 'Rp.170K',
      image: require('../src/images/12.png'),
    },
  ]);
  
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../src/images/smoke.png')}>
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
              <Icon
                style={{marginLeft: 5}}
                name="chevron-right"
                color="#bdbdbd"
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={kategoriSeleksi}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.card}>
                <Image source={item.image} style={styles.imageCard} />
                <Text style={styles.titleCard}>{item.bestS}</Text>
                <Text style={{color: '#000000'}}>{item.author}</Text>
              </TouchableOpacity>
            )}
          />
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>New Arrival</Text>
            <Text style={{color: 'red'}}> (HOT)</Text>
            <TouchableOpacity style={styles.iconButtonSecond}>
              <Text style={styles.titleSecond}>Lihat Semua</Text>
              <Icon
                style={{marginLeft: 5}}
                name="chevron-right"
                color="#bdbdbd"
              />
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <FlatList
              data={kategoriArrival}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.cardSecond}>
                  <Image source={item.image} style={styles.imageCardSecond} />
                  <Text style={styles.titleCard}>{item.bestA}</Text>
                  <Text style={{color: '#000000'}}>{item.price}</Text>
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
    color: '#808080',
  },
  titleHeaderSecond: {
    fontWeight: 'bold',
    color: '#808080',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 25,
    paddingVertical: 3,
    backgroundColor: '#ffffff',
    elevation: 2,
  },
  textInput: {
    marginLeft: 15,
    color: 'black',
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
    color: '#000000',
  },
  titleSecond: {
    fontSize: 14,
    color: '#bdbdbd',
  },
  card: {
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 15,
    marginBottom: 10,
    backgroundColor: '#ffffff',
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
    color: '#000000',
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
    backgroundColor: '#ffffff',
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
