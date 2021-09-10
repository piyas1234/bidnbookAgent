import React, {useEffect} from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import {Text} from 'react-native';
import backgroundColor from '../../globals/Styles/BackgroundColor';
import TextStyles from './../../globals/Styles/TextStyle';
import CommonStyle from './../../globals/Styles/CommonStyle';

import MarginStyles from './../../globals/Styles/MarginStyles';
import ColorsStyle from './../../globals/Styles/ColorsStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ColorValue from './../../globals/Styles/colorValue';
import PaddingStyles from './../../globals/Styles/PaddingStyles';
import {StyleSheet} from 'react-native';
import FontStyles from './../../globals/Styles/FontStyle';
import {Card} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {errorFlash} from '../../globals/Messages';
import {useDispatch, useSelector} from 'react-redux';
import {successFlash} from './../../globals/Messages/index';
import {removeValue} from './../../Redux/AsyncStorage/index';
import {logoutAction} from '../../Redux/Action/AuthAction';
import {store} from './../../Redux/Store/store';

const ProfileScreen = ({navigation}: any) => {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await dispatch(logoutAction());
    await successFlash('Logout', 'user loggedout successfully!');
  };

  const Login = useSelector(state => state.Auth.Login);
  const BasicInfo = useSelector(state => state.Profile.BasicInfo);

  console.log(Login);

  return (
    <ScrollView style={[backgroundColor.WhitebackgroundColor]}>
      <View
        style={[
          MarginStyles(15).marginall,
          {
            borderWidth: 1,
            borderColor: ColorValue.lightColor2,
            borderRadius: 7,
          },
        ]}>
        <View style={PaddingStyles(10).paddingTop}>
          <Text style={[TextStyles.NexaBoldText17, CommonStyle.textCenter]}>
            PROFILE
          </Text>
          <View style={[CommonStyle.rowFlexStart, {padding: 10}]}>
            <Image
              style={{height: 90, width: 90, borderRadius: 100 / 2}}
              source={
                {uri: BasicInfo.image} || require('../../../assets/2/icon5.png')
              }
            />
            <View style={[CommonStyle.center, MarginStyles(10).marginLeft]}>
              <Text style={[TextStyles.NexaBoldText19, ColorsStyle.darkColor]}>
                {BasicInfo.first_name + ' ' + BasicInfo.last_name ||
                  'Demo Name'}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('UpdateProfile')}>
                <Text
                  style={[
                    TextStyles.NexaBoldText11,
                    ColorsStyle.successColorDark2,
                    MarginStyles(3).marginVertical,
                  ]}>
                  EDIT PROFILE
                </Text>
              </TouchableOpacity>
              <View style={[CommonStyle.rowFlexStart]}>
                <View style={[CommonStyle.center]}>
                  <AntDesign
                    size={15}
                    color={ColorValue.lightColor2}
                    name="mail"
                  />
                </View>
                <Text
                  style={[TextStyles.NexaBoldText12, ColorsStyle.lightColor2]}>
                  {' '}
                  {store.getState().Auth.Login.employee_email ||
                    'demo email@gmail.com'}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={[CommonStyle.rowSpaceBetween, MarginStyles(10).marginall]}>
            <View
              style={[
                {
                  backgroundColor: 'rgba(255, 127, 7, 0.288)',
                  width: '30%',
                  height: 140,
                  justifyContent: 'center',
                  borderRadius: 6,
                  borderColor: ColorValue.lightColor2,
                  borderWidth: 1,
                },
              ]}>
              <Image
                style={styles.image}
                source={require('../../../assets/2/icon6.png')}
              />
              <Text style={[TextStyles.NexaBoldText18, CommonStyle.textCenter]}>
                300
              </Text>
              <Text
                style={[
                  TextStyles.NexaBoldText12,
                  ColorsStyle.lightColor2,
                  CommonStyle.textCenter,
                ]}>
                BIDS
              </Text>
            </View>
            <View
              style={[
                {
                  backgroundColor: 'rgba(7, 238, 255, 0.247)',
                  width: '30%',
                  height: 140,
                  justifyContent: 'center',
                  borderRadius: 6,
                  borderColor: ColorValue.lightColor2,
                  borderWidth: 1,
                },
              ]}>
              <Image
                style={styles.image}
                source={require('../../../assets/2/icon7.png')}
              />
              <Text style={[TextStyles.NexaBoldText18, CommonStyle.textCenter]}>
                184
              </Text>
              <Text
                style={[
                  TextStyles.NexaBoldText12,
                  ColorsStyle.lightColor2,
                  CommonStyle.textCenter,
                ]}>
                WINS
              </Text>
            </View>
            <View
              style={[
                {
                  backgroundColor: 'rgba(255, 197, 7, 0.288)',
                  width: '30%',
                  height: 140,
                  justifyContent: 'center',
                  borderRadius: 6,
                  borderColor: ColorValue.lightColor2,
                  borderWidth: 1,
                },
              ]}>
              <Image
                style={styles.image}
                source={require('../../../assets/2/icon8.png')}
              />
              <Text style={[TextStyles.NexaBoldText18, CommonStyle.textCenter]}>
                150
              </Text>
              <Text
                style={[
                  TextStyles.NexaBoldText12,
                  ColorsStyle.lightColor2,
                  CommonStyle.textCenter,
                ]}>
                CONVERTED
              </Text>
            </View>
          </View>

          <Card.Divider
            style={[MarginStyles(20).marginTop]}
            color={ColorValue.lightColor8}
          />
        </View>

        <View style={[MarginStyles(20).marginall]}>
          <View style={[CommonStyle.rowSpaceBetween]}>
            <View style={[CommonStyle.rowFlexStart]}>
              <Image
                style={{width: 32, height: 32}}
                source={require('../../../assets/2/icon9.png')}
              />
              <View style={[CommonStyle.center]}>
                <Text
                  style={[
                    TextStyles.NexaBoldText17,
                    MarginStyles(10).marginLeft,
                  ]}>
                  Edit my Product
                </Text>
              </View>
            </View>

            <View style={[CommonStyle.rowFlexStart]}>
              <Image
                style={{width: 32, height: 32}}
                source={require('../../../assets/2/icon10.png')}
              />
              <View style={[CommonStyle.center]}>
                <Text
                  style={[
                    TextStyles.NexaBoldText17,
                    MarginStyles(10).marginLeft,
                  ]}>
                  Add Property
                </Text>
              </View>
            </View>
          </View>

          <View
            style={[CommonStyle.rowSpaceBetween, MarginStyles(20).marginTop]}>
            <Image
              style={{
                width: '32%',
                height: 150,
                resizeMode: 'contain',
                borderRadius: 20,
              }}
              source={{
                uri: 'https://th.bing.com/th/id/R.6edf6707338c06955577b22abe3c34f4?rik=2mQ1JYlM8VWXaQ&pid=ImgRaw&r=0',
              }}
            />
            <Image
              style={{
                width: '32%',
                height: 150,
                resizeMode: 'contain',
                borderRadius: 20,
              }}
              source={{
                uri: 'https://i.pinimg.com/originals/34/3b/df/343bdfa2d2bc184f5f4c925834014e75.jpg',
              }}
            />
            <Image
              style={{
                width: '32%',
                height: 150,
                resizeMode: 'contain',
                borderRadius: 20,
              }}
              source={{
                uri: 'https://th.bing.com/th/id/OIP.J91i7bzEGbBX2uFcNJ5JwwHaLH?pid=ImgDet&w=1500&h=2250&rs=1',
              }}
            />
          </View>

          <View>
            <View
              style={[
                CommonStyle.rowFlexStart,
                PaddingStyles(10).paddingVertical,
              ]}>
              <Image
                style={{width: 45, height: 45, resizeMode: 'contain'}}
                source={require('../../../assets/2/icon11.png')}
              />
              <View style={[CommonStyle.center]}>
                <Text
                  style={[
                    TextStyles.NexaBoldText16,
                    MarginStyles(20).marginLeft,
                  ]}>
                  Edit My Prefrence
                </Text>
              </View>
            </View>

            <View
              style={[
                CommonStyle.rowFlexStart,
                PaddingStyles(10).paddingVertical,
              ]}>
              <Image
                style={{width: 45, height: 45, resizeMode: 'contain'}}
                source={require('../../../assets/2/icon12.png')}
              />
              <View style={[CommonStyle.center]}>
                <Text
                  style={[
                    TextStyles.NexaBoldText16,
                    MarginStyles(20).marginLeft,
                  ]}>
                  Edit My Prefrence
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Card.Divider
          style={{borderWidth: 1, borderColor: ColorValue.lightColor2}}
        />

        <View style={[PaddingStyles(20).paddingHorizontal]}>
          <View
            style={[
              CommonStyle.rowFlexStart,
              PaddingStyles(10).paddingVertical,
            ]}>
            <Image
              style={{width: 45, height: 45, resizeMode: 'contain'}}
              source={require('../../../assets/2/icon13.png')}
            />
            <View style={[CommonStyle.center]}>
              <Text
                style={[
                  TextStyles.NexaBoldText16,
                  MarginStyles(20).marginLeft,
                ]}>
                Edit My Prefrence
              </Text>
            </View>
          </View>

          <View
            style={[
              CommonStyle.rowFlexStart,
              PaddingStyles(10).paddingVertical,
            ]}>
            <Image
              style={{width: 45, height: 45, resizeMode: 'contain'}}
              source={require('../../../assets/2/icon14.png')}
            />
            <View style={[CommonStyle.center]}>
              <Text
                style={[
                  TextStyles.NexaBoldText16,
                  MarginStyles(20).marginLeft,
                ]}>
                Edit My Prefrence
              </Text>
            </View>
          </View>

          <View
            style={[
              CommonStyle.rowFlexStart,
              PaddingStyles(10).paddingVertical,
            ]}>
            <Image
              style={{width: 45, height: 45, resizeMode: 'contain'}}
              source={require('../../../assets/2/icon15.png')}
            />
            <View style={[CommonStyle.center]}>
              <Text
                style={[
                  TextStyles.NexaBoldText16,
                  MarginStyles(20).marginLeft,
                ]}>
                Edit My Prefrence
              </Text>
            </View>
          </View>
        </View>
        <Card.Divider
          style={{borderWidth: 1, borderColor: ColorValue.lightColor2}}
        />

        <View style={[PaddingStyles(20).paddingHorizontal]}>
          <View
            style={[
              CommonStyle.rowFlexStart,
              PaddingStyles(10).paddingVertical,
            ]}>
            <Image
              style={{width: 45, height: 45, resizeMode: 'contain'}}
              source={require('../../../assets/2/icon16.png')}
            />
            <View style={[CommonStyle.center]}>
              <Text
                style={[
                  TextStyles.NexaBoldText16,
                  MarginStyles(20).marginLeft,
                ]}>
                ON/OFF
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => logoutHandler()}
            style={[
              CommonStyle.rowFlexStart,
              PaddingStyles(10).paddingVertical,
            ]}>
            <Image
              style={{width: 45, height: 45, resizeMode: 'contain'}}
              source={require('../../../assets/2/icon17.png')}
            />
            <View style={[CommonStyle.center]}>
              <Text
                style={[
                  TextStyles.NexaBoldText16,
                  MarginStyles(20).marginLeft,
                ]}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  image: {width: 60, height: 60, resizeMode: 'contain', alignSelf: 'center'},
});
