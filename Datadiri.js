import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import profile from './src/images/selfie.jpg'

const Datadiri = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data Diri</Text>
      <View style={styles.line} />
      <View style={styles.imageProfile}>
        <Image style={styles.image} source={profile} />
      </View>
      <View style={{alignItems: 'flex-start', marginLeft: 80}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Icon name="mobile-alt" size={30} />
          <View>
            <Text
              style={{
                fontSize: 15,
                justifyContent: 'center',
                marginLeft: 10,
                flex: 1,
              }}>
              +6285-7568-01162
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="instagram" size={30} color={'#212121'} />
          <View>
            <Text
              style={{
                fontSize: 15,
                justifyContent: 'center',
                marginLeft: 10,
                flex: 1,
              }}>
              falrizun
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="envelope" size={30} color={'#212121'} />
          <View>
            <Text
              style={{
                fontSize: 15,
                justifyContent: 'center',
                marginLeft: 10,
                flex: 1,
              }}>
              tifalrizkyarjuna@gmail.com
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#ffebcd',
  },
  line: {
    borderBottomWidth: 1,
  },
  imageProfile: {
    padding: 20, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  image: {
    width: 150, 
    height: 150, 
    borderRadius: 200 / 2
  }
});

export default Datadiri;
