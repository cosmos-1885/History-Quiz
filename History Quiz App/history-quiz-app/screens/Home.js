import React from "react";
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Modal, Animated, Image, Button} from 'react-native'
import { COLORS, SIZES } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';

const Home =({ navigation }) => {
  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <StatusBar barStyle="light-content" backgroundColor='#197183' />
      <View style={{
        flex: 1,
        position: 'relative'
      }}>
        <LinearGradient
        colors={['#1971B3', '#AFD4BE', '#AFD4BE']}
        style={{
          width: '100%', height: '65%',
          // alignItems: 'center',
          // justifyContent: 'center'  
          }}>
          <Image style={{width: 50, height: 50, marginLeft: 25, marginTop: 50}} source={require('../assets/Quiz/back-btn.png')} />
          <View style={{
            width:'100%',
            alignItems: 'center'
          }}>
            <Image style={{width: 130, height: '20%', marginTop: 48}} source={require('../assets/Quiz/king_sejong.png')}/>
          <Image style={{width: '85%', height: 70}} source={require('../assets/Home/title.png')}/>
          <Image style={{width: '100%', height: 165, marginTop: 55}} source={require('../assets/Home/cloud1.png')}/>
        </View>
        </LinearGradient>
        <LinearGradient
        colors={['#309CB1', '#3068B1']}
        style={{
          width: '100%', height: '35%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <View style={{
            width: 170, height: 170,
            borderRadius: 100,
            backgroundColor: '#FFFFFF00',
            borderWidth: 1,
            borderColor: COLORS.white,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <TouchableOpacity
            onPress={() => navigation.navigate("Kind")}
            style={{
              width: 130, height: 130,
              borderRadius: 100,
              backgroundColor: '#FFFFFF00',
              borderWidth: 1,
              borderColor: COLORS.white,
              opacity: 0.8,
              alignItems: 'center',
              justifyContent: 'center',
              // marginTop: '30%'
            }}>
              <Text style={{fontSize: 35, fontWeight: '400', color:COLORS.white}}>시작</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <Image
          style={{
            width: '40%', height: '40%',
            marginLeft: 110,
            position: 'absolute',
            top: 300, left: 80}} source={require('../assets/Home/simcheong.png')}
          />
      </View>
    </SafeAreaView>
  );
}

export default Home;