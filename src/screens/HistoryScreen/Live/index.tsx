import React from 'react'
import { StyleSheet, Text, View, VirtualizedList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LiveCard from './../../../globals/components/Card/LiveCard';
 
 
const DATA:any = [];
const Live = () => {
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
          renderItem={({ item }) => <LiveCard/>}
          
          keyExtractor={item => item.key}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </SafeAreaView>
    )
}

export default Live

const styles = StyleSheet.create({})
