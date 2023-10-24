import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
  
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconChart from 'react-native-vector-icons/Foundation';
import background from '../src/images/smoke.png'
import Colors from '../src/constant/Colors';
 
import { dataCategory } from '../src/constant/DataCategoryProduct';
import { dataType } from '../src/constant/DataCategoryType';

const Searchpage = () => {
  // const [kategoriSeleksi, setKategoriSeleksi] = useState(dataCategory);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={{flex: 1}} source={background}>
        <View style={styles.header}>
          <View style={styles.headerWrapper}>
            <View style={styles.textInputWrapper}>
              <Ionicons style={{marginLeft: 15}} name="search" size={20} />
              <TextInput
                style={styles.textInput}
                placeholder="Search ..."
                placeholderTextColor={'black'}
              />
            </View>
            <TouchableOpacity style={{marginLeft: 20}}>
              <IconChart name="shopping-cart" size={35} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <FlatList
            data={dataType}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.items}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.productWrapper}>
            {dataCategory.map((kategoriSeleksi, i) => (
              <View key={i} style={styles.card}>
                <Image
                  style={styles.imageProduct}
                  source={kategoriSeleksi.image}
                />
                <Text style={styles.title}>{kategoriSeleksi.title}</Text>
                <Text>{kategoriSeleksi.author}</Text>
                <Text style={styles.price}>{kategoriSeleksi.price}</Text>
                <View style={styles.buttonWrapper}>
                  <TouchableOpacity>
                    <Text style={styles.titleButton}>
                      {kategoriSeleksi.button}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text>{kategoriSeleksi.icon}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.primary,
    padding: 25,
    marginTop: 25,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: -25,
  },
  textInputWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 10,
    color: 'black',
    flex: 1,
  },
  textInput: {
    flex: 1,
    marginLeft: 15,
    color: 'black',
  },
  items: {
    marginTop: 15,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15,
    backgroundColor: Colors.white,
    elevation: 4,
  },
  productWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  card: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 170,
    marginBottom: 10,
    backgroundColor: Colors.white,
    elevation: 4,
  },
  imageProduct: {
    width: 150,
    height: 100,
    resizeMode: 'cover',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  titleButton: {
    paddingHorizontal: 45,
    paddingVertical: 5,
    backgroundColor: 'green',
    color: Colors.white,
    borderRadius: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
