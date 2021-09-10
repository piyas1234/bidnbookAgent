import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/LoginScreen';
import BottomNavigator from './BottomNavigator';
import RegistationScreen from './../../screens/RegistationScreen/index';
import {Image} from 'react-native-elements';
import CommonStyle from './../Styles/CommonStyle';
import {useSelector} from 'react-redux';
import UpdateProfile from './../../screens/UpdateProfile/index';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const auth = useSelector(state => state.Auth.Login?.token?.access);
  return auth ? (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerMode: false}}
        name="MainScreen"
        component={BottomNavigator}
      />

      <Stack.Screen
        name="UpdateProfile"
        options={{
          tabBarLabel: 'UpdateProfile',
          tabBarIcon: ({color}) => (
            <Image
              style={styles.image}
              source={require('../../../assets/5.png')}
            />
          ),
          headerLeft: () => (
            <Image
              style={{width: 120, height: 40, marginLeft: 10}}
              source={require('../../../assets/logo.png')}
            />
          ),
          headerRight: () => (
            <View style={[CommonStyle.rowSpaceEvenly]}>
              <Image
                style={styles.image2}
                source={require('../../../assets/2/icon2.png')}
              />

              <Image
                style={styles.image2}
                source={require('../../../assets/2/icon4.png')}
              />
            </View>
          ),
          headerTitle: '',
        }}
        component={UpdateProfile}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        options={{headerMode: false}}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        name="SignupScreen"
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => (
            <Image
              style={styles.image}
              source={require('../../../assets/5.png')}
            />
          ),
          headerLeft: () => (
            <Image
              style={{width: 120, height: 40, marginLeft: 10}}
              source={require('../../../assets/logo.png')}
            />
          ),
          headerRight: () => (
            <View style={[CommonStyle.rowSpaceEvenly]}>
              <Image
                style={styles.image2}
                source={require('../../../assets/2/icon2.png')}
              />

              <Image
                style={styles.image2}
                source={require('../../../assets/2/icon4.png')}
              />
            </View>
          ),
          headerTitle: '',
        }}
        component={RegistationScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({
  image: {width: 28, height: 28},
  image2: {width: 34, height: 34, marginHorizontal: 5},
});
