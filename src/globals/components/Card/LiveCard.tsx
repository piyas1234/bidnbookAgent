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
 

const LiveCard = () => {
  return (
    <Card
      containerStyle={{
        padding: 0,
        borderRadius: 10,
      }}
      wrapperStyle={{
        borderRadius: 10,
      }}>
      <ImageBackground
        imageStyle={{borderRadius: 10}}
        style={{width: '100%', height: 250}}
        source={{
          uri: 'https://www.interep.com.br/selecao-brasil/wp-content/uploads/2020/08/51725087.jpg',
        }}>
        {/* time and trip id  */}
        {/* time and trip id  */}
        {/* time and trip id  */}
        {/* time and trip id  */}
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
            <View style={[CommonStyle.center]}>
              <Text style={[TextStyles.NexaBoldText15]}> TRIP ID: 01234 </Text>
            </View>
          </View>
        </View>

        <View style={{position: 'absolute', bottom: 0}}>
          {/* background image footer */}
          {/* background image footer */}
          {/* background image footer */}
          {/* background image footer */}
          {/* background image footer */}

          <View style={[CommonStyle.rowSpaceBetween]}>
            <View>
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

              <View style={[CommonStyle.rowSpaceBetween]}>
                <View
                  style={[
                    CommonStyle.rowFlexStart,
                    backgroundColor.WhitebackgroundColor,

                    PaddingStyles(10).paddingHorizontal,
                    {borderRadius: 5, margin: 10},
                  ]}>
                  <View style={[CommonStyle.center]}>
                    <Text style={[TextStyles.NexaBoldText15]}>
                      {' '}
                      2 adult, 3kid
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
                      <Text style={[TextStyles.NexaBoldText15]}>3N 4D </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[CommonStyle.center, {marginLeft: 20}]}>
              <Image
                style={{width: 100, height: 20}}
                source={require('../../../../assets/3/5.png')}
              />
              <View
                style={[
                  backgroundColor.WhitebackgroundColor,
                  CommonStyle.rowFlexStart,
                  {borderRadius: 5},
                ]}>
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../../../../assets/3/2.png')}
                />
                <View style={[CommonStyle.center]}>
                  <Text style={[TextStyles.NexaBoldText12]}>10th AUG</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>

      <View style={[CommonStyle.rowSpaceBetween, {padding: 10}]}>
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
              <Text style={[TextStyles.NexaBoldText15]}>Aurport P&D</Text>
            </View>
          </View>
        </View>
        <View style={[PaddingStyles(10).Paddingall]}>
          <Image
            style={{width: 50, height: 50, alignSelf: 'center'}}
            source={require('../../../../assets/4/1.png')}
          />
        </View>
      </View>


      <View style={[PaddingStyles(10).paddingHorizontal]}>
        <Text
          style={[TextStyles.NexaBoldText14, MarginStyles(10).marginVertical]}>
          {'Kochi>Thekdy>Allepy>Munar'}
        </Text>

       <View style={{flexDirection:'row', paddingBottom:20}}>
          <View style={{flex:2}} >
            <Text style={[TextStyles.NexaBoldText14]}>Loawest Bid</Text>
            <Text style={[TextStyles.NexaBoldText14, ColorsStyle.lightColor2]}>Rs. 24,000</Text>
            <View style={[CommonStyle.rowFlexStart, MarginStyles(5).marginTop]} >
            <Button type="outline" title="+" />
            <Button type="outline" title="23,000" />
            <Button type="outline" title="-" />
            </View>
          </View>
          <View style={{flex:1}} >
            <Text style={[TextStyles.NexaBoldText14]}>Total bid</Text>
            <Text style={[TextStyles.NexaBoldText14, ColorsStyle.lightColor2]}>03</Text>
             <View style={[MarginStyles(5).marginTop]}>
             <Button  buttonStyle={{backgroundColor:ColorValue.darkcyan}} title="Submit" />
             </View>
          </View>
       </View>


      </View>


    </Card>
  );
};

export default LiveCard;

const styles = StyleSheet.create({});
