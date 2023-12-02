import { View, Text, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import { mainStyles } from '../Styles/style';

export const OnboardingItem = ({item}) => {
    const {width, height} = useWindowDimensions();
  return (
    <View style ={[mainStyles.container, {width}]}>
      <Image source={item.image} style={{height: '70%', justifyContent: 'center', width, resizeMode: 'contain'}} />
      <View style={{ height: '30%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={mainStyles.title}>{item.title}</Text>
          <Text style={mainStyles.description}>{item.description}</Text>
      </View>
    </View>
  );
};