import { View, Text, RefreshControl, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import { mainStyles } from '../Styles/style';


export const ResultsScreen = () => {
  const [data, setData] = useState([]);
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [refreshing, setRefreshing] = useState(false);

  const url = 'https://tgryl.pl/quiz/results?last=20';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(url)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setRefreshing(false));
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

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
      <Text style={mainStyles.ceil}>{item.createdOn}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}} >   
        <View style={mainStyles.header}>
          <Text style={mainStyles.heading} onPress={() => handleHeaderPress('nick')}>Nick</Text>
          <Text style={mainStyles.heading} onPress={() => handleHeaderPress('score')}>Score</Text>
          <Text style={mainStyles.heading} onPress={() => handleHeaderPress('total')}>Total</Text>
          <Text style={mainStyles.heading} onPress={() => handleHeaderPress('type')}>Type</Text>
          <Text style={mainStyles.heading} onPress={() => handleHeaderPress('createdOn')}>Date</Text>
        </View>
        <FlatList
          data={data.sort((a, b) => {
              aValue = !isNaN(a[sortField]) ? Number(a[sortField]) : String(a[sortField]).toLowerCase();
              bValue = !isNaN(b[sortField]) ? Number(b[sortField]) : String(b[sortField]).toLowerCase();
              if (sortDirection === 'asc') {
                return aValue > bValue ? 1 : -1;
              } else {
                return aValue < bValue ? 1 : -1;
              }
          })}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
    </SafeAreaView>
  )
}