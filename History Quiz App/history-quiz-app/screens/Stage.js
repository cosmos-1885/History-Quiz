import React from "react";
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Modal, Animated, Image, Button} from 'react-native'
import { COLORS, SIZES } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';

const Stage =({ navigation }) => {
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
              borderRadius: 15,
              backgroundColor: '#FAF4E4',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '40%'}}>
                <Text style={{}}>흥미를 갖고 싶어요!</Text>
                <Text style={{fontSize: 30, fontWeight: '500', color:COLORS.black}}>폴인코스</Text>
            <Image style={{
            width: 160, height: 150,
            borderBottomRightRadius: 20,
            // marginLeft: 150, marginTop: 5,
            position: 'absolute',
            top: 11, left: 122
            }} source={require('../assets/Stage/sunglasses-sejong.png')} />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate("Level")}
            style={{
              width: 280, height: 160,
              borderRadius: 15,
              backgroundColor: '#F8DC6A',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '7%'}}>
              <Text style={{}}>배우고 싶어요!</Text>
              <Text style={{fontSize: 30, fontWeight: '500', color:COLORS.black}}>초보자 코스</Text>
            <Image style={{
            width: 160, height: 150,
            borderBottomRightRadius: 20,
            // marginLeft: 150, marginTop: 5,
            position: 'absolute',
            top: 11, left: 122
            }} source={require('../assets/Stage/sunglasses-sejong.png')} />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate()}
            style={{
              width: 280, height: 160,
              borderRadius: 15,
              backgroundColor: '#707070',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '7%'}}>
              <Text style={{color: COLORS.white}}>조선시대 들어간다!</Text>
              <Text style={{fontSize: 30, fontWeight: '500', color:COLORS.white}}>본격자 코스</Text>
            <Image style={{
            width: 90, height: 100,
            borderBottomRightRadius: 20,
            // marginLeft: 150, marginTop: 5,
            position: 'absolute',
            top: 60, left: 191
            }} source={require('../assets/Stage/glasses-sejong.png')} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
        
      </View>
    </SafeAreaView>
  );
}

export default Stage;