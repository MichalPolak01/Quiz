import React, { useState } from "react";
import { View } from "react-native";
import { DataTable, Text, TouchableRipple } from "react-native-paper";
import { results } from "../../resultsData";

export const ResultsScreen = () => {
  const initialTableHead = ["Nick", "Points", "Type", "Date"];
  const [tableHead, setTableHead] = useState(initialTableHead);
  const [tableData, setTableData] = useState(results);

  const handleSort = (columnIndex) => {
    const sortedData = [...tableData].sort((a, b) => {
      const aValue = a[Object.keys(a)[columnIndex]];
      const bValue = b[Object.keys(b)[columnIndex]];
      return aValue.localeCompare(bValue);
    });

    setTableData(sortedData);
  };

  return (
    <View style={{ flex: 1, padding: 16, paddingTop: 30 }}>
      <DataTable style={{borderColor: '#1125d6', borderRadius: 20, backgroundColor: 'lightblue'}}>
        <DataTable.Header>
          {tableHead.map((header, index) => (
            <DataTable.Title
              key={index}
              onPress={() => handleSort(index)}
              style={{ flex: 1, justifyContent: "center", alignItems: "center"}}
            >
              {header}
            </DataTable.Title>
          ))}
        </DataTable.Header>

        {tableData.map((result, rowIndex) => (
          <DataTable.Row key={rowIndex}>
            {Object.keys(result).map((key, columnIndex) => (
              <DataTable.Cell key={columnIndex}>{result[key]}</DataTable.Cell>
            ))}
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
};
