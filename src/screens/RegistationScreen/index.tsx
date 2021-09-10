import React, {useState} from 'react';
import {
  Picker,
  StyleSheet,
  Text,
  Touchable,
  View,
  TouchableOpacity,
} from 'react-native';
import {Button, CheckBox} from 'react-native-elements';
import ColorValue from './../../globals/Styles/colorValue';
import {Input} from 'react-native-elements';
import TextStyles from './../../globals/Styles/TextStyle';
import MarginStyles from '../../globals/Styles/MarginStyles';
import {useDispatch, useSelector} from 'react-redux';
import CommonStyle from './../../globals/Styles/CommonStyle';
import {SignUpAction} from './../../Redux/Action/AuthAction';
import {errorFlash} from './../../globals/Messages/index';
import {FromValidator} from './Validation';
import VerifyModal from './VerifyModal';
import ColorsStyle from './../../globals/Styles/ColorsStyle';

const RegistationScreen = ({navigation}: any) => {
  const SignUpFlash = useSelector(state => state.Auth.SignUp);
  const SignUpModal = useSelector(state => state.Auth.SignupModal);
  const [modalVisible, setModalVisible] = useState(false);
  const roles = useSelector(state => state.Auth.roleList);
  const [termsandcond, setTermsandcond] = useState(false);
  const [msg, setMsg] = useState({
    emailMsg: '',
    passwordMsg: '',
    confirmPasswordMsg: '',
  });

  console.log(msg);
  const [input, setInput] = useState({
    email: '',
    password: '',
    cpassword: '',
    role_id: '',
  });
  const [loading, setLoading] = useState(false);
  console.log(input, 'roles');
  const dispatch = useDispatch();

  const sighupAction = async () => {
    if (
      input.email === '' ||
      input.password === '' ||
      input.cpassword === '' ||
      input.role_id === '' ||
      termsandcond === false
    ) {
      return errorFlash('Validation error', 'Please fill all the fields');
    }
    if (msg.emailMsg !== 'okk' || msg.passwordMsg !== 'okk') {
      return errorFlash('Validation error', 'Please give valid information');
    }

    try {
      await setLoading(true);
      await dispatch(SignUpAction({...input, termsandcond}));
      await setLoading(false);
      await SignUpFlash;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={[styles.main]}>
      <View style={[styles.sub]}>
        <Button
          buttonStyle={{backgroundColor: 'rgb(2, 3, 37)'}}
          containerStyle={[styles.register]}
          title="REGISTER"
        />

        <View style={[MarginStyles(10).marginTop]}>
          <Text
            style={[TextStyles.NexaBoldText17, MarginStyles(13).marginLeft]}>
            Email Address
          </Text>
          <Input
            onChangeText={text => {
              setInput({...input, email: text});
              FromValidator(input, setMsg);
            }}
            placeholder="enter Email"
            placeholderTextColor={ColorValue.lightColor4}
            inputStyle={[TextStyles.NexaBoldText14]}
            containerStyle={[styles.containerStyle]}
            inputContainerStyle={[styles.inputContainerStyle]}
            errorMessage={msg.emailMsg}
            errorStyle={
              msg.emailMsg === 'okk'
                ? {color: ColorValue.blue}
                : {color: ColorValue.red}
            }
          />
        </View>

        <View>
          <Text
            style={[TextStyles.NexaBoldText15, MarginStyles(13).marginLeft]}>
            PASSWORD
          </Text>
          <Input
            onChangeText={text => {
              setInput({...input, password: text});
              FromValidator(input, setMsg);
            }}
            placeholder="enter password"
            placeholderTextColor={ColorValue.lightColor4}
            inputStyle={[TextStyles.NexaBoldText14]}
            containerStyle={[styles.containerStyle]}
            inputContainerStyle={[styles.inputContainerStyle]}
            errorMessage={msg?.passwordMsg}
            errorStyle={
              msg.passwordMsg === 'okk'
                ? {color: ColorValue.blue}
                : {color: ColorValue.red}
            }
          />
        </View>

        <View>
          <Text
            style={[TextStyles.NexaBoldText17, MarginStyles(13).marginLeft]}>
            Confirm password
          </Text>
          <Input
            onChangeText={text => {
              setInput({...input, cpassword: text});
              FromValidator(input, setMsg);
            }}
            placeholder="confirm password"
            placeholderTextColor={ColorValue.lightColor4}
            inputStyle={[TextStyles.NexaBoldText14]}
            containerStyle={[styles.containerStyle]}
            inputContainerStyle={[styles.inputContainerStyle]}
            // errorMessage={msg?.confirmPasswordMsg}
            // errorStyle={msg.confirmPasswordMsg==="okk"? {color:ColorValue.blue} : {color:ColorValue.red}}
          />
        </View>

        <Text style={[TextStyles.NexaBoldText17, MarginStyles(13).marginLeft]}>
          Register as
        </Text>
        <View style={styles.pickerContainerStyle}>
          <Picker
            onValueChange={text => setInput({...input, role_id: text})}
            itemStyle={[TextStyles.NexaBoldText14]}>
            <Picker.Item label="Sellect one" />
            {roles.map((item: any) => {
              return <Picker.Item value={item.id} label={item.name} />;
            })}
          </Picker>
        </View>
        <View style={[CommonStyle.rowFlexStart]}>
          <CheckBox
            checked={termsandcond}
            onPress={() => setTermsandcond(!termsandcond)}
          />
          <View style={[CommonStyle.center]}>
            <Text style={[TextStyles.NexaBoldText14]}>
              I read and agree to terms && conditions
            </Text>
          </View>
        </View>

        <Button
          onPress={sighupAction}
          buttonStyle={{backgroundColor: 'rgb(2, 3, 37)'}}
          containerStyle={[styles.register]}
          title="Sign Up"
          loading={loading}
        />
        <TouchableOpacity
          style={[CommonStyle.rowCenter, MarginStyles(10).marginTop]}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={[TextStyles.NexaBoldText14, ColorsStyle.successColor1]}>
            <Text
              style={[TextStyles.NexaBoldText14, ColorsStyle.primaryColorDark]}>
              Already have a account
            </Text>{' '}
            Login
          </Text>
        </TouchableOpacity>
      </View>

      <VerifyModal data={{modalVisible, setModalVisible, SignUpModal}} />
    </View>
  );
};

export default RegistationScreen;

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
  },
  sub: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: ColorValue.white,
    padding: 10,
    justifyContent: 'center',
    height: '90%',
    elevation: 5,
    borderRadius: 10,
  },
  register: {
    borderRadius: 14,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    backgroundColor: ColorValue.lightColor1,
    borderRadius: 15,
  },
  pickerContainerStyle: {
    marginHorizontal: 10,
    marginBottom: 20,
    borderBottomWidth: 0,
    backgroundColor: ColorValue.lightColor1,
    borderRadius: 15,
  },
  containerStyle: {},
});
