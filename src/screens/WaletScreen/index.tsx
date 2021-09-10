import React, {useState} from 'react';
import {Image} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import FontValue from '../../globals/Styles/FontValue';
import CommonStyle from './../../globals/Styles/CommonStyle';
import TextStyles from './../../globals/Styles/TextStyle';
import PaddingStyles from './../../globals/Styles/PaddingStyles';
import MarginStyles from './../../globals/Styles/MarginStyles';
import HeightWightStyle from './../../globals/Styles/HeightWightStyle';
import backgroundColor from './../../globals/Styles/BackgroundColor';
import { Card, ListItem, Avatar } from 'react-native-elements';
import ColorValue from './../../globals/Styles/colorValue';
import {data1} from './data';
import ColorsStyle from './../../globals/Styles/ColorsStyle';
import {Tab} from 'react-native-elements';
import {TabView} from 'react-native-elements';
 
const WaletScreen = () => {
  const [index, setIndex] = useState(0);
  return (
    <View
      style={[
        backgroundColor.WhitebackgroundColor,
        HeightWightStyle('100%').heightValue,
      ]}>
      <View style={[styles.border]}>
        <View
          style={[
            CommonStyle.rowSpaceBetween,
            PaddingStyles(10).Paddingall,
            MarginStyles(20).marginHorizontal,
          ]}>
          <View
            style={[HeightWightStyle('41%').wightValue, CommonStyle.center]}>
            <Text style={[TextStyles.NexaBoldText18]}>All Transacitions</Text>
            <Card.Divider
              orientation="horizontal"
              color={ColorValue.lightColor5}
              width={2}
            />
          </View>
          <View
            style={[
              HeightWightStyle('30%').wightValue,
              CommonStyle.rowFlexEnd,
            ]}>
            <Image
              source={require('../../../assets/6/1.png')}
              style={{width: 50, height: 50}}
            />
            <Image
              source={require('../../../assets/6/2.png')}
              style={{width: 50, height: 50}}
            />
          </View>
        </View>

        <View style={[MarginStyles('5%').marginHorizontal]}>
          {data1.map((item: any) => {
            return (
              <View
                style={[
                  CommonStyle.rowSpaceBetween,
                  PaddingStyles(7).Paddingall,
                ]}>
                <Text
                  style={[TextStyles.NexaBoldText18, ColorsStyle.darkColor]}>
                  {item.name}
                </Text>
                <Text
                  style={[TextStyles.NexaBoldText18, ColorsStyle.darkColor]}>
                  {item.amount}
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      <View>
        <Tab  value={index} onChange={value => setIndex(value)}>
          <Tab.Item title="recent" />
          <Tab.Item title="favorite" />
        </Tab>
        <TabView value={index} onChange={setIndex} >
          <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
            <Text h1>Recent</Text>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
            <Text h1>Favorite</Text>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
            <Text h1>Cart</Text>
          </TabView.Item>
        </TabView>
        
      </View>
    </View>
  );
};

export default WaletScreen;

const styles = StyleSheet.create({
  border: {borderWidth: 1, borderColor: ColorValue.lightColor2},
});
