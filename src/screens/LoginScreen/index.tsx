import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
  Linking,
  StatusBar,
} from 'react-native';
import CommonStyle from './../../globals/Styles/CommonStyle';
import HeightWightStyle from './../../globals/Styles/HeightWightStyle';
import TextStyles from './../../globals/Styles/TextStyle';
import ColorsStyle from './../../globals/Styles/ColorsStyle';
import {Input} from 'react-native-elements';
import backgroundColor from './../../globals/Styles/BackgroundColor';
import MarginStyles from './../../globals/Styles/MarginStyles';
import {CheckBox} from 'react-native-elements';
import {Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {LoginAction} from '../../Redux/Action/AuthAction';
import ForgotPassword from './ForgotPassword';
import {errorFlash} from './../../globals/Messages/index';

const LoginScreen: React.FC = ({navigation}: any) => {
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({email: '', password: ''});
  const LoginMsg = useSelector(state => state.Auth.LoginMsg);
  const dispatch = useDispatch();


  
  const loginUser = async () => {
    if (input.email === '' || input.password === '') {
      return errorFlash('invalid info', 'Please use  valid email and password');
    }

    try {
      await setLoading(true);
      await dispatch(LoginAction(input));
      await LoginMsg;
      await setLoading(false);
    } catch (err) {
      await errorFlash('Wrong info', 'Username or email is invalid');
      await setLoading(false);
    }
  };

  return (
    <ImageBackground
      resizeMode="stretch"
      style={{width: '100%', height: '100%'}}
      source={require('../../../assets/1/background.jpg')}>
      <StatusBar backgroundColor="rgb(0, 24, 37)" />
      <View
        style={[
          HeightWightStyle('100%').heightValue,
          HeightWightStyle('100%').wightValue,
        ]}>
        <View style={{justifyContent: 'center', marginVertical: '40%'}}>
          <Image
            style={{width: 200, height: 50, alignSelf: 'center'}}
            source={require('../../../assets/1/logo.png')}
          />

          <Text
            style={[
              TextStyles.NexaBoldText28,
              ColorsStyle.WhiteColor,
              {textAlign: 'center', marginTop: 20},
            ]}>
            Welcome
          </Text>
          <Text
            style={[
              TextStyles.NexaBoldText14,
              ColorsStyle.WhiteColor,
              {textAlign: 'center', marginTop: 7},
            ]}>
            Please login to continue
          </Text>

          <View style={MarginStyles(20).marginTop}>
            <Input
              onChangeText={text => setInput({...input, email: text})}
              containerStyle={{padding: 0, margin: 0}}
              inputContainerStyle={[
                backgroundColor.WhitebackgroundColor,
                styles.inputStyle,
              ]}
              placeholder="User Id/Registered Mobile Number"
              leftIcon={
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../../../assets/1.5/1.png')}
                />
              }
            />

            <Input
              onChangeText={text => setInput({...input, password: text})}
              containerStyle={{padding: 0, margin: 0}}
              inputContainerStyle={[
                backgroundColor.WhitebackgroundColor,
                styles.inputStyle,
              ]}
              secureTextEntry={true}
              placeholder="Password"
              leftIcon={
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../../../assets/1.5/2.png')}
                />
              }
            />

            <View
              style={[
                CommonStyle.rowSpaceBetween,
                {position: 'relative', top: -30},
              ]}>
              <View style={{flexDirection: 'row'}}>
                <CheckBox
                  center
                  checked={check}
                  onPress={() => setCheck(!check)}
                />
                <View style={[CommonStyle.center]}>
                  <Text
                    style={[TextStyles.NexaBoldText14, ColorsStyle.WhiteColor]}>
                    Remember
                  </Text>
                </View>
              </View>

              <View>
                <ForgotPassword />
              </View>
            </View>

            <View
              style={[
                CommonStyle.rowSpaceBetween,
                MarginStyles(15).marginHorizontal,
                {position: 'relative', top: -30},
              ]}>
              <Button
                onPress={() => navigation.navigate('SignupScreen')}
                title="Register"
                buttonStyle={{
                  backgroundColor: 'tomato',
                  padding: 13,
                  borderRadius: 5,
                }}
                containerStyle={{width: '40%'}}
              />

              <Button
                onPress={() => loginUser()}
                title="Login"
                loading={loading}
                containerStyle={{width: '40%'}}
                buttonStyle={{
                  backgroundColor: 'tomato',
                  padding: 13,
                  borderRadius: 5,
                }}
              />
            </View>

            <View>
              <Text
                style={[
                  TextStyles.NexaBoldText16,
                  ColorsStyle.WhiteColor,
                  {textAlign: 'center'},
                ]}>
                Login with OTP
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  inputStyle: {borderRadius: 6, paddingHorizontal: 10},
});
