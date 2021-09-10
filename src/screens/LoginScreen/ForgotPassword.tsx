import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Input, Image} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import {Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {successFlash} from '../../globals/Messages';

import ColorsStyle from '../../globals/Styles/ColorsStyle';
import TextStyles from '../../globals/Styles/TextStyle';
import {SendMail} from '../../Redux/Action/AuthAction';
import backgroundColor from './../../globals/Styles/BackgroundColor';
import {errorFlash} from './../../globals/Messages/index';
import {ChangePassword} from './../../Redux/Action/AuthAction';

const ForgotPassword = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false)
  const [token, setToken] = useState(false);
  const [tokeninput, setTokeninput] = useState('');
  const [changepass, setChangepass] = useState('');
  const [email, setEmail] = useState('');
  console.log(email);
  const dispatch = useDispatch();
  const emailSend = async () => {
    if (email === '') {
      return errorFlash('error msg', 'please give a valid email');
    }
    try {
      await setLoading(true)
      await dispatch(SendMail({email: email}));
      await setLoading(false)
      await setToken(true);
      await successFlash(
        'Send email',
        'we send a email in your mail use otp here!',
      );
    } catch (err) {
      console.log(err);
    }
  };
  const successMsg =  useSelector(state => state.Auth.changePass?.msg)
  
  
  
  const Changepass = async () => {
    await setLoading(true)
    await dispatch(ChangePassword(tokeninput,changepass));
    await setLoading(false)
    await setModalVisible(false)
    await setToken(false)
    await setChangepass("")

    if(successMsg){
      successFlash("change password",successMsg)
   }
     
  };

 
  return (
    <View style={styles.centeredView}>
      <Modal
        style={styles.modalBackground}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {!changepass && !token && (
              <View>
                <Input
                  onChangeText={text => setEmail(text)}
                  containerStyle={{padding: 0, margin: 0, width: 300}}
                  inputContainerStyle={[
                    backgroundColor.WhitebackgroundColor,
                    styles.inputStyle,
                  ]}
                  placeholder="Enter your email"
                  leftIcon={<Icon name="email" />}
                />

                <Button loading={loading} onPress={emailSend} title="Send code" />
              </View>
            )}

            {token && (
              <View>
                <Input
                  onChangeText={text => setTokeninput(text)}
                  containerStyle={{padding: 0, margin: 0, width: 300}}
                  inputContainerStyle={[
                    backgroundColor.WhitebackgroundColor,
                    styles.inputStyle,
                  ]}
                  placeholder="Enter your Token"
                  leftIcon={<Icon name="email" />}
                />

                <Input
                  onChangeText={text => setChangepass(text)}
                  containerStyle={{padding: 0, margin: 0, width: 300}}
                  inputContainerStyle={[
                    backgroundColor.WhitebackgroundColor,
                    styles.inputStyle,
                  ]}
                  placeholder="Enter new password"
                  leftIcon={
                    <Image
                      style={{width: 30, height: 30}}
                      source={require('../../../assets/1.5/2.png')}
                    />
                  }
                />
                <Button onPress={() => Changepass()} title="Submit" />
              </View>
            )}
          </View>
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <Text style={[TextStyles.NexaBoldText14, ColorsStyle.WhiteColor]}>
          Forgot Password
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    height: '100%',
  },
  modalBackground: {backgroundColor: 'rgba(0, 0, 0, 0.459)'},
  modalView: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '95%',
    height: '50%',
    borderRadius: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  inputStyle: {borderRadius: 6, paddingHorizontal: 10},
});

export default ForgotPassword;

{
  /* <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
<Text style={[TextStyles.NexaBoldText14, ColorsStyle.WhiteColor]}>
  Forgot Password
</Text>
</TouchableOpacity> */
}
