import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HistoryScreen from '../../screens/HistoryScreen';
import LiveScreen from './../../screens/LiveScreen';
import BuyScreen from '../../screens/BuyScreen';
import WaletScreen from '../../screens/WaletScreen';
import ProfileScreen from './../../screens/ProfileScreen';
import ColorValue from './../Styles/colorValue';
import FontValue from '../Styles/FontValue';
import {Image} from 'react-native';
import CommonStyle from './../Styles/CommonStyle';

const BottomNavigator = ({navigation}: any) => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <StatusBar backgroundColor={ColorValue.white} barStyle="dark-content" />

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: ColorValue.white,
          tabBarInactiveTintColor: ColorValue.white,
          // tabBarInactiveBackgroundColor:ColorValue.mainColor,
          tabBarActiveBackgroundColor: ColorValue.mainColor1,
          tabBarItemStyle: {borderRadius: 10},
          tabBarLabelStyle: {fontFamily: FontValue.NexaBold, fontSize: 11},
          tabBarStyle: {backgroundColor: ColorValue.mainColor},
        }}>
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => (
              <Image
                style={styles.image}
                source={require('../../../assets/1.png')}
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
                  source={require('../../../assets/2/icon1.png')}
                />
                <Image
                  style={styles.image2}
                  source={require('../../../assets/2/icon2.png')}
                />

                <Image
                  style={styles.image2}
                  source={require('../../../assets/2/icon3.png')}
                />
                <Image
                  style={styles.image2}
                  source={require('../../../assets/2/icon4.png')}
                />
              </View>
            ),
            headerTitle: '',
          }}
        />
        <Tab.Screen
          name="HistoryScreen"
          component={HistoryScreen}
          options={{
            tabBarLabel: 'History',
            tabBarIcon: ({color}) => (
              <Image
                style={styles.image}
                source={require('../../../assets/2.png')}
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
                  source={require('../../../assets/2/icon1.png')}
                />
                <Image
                  style={styles.image2}
                  source={require('../../../assets/2/icon2.png')}
                />

                <Image
                  style={styles.image2}
                  source={require('../../../assets/2/icon3.png')}
                />
                <Image
                  style={styles.image2}
                  source={require('../../../assets/2/icon4.png')}
                />
              </View>
            ),
            headerTitle: '',
          }}
        />

        <Tab.Screen
          name="LiveScreen"
          component={LiveScreen}
          options={{
            tabBarLabel: 'Live',
            tabBarIcon: ({color}) => (
              <Image
                style={styles.image}
                source={require('../../../assets/3.png')}
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
                  source={require('../../../assets/2/icon1.png')}
                />
                <Image
                  style={styles.image2}
                  source={require('../../../assets/2/icon2.png')}
                />

                <Image
                  style={styles.image2}
                  source={require('../../../assets/2/icon3.png')}
                />
                <Image
                  style={styles.image2}
                  source={require('../../../assets/2/icon4.png')}
                />
              </View>
            ),
            headerTitle: '',
          }}
        />

        <Tab.Screen
          name="Account"
          component={BuyScreen}
          options={{
            tabBarLabel: 'Click here to buy',
            tabBarIcon: ({color}) => (
              <Image
                style={styles.image}
                source={require('../../../assets/4.png')}
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
                  source={require('../../../assets/2/icon1.png')}
                />
                <Image
                  style={styles.image2}
                  source={require('../../../assets/2/icon2.png')}
                />

                <Image
                  style={styles.image2}
                  source={require('../../../assets/2/icon3.png')}
                />
                <Image
                  style={styles.image2}
                  source={require('../../../assets/2/icon4.png')}
                />
              </View>
            ),
            headerTitle: '',
          }}
        />

        <Tab.Screen
          name="WaletScreen"
          component={WaletScreen}
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
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  image: {width: 28, height: 28},
  image2: {width: 34, height: 34, marginHorizontal: 5},
});
