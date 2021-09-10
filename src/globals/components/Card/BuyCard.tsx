import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {View, Text, Image} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import CommonStyle from '../../Styles/CommonStyle';
import backgroundColor from '../../Styles/BackgroundColor';
import HeightWightStyle from '../../Styles/HeightWightStyle';
import PaddingStyles from '../../Styles/PaddingStyles';
import TextStyles from '../../Styles/TextStyle';
import ColorsStyle from '../../Styles/ColorsStyle';
import MarginStyles from '../../Styles/MarginStyles';
import ColorValue from '../../Styles/colorValue';

const BuyCard = () => {
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
              HeightWightStyle('40%').wightValue,
              PaddingStyles(10).paddingHorizontal,
              {borderRadius: 5, margin: 10},
            ]}>
            <Image
              style={{width: 25, height: 25}}
              source={require('../../../../assets/5/6.png')}
            />
            <View style={[CommonStyle.center]}>
              <Text style={[TextStyles.NexaBoldText15]}>12:36Min </Text>
            </View>
            <Text
              style={{
                textAlign: 'right',
                fontSize: 10,
                fontFamily: 'Nexa Bold',
              }}>
              (left)
            </Text>
          </View>

          <View
            style={[
              CommonStyle.rowFlexStart,
              backgroundColor.WhitebackgroundColor,
              HeightWightStyle('40%').wightValue,
              PaddingStyles(10).paddingHorizontal,
              {borderRadius: 5, margin: 10},
            ]}>
            <Image
              style={{width: 25, height: 25}}
              source={require('../../../../assets/5/6.png')}
            />
            <View style={[CommonStyle.center]}>
              <Text style={[TextStyles.NexaBoldText15]}>12:36Min </Text>
            </View>
            <Text
              style={{
                textAlign: 'right',
                fontSize: 10,
                fontFamily: 'Nexa Bold',
              }}>
              (left)
            </Text>
          </View>
        </View>

        <View style={{position: 'absolute', bottom: 0}}>
          <View style={[CommonStyle.rowFlexStart]}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../../../../assets/3/1.png')}
            />
            <View style={[CommonStyle.center]}>
              <Text style={[ColorsStyle.WhiteColor, TextStyles.NexaBoldText15]}>
                {'Delhi > Kerala'}
              </Text>
            </View>
          </View>

          <View style={[CommonStyle.rowFlexStart]}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../../../../assets/5/7.png')}
            />
            <View style={[CommonStyle.center]}>
              <Text style={[ColorsStyle.WhiteColor, TextStyles.NexaBoldText15]}>
                {'9887**************'}
              </Text>
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

      <View style={[CommonStyle.rowSpaceBetween, {marginTop: 20}]}>
        <View>
          <Image
            style={{width: 30, height: 30, alignSelf: 'center'}}
            source={require('../../../../assets/3/3.png')}
          />
          <View style={[CommonStyle.center]}>
            <Text style={[TextStyles.NexaBoldText15]}>Breakfast</Text>
          </View>
        </View>

        <View>
          <Image
            style={{width: 30, height: 30, alignSelf: 'center'}}
            source={require('../../../../assets/3/4.png')}
          />
          <View style={[CommonStyle.center]}>
            <Text style={[TextStyles.NexaBoldText15]}>Aurport Picup-Drop</Text>
          </View>
        </View>

        <View>
          <Image
            style={{width: 30, height: 30, alignSelf: 'center'}}
            source={require('../../../../assets/5/1.png')}
          />
          <View style={[CommonStyle.center]}>
            <Text style={[TextStyles.NexaBoldText15]}>Veg</Text>
          </View>
        </View>
      </View>

      <View>
        <Text
          style={[TextStyles.NexaBoldText14, MarginStyles(10).marginVertical]}>
          {'Kochi>Thekdy>Allepy>Munar'}
        </Text>
        <Button
          buttonStyle={{
            backgroundColor: ColorValue.successColorDark3,
            borderRadius: 5,
          }}
          title="BUY NOW at Rs 20,000"
        />
      </View>
    </Card>
  );
};

export default BuyCard;

const styles = StyleSheet.create({});
