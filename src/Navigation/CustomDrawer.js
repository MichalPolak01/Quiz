import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';


export const CustomDrawer = (props) => {
  const { navigation, refreshData } = props;

  return (
    <View style={{flex: 1, borderRadius: 20}} >
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#0909db'}}>
            <Text style={{textAlign: 'center', fontSize: 45, fontFamily: 'Mina-Bold', color: '#fff', marginTop: 15}}>Quiz App</Text>
            {/* <ImageBackground
                source={{ uri: '' }}
                style={{ margin: 20, height:200 , borderRadius: 15}}
            /> */}
            <Ionicons name="game-controller-outline" size={275} color='#fff' />
            <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
                <DrawerItemList {...props}/>

                <View style={{width: '90%', marginLeft: '5%'}}>
                  <TouchableOpacity onPress={refreshData} 
                  style={{ margin: 16, backgroundColor: '#e91e62', padding: '4%', borderRadius: 20 }}>
                    
                    <Text style={{ color: '#fff', fontFamily: 'Mina-Bold', fontSize: 20, textAlign: 'center' }}>
                      <Ionicons name="refresh-outline" size={15} color='#fff' />
                      Odśwież dane
                    </Text>
                  </TouchableOpacity>
                </View>
            </View>
        </DrawerContentScrollView>
    </View>

  )
}
