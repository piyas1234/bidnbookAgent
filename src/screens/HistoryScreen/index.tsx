import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Live from './Live';
import Bids from './Bids';
import Converted from './Converted/index';
import TextStyles from './../../globals/Styles/TextStyle';
import backgroundColor from './../../globals/Styles/BackgroundColor';
import MarginStyles from './../../globals/Styles/MarginStyles';
 
const Tab = createMaterialTopTabNavigator();
const HistoryScreen = () => {
  return (
    <>
     <View style={[MarginStyles(2).marginTop]} ></View>
     <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: [
          TextStyles.NexaBoldText14,
          {textTransform: 'capitalize'},
        ],
        tabBarStyle: [backgroundColor.WhitebackgroundColor],
      }}>
      <Tab.Screen
        options={{
          title: 'Live (5)',
        }}
        name="Live"
        component={Live}
      />
      <Tab.Screen
        options={{
          title: 'Bids (25)',
        }}
        name="Bids"
        component={Bids}
      />
      <Tab.Screen
        options={{
          title: 'Converted (15)',
        }}
        name="Converted"
        component={Converted}
      />
    </Tab.Navigator>
    </>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({});
