import React from "react";
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Modal, Animated, Image, Button} from 'react-native'
import { COLORS, SIZES } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';

const Kind =({ navigation }) => {
  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <StatusBar barStyle="light-content" backgroundColor='#197183' />
      <View style={{
        flex: 1,
        position: 'relative',
        alignItems: 'center',
      }}>
        <LinearGradient colors={['#1971B3', '#AFD4BE', '#AFD4BE']} style={{width: '100%', height: '100%'}}>
            <Image style={{
            width: 50, height: 50,
            marginLeft: 25, marginTop: 50,
            position: 'absolute'}} source={require('../assets/Quiz/back-btn.png')} />
          <View style={{
            flexDirection: 'column',
            alignItems: 'center',
            // justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginVertical: 10
          }}>
            <Image
            onPress={() => navigation.goBack()} 
            style={{width: '50%', height: '115%', position: 'absolute'}}
            source={require('../assets/Kind/jeogori.png')} />
            <TouchableOpacity
            onPress={() => navigation.navigate()}
            style={{
              width: 280, height: 160,
              borderRadius: 20,
              // flexDirection: 'row',
              // alignItems: 'center', justifyContent: 'space-between',
              // paddingHorizontal: 20,
              // marginVertical: 10,

              // width: '100%', height: 170,
              // borderRadius: 100,
              backgroundColor: COLORS.white,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '40%'}}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <View style={{
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Text style={{fontSize: 23, fontWeight: '400', color:COLORS.black}}>?????? ????????????</Text>
                  <Text style={{fontSize: 10}}>????????? ?????? ????????? ????????? ????????????{"\n"}            ?????? ????????? ????????????!</Text>
                </View>
                <Image style={{width: 60, height: 120, marginLeft: 10}} source={require('../assets/Kind/fisrt-icon.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate("Stage")}
            style={{
              width: 280, height: 160,
              borderRadius: 20,
              // flexDirection: 'row',
              // alignItems: 'center', justifyContent: 'space-between',
              // paddingHorizontal: 20,
              // marginVertical: 10,

              // width: '100%', height: 170,
              // borderRadius: 100,
              backgroundColor: COLORS.white,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '7%'}}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <View style={{
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Text style={{fontSize: 23, fontWeight: '400', color:COLORS.black}}>???????????? ????????????</Text>
                  <Text style={{fontSize: 10}}>???????????? ???????????? ???????????? ????????????{"\n"}????????? ????????? ?????? ?????? ??????! ??????~!</Text>
                </View>
                <Image style={{width: 60, height: 120, marginLeft: 10}} source={require('../assets/Quiz/king_sejong.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate()}
            style={{
              width: 280, height: 160,
              borderRadius: 20,
              // flexDirection: 'row',
              // alignItems: 'center', justifyContent: 'space-between',
              // paddingHorizontal: 20,
              // marginVertical: 10,

              // width: '100%', height: 170,
              // borderRadius: 100,
              backgroundColor: COLORS.white,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '7%'}}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <View style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10
                }}>
                  <Text style={{fontSize: 28, fontWeight: '400', color:COLORS.black}}>??????????????????</Text>
                  <Text style={{fontSize: 10}}>VR??? ????????? ???????????????!</Text>
                </View>
                <Image style={{width: 80, height: 120}} source={require('../assets/Kind/third-icon.png')} />
              </View>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        
      </View>
    </SafeAreaView>
  );
}

export default Kind;