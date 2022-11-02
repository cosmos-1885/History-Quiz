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
                  <Text style={{fontSize: 23, fontWeight: '400', color:COLORS.black}}>왕의 루미큐브</Text>
                  <Text style={{fontSize: 10}}>공부도 하고 게임도 하면서 재미있게{"\n"}            왕의 이름을 외워보자!</Text>
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
                  <Text style={{fontSize: 23, fontWeight: '400', color:COLORS.black}}>조선왕조 실록샐록</Text>
                  <Text style={{fontSize: 10}}>조선시대 역사게임 조선왕조 실록샐록{"\n"}역사에 흥미를 갖고 싶은 당신! 컴온~!</Text>
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
                  <Text style={{fontSize: 28, fontWeight: '400', color:COLORS.black}}>조선인더트랩</Text>
                  <Text style={{fontSize: 10}}>VR로 즐기는 방탈출게임!</Text>
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