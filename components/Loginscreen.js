import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import background from '../src/images/smoke.png'
import Colors from '../src/constant/Colors';
import { categoryMedsos } from '../src/constant/DataCategoryMedsos';

function Login({navigation}) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={{flex: 1}} source={background}>
        <StatusBar backgroundColor="#f5f5f5" barStyle={'dark-content'} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.bannerHeader}>
              <Image
                style={styles.imageHeader}
                source={require('../src/images/logormv.png')}
              />
            </View>
            <Text style={styles.title}>Welcome Back !</Text>
            <Text style={styles.titleSecond}>Login to your account</Text>
            <View style={styles.inputWrapper}>
              <Feather name="user" size={20} />
              <TextInput
                style={styles.textInput}
                placeholder="Username"
                placeholderTextColor="black"
                KeyboardType="email-address"
              />
            </View>
            <View style={styles.inputWrapperSecond}>
              <View style={styles.passwordWrapper}>
                <Ionicons name="lock-closed-outline" size={20} />
                <TextInput
                  style={styles.textInputSecond}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Password"
                  placeholderTextColor="black"
                  secureTextEntry={!showPassword}
                />
              </View>
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Feather name={showPassword ? 'eye' : 'eye-off'} size={20} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={styles.titleThird}>Or, login with ...</Text>
            <View style={styles.medsos}>
              {categoryMedsos.map((kategoriMedsos, i) => (
                <TouchableOpacity style={styles.imageMedsos} key={i}>
                  <Image style={styles.image} source={kategoriMedsos.image} />
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.titleFourth}>
              <Text style={styles.text}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Regist')}>
                <Text style={styles.textSecond}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
  },
  bannerHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  imageHeader: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 25,
    fontWeight: '400',
    color: Colors.black,
    marginTop: 20,
  },
  titleSecond: {
    fontSize: 15,
    fontWeight: '300',
    color: Colors.black,
    marginTop: 8,
    marginBottom: 20,
    color: Colors.primary,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.black,
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    color: Colors.black,
  },
  inputWrapperSecond: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.black,
    marginTop: 8,
    justifyContent: 'space-between',
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputSecond: {
    color: Colors.black,
    marginLeft: 10,
  },
  button: {
    padding: 15,
    borderRadius: 25,
    marginBottom: 15,
    backgroundColor: Colors.green,
    marginTop: 20,
  },
  textButton: {
    fontSize: 15,
    textAlign: 'center',
    color: Colors.white,
  },
  titleThird: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '400',
    color: Colors.primary,
    paddingBottom: 20,
  },
  medsos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageMedsos: {
    borderColor: Colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  image: {
    height: 35,
    width: 35,
  },
  titleFourth: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 30,
  },
  text: {
    color: Colors.primary,
    fontWeight: '400',
  },
  textSecond: {
    color: Colors.blue,
    borderBottomWidth: 1,
    borderColor: Colors.blue,
  },
});
