import { View, Text, RefreshControl, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'

import { results } from "../../resultsData";
import { mainStyles } from '../Styles/style';
import { FlatList } from 'react-native-gesture-handler';


export const ResultsScreen = () => {
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  const handleHeaderPress = (field) => {
    setSortField(field);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  const renderItem = ({ item, index }) => (
    <View key={index} style={mainStyles.row}>
      <Text style={mainStyles.ceil}>{item.nick}</Text>
      <Text style={mainStyles.ceil}>{item.score}</Text>
      <Text style={mainStyles.ceil}>{item.total}</Text>
      <Text style={mainStyles.ceil}>{item.type}</Text>
      <Text style={mainStyles.ceil}>{item.date}</Text>
    </View>
  );

  return (
    <SafeAreaView>
        <View style={mainStyles.header}>
          <Text style={mainStyles.heading} onPress={() => handleHeaderPress('nick')}>Nick</Text>
          <Text style={mainStyles.heading} onPress={() => handleHeaderPress('score')}>Score</Text>
          <Text style={mainStyles.heading} onPress={() => handleHeaderPress('total')}>Total</Text>
          <Text style={mainStyles.heading} onPress={() => handleHeaderPress('type')}>Type</Text>
          <Text style={mainStyles.heading} onPress={() => handleHeaderPress('date')}>Date</Text>
        </View>
        <FlatList
          data={results.sort((a, b) => {
            if (sortField) {
              const aValue = a[sortField];
              const bValue = b[sortField];
        
              if (sortDirection === 'asc') {
                return aValue > bValue ? 1 : -1;
              } else {
                return aValue < bValue ? 1 : -1;
              }
            }
            return 0;
          })}
          keyExtractor={(item) => item.nick.toString()}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
    </SafeAreaView>
  )
}