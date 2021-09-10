import React from 'react'
import { StyleSheet, Text, View, VirtualizedList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BuyCard from './../../globals/components/Card/BuyCard';
const DATA:any = [];
const BuyScreen = () => {
    const getItemCount = (data) => 50;
    const getItem = (data, index) => ({
        id: Math.random().toString(12).substring(0),
        title: `Item ${index+1}`
      });
      
    return (
        <SafeAreaView style={styles.container}>
        <VirtualizedList
          data={DATA}
          initialNumToRender={20}
          renderItem={({ item }) => <BuyCard/>}
          
          keyExtractor={item => item.key}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </SafeAreaView>
    )
}

export default BuyScreen

const styles = StyleSheet.create({})
