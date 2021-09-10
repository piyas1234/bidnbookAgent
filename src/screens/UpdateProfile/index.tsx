import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import TextStyles from './../../globals/Styles/TextStyle';
import backgroundColor from './../../globals/Styles/BackgroundColor';
import MarginStyles from './../../globals/Styles/MarginStyles';
import BasicInfo from './BasicInfo';
import Documentation from './Documentation';
import SocialLinks from './SocialLinks';

const Tab = createMaterialTopTabNavigator();
const UpdateProfile = () => {
  return (
    <>
      <View style={[MarginStyles(2).marginTop]}></View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarIndicatorStyle: {
            backgroundColor: 'red',
            width: '10%',
            marginHorizontal: '5%',
          },
          tabBarLabelStyle: [
            TextStyles.NexaBoldText13,
            {textTransform: 'capitalize'},
          ],
          tabBarStyle: [
            backgroundColor.mainBackgroundColor,
            {
              padding: 0,
              borderRadius: 20,
            },
          ],
        }}>
        <Tab.Screen
          options={{
            title: 'BASIC INFO',
          }}
          name="BasicInfo"
          component={BasicInfo}
        />

        <Tab.Screen
          options={{
            title: 'Documentation',
          }}
          name="Documentation"
          component={Documentation}
        />

        <Tab.Screen
          options={{
            title: 'SocialLinks',
          }}
          name="SocialLinks"
          component={SocialLinks}
        />
      </Tab.Navigator>
    </>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({});
