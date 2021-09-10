import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Input } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { errorFlash } from "../../globals/Messages";
import { SignUpOTPAction } from "../../Redux/Action/AuthAction";
import { SignOTPModal } from './../../Redux/Action/AuthAction';

const VerifyModal = ({data}:any) => {
    const {modalVisible, setModalVisible, SignUpModal} =  data;
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    const SignupOtpVerify = useSelector(state => state.Autn?.SignupOtpVerify)
    
    console.log(SignupOtpVerify)
    const onPressHandler = async ()=>{
        if(input==""){
            return errorFlash("validation error","Please fill the field")
        }
        try{
            await dispatch(SignUpOTPAction(input))
            await SignupOtpVerify
        }
        catch(err){
            await errorFlash("faild","OTP is not valid")
            console.warn(err)

        }
    }


    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible || SignUpModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Pressable onPress={()=>dispatch(SignOTPModal())}>
                    <Text>X</Text>
                </Pressable>
              <Input onChangeText={(text)=>setInput(text)} placeholder="Enter OTP" containerStyle={{width: 200}} />
              <Pressable onPress={()=>onPressHandler()} style={[styles.button, styles.buttonClose]}>
                <Text style={styles.textStyle}>Verify</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
}

export default VerifyModal

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
  