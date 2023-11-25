import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const CustomDrawer = (props) => {
  return (
    <View style={{flex: 1, borderRadius: 20}} >
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#0909db'}}>
            <Text style={{textAlign: 'center', fontSize: 40, fontWeight: 500, color: '#fff', marginTop: 15}}>Quiz App</Text>
            {/* <ImageBackground
                source={{ uri: '' }}
                style={{ margin: 20, height:200 , borderRadius: 15}}
            /> */}
            <Ionicons name="game-controller-outline" size={275} color='#fff' />
            <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
                <DrawerItemList {...props}/>
            </View>
        </DrawerContentScrollView>
    </View>

  )
}