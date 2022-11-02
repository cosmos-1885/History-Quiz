 import React, { useState } from "react";
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Modal, Animated, Image, FlatList, StyleSheet} from 'react-native'
import { COLORS, SIZES } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';

const arr = [];
for (let i = 1; i <= 32; i++) {
  arr.push(i);
}

const Level = ({navigation}) => {

  const [containerWidth, setContainerWidth] = useState(0);

  const Item = ({item, width}) => {
    return (
      <TouchableOpacity
      onPress={() => navigation.navigate("Quiz_beginner", { item })}
      style= {{
        width,
        padding: 20,
        // marginVertical: 8,
        marginHorizontal: 20,
        backgroundColor:COLORS.white,
        borderRadius: 5
      }}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  }

  const renderItem = ({item, numColumns}) => {
    return (
      <Item
      item={item}
      width={(containerWidth - 1000 * 2) / numColumns}
      />
    );
  }

  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <StatusBar barStyle="light-content" backgroundColor='#197183' />
      <View style={{
        flex: 1,
        position: 'relative',
        // alignItems: 'center',
        backgroundColor: '#B0D5BF',
        // paddingVertical: 40,
        // paddingHorizontal: 16,
      }}>
        <View style={{
          flexDirection: 'row',
          // alignItems: 'center',
          // justifyContent: 'center'
        }}>
          <Image style={{
            width: 50, height: 50,
            marginLeft: 25, marginTop: 50,
            position: 'absolute'
            }} source={require('../assets/Quiz/back-btn.png')} />
          <Text style={{
            fontSize: 20, fontWeight: '400',
            color: COLORS.white,
            marginLeft: 80, marginTop: 60}}>초보자 코스</Text>
        </View>
        <FlatList
        data={arr}
        renderItem={renderItem}
        numColumns={4}
        onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom:30
        }}
        style={{marginTop: 30}}
        // keyExtractor={item => item.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

export default Level;