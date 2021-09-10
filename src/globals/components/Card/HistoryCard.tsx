import React from 'react';
import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text, Image} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import CommonStyle from '../../Styles/CommonStyle';

import HeightWightStyle from '../../Styles/HeightWightStyle';
import PaddingStyles from '../../Styles/PaddingStyles';
import TextStyles from '../../Styles/TextStyle';
import ColorsStyle from '../../Styles/ColorsStyle';
import MarginStyles from '../../Styles/MarginStyles';
import ColorValue from '../../Styles/colorValue';
import backgroundColor from './../../Styles/BackgroundColor';
import {colorsDark} from 'react-native-elements/dist/config';

const HistoryCard = () => {
  return (
    <Card
      containerStyle={{
        padding: 7,
        borderRadius: 10,
      }}
      wrapperStyle={{
        padding: 2,
        borderRadius: 10,
      }}>
      <ImageBackground
        imageStyle={{borderRadius: 10}}
        style={{width: '100%', height: 250}}
        source={{
          uri: 'https://www.interep.com.br/selecao-brasil/wp-content/uploads/2020/08/51725087.jpg',
        }}>
        <View style={[CommonStyle.rowSpaceBetween]}>
          <View
            style={[
              CommonStyle.rowFlexStart,
              backgroundColor.WhitebackgroundColor,
              PaddingStyles(10).paddingHorizontal,
              {borderRadius: 5, margin: 10},
            ]}>
            <View style={[CommonStyle.center]}>
              <Text style={[TextStyles.NexaBoldText15]}>Customer name</Text>
            </View>
          </View>

          <View
            style={[
              CommonStyle.rowFlexStart,
              backgroundColor.WhitebackgroundColor,
              HeightWightStyle('40%').wightValue,
              PaddingStyles(10).paddingHorizontal,
              {borderRadius: 5, margin: 10},
            ]}>
            <View style={[CommonStyle.center]}>
              <Text style={[TextStyles.NexaBoldText15]}> TRIP ID:01234 </Text>
            </View>
          </View>
        </View>

        <View style={{position: 'absolute', bottom: 0}}>
          <View style={[CommonStyle.rowSpaceBetween]}>
            <View style={[CommonStyle.rowFlexStart]}>
              <Image
                style={{width: 30, height: 30}}
                source={require('../../../../assets/3/1.png')}
              />
              <View style={[CommonStyle.center]}>
                <Text
                  style={[ColorsStyle.WhiteColor, TextStyles.NexaBoldText15]}>
                  {'Delhi > Kerala'}
                </Text>
              </View>
            </View>

            <View
              style={[
                CommonStyle.rowFlexStart,
                backgroundColor.WhitebackgroundColor,
                PaddingStyles(10).paddingHorizontal,
              ]}>
              <Image
                style={{width: 30, height: 30}}
                source={require('../../../../assets/3/2.png')}
              />
              <View style={[CommonStyle.center]}>
                <Text style={[TextStyles.NexaBoldText12]}> Travel Date</Text>
              </View>
            </View>
          </View>

          <View style={[CommonStyle.rowSpaceBetween]}>
            <View
              style={[
                CommonStyle.rowFlexStart,
                backgroundColor.WhitebackgroundColor,

                PaddingStyles(10).paddingHorizontal,
                {borderRadius: 5, margin: 10},
              ]}>
              <View style={[CommonStyle.center]}>
                <Text style={[TextStyles.NexaBoldText15]}> 2 adult, 3kid</Text>
              </View>
            </View>

            <View style={[CommonStyle.rowSpaceBetween]}>
              <View
                style={[
                  CommonStyle.rowFlexStart,
                  backgroundColor.WhitebackgroundColor,

                  PaddingStyles(10).paddingHorizontal,
                  {borderRadius: 5, margin: 10},
                ]}>
                <View style={[CommonStyle.center]}>
                  <Text style={[TextStyles.NexaBoldText15]}>3N 4D </Text>
                </View>
              </View>
            </View>

            <Image
              style={{width: '25%', height: 30}}
              source={require('../../../../assets/3/5.png')}
            />
          </View>
        </View>
      </ImageBackground>

      <View>
        <View style={[CommonStyle.rowSpaceBetween]}>
          <Text
            style={[
              TextStyles.NexaBoldText14,
              MarginStyles(10).marginVertical,
            ]}>
            {'Kochi>Thekdy>Allepy>Munar'}
          </Text>

          <View style={{padding: 8}}>
            <Text style={[TextStyles.NexaBoldText14, ColorsStyle.lightColor2]}>
              Rs. 20,000
            </Text>
            <Text style={[TextStyles.NexaBoldText14]}>Deal price</Text>
          </View>
        </View>

        {/* button */}
        {/* button */}
        {/* button */}
        {/* button */}
        <View style={CommonStyle.rowSpaceBetween}>
          <TouchableOpacity
            style={[
              backgroundColor.primarybackgroundColor4,
              HeightWightStyle('30%').wightValue,
              {borderRadius: 6},
            ]}>
            <Text
              style={[
                PaddingStyles(3).Paddingall,
                ColorsStyle.WhiteColor,
                CommonStyle.textCenter,
              ]}>
              View
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              HeightWightStyle('30%').wightValue,
              {borderRadius: 6, backgroundColor: ColorValue.seagreen},
            ]}>
            <Text
              style={[
                PaddingStyles(3).Paddingall,
                ColorsStyle.WhiteColor,
                CommonStyle.textCenter,
              ]}>
              Packages
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              HeightWightStyle('30%').wightValue,
              {borderRadius: 6, backgroundColor: ColorValue.redColor4},
            ]}>
            <Text
              style={[
                PaddingStyles(3).Paddingall,
                ColorsStyle.WhiteColor,
                CommonStyle.textCenter,
              ]}>
              Client Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({});
