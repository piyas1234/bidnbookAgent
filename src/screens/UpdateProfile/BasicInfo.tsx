import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input, makeStyles} from 'react-native-elements';
import TextStyles from './../../globals/Styles/TextStyle';
import ColorsStyle from './../../globals/Styles/ColorsStyle';
import ColorValue from './../../globals/Styles/colorValue';
import backgroundColor from './../../globals/Styles/BackgroundColor';
import CommonStyle from './../../globals/Styles/CommonStyle';
import PaddingStyles from './../../globals/Styles/PaddingStyles';
import MarginStyles from './../../globals/Styles/MarginStyles';
import {ScrollView} from 'react-native-gesture-handler';
import HeightWightStyle from './../../globals/Styles/HeightWightStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  getBasicInformation,
  patchBasicInfo,
} from './../../Redux/Action/ProfileAction';
import {store} from './../../Redux/Store/store';
import {useGellary} from '../../Redux/ImageUpload/ImageContext';
 
const BasicInfo = () => {
  const BasicInfo = useSelector(state => state.Profile.BasicInfo);
  const [image, setImage] = useState([{image: ''}]);
  const [input, setInput] = useState({
    address: '',
    city: '',
    country: '',
    first_name: '',
    last_name: '',
    phoneNumber: '',
    pincode: '',
    state: '',
    whatsappNumber: '',
  });

  const {
    address,
    city,
    country,
    first_name,
    last_name,
    phoneNumber,
    pincode,
    state,
    whatsappNumber,
  } = input;

  console.log(input);
  console.log(image);
  useEffect(() => {
    setInput(BasicInfo);
  }, []);

  const dispatch = useDispatch();
  const UpdateBasicInfo = async () => {
    const form = await new FormData();
    await form.append('first_name', first_name);
    await form.append('last_name', last_name);
    await form.append('phoneNumber', phoneNumber);
    await form.append('whatsappNumber', whatsappNumber);
    await form.append('address', address);
    await form.append('country', country);
    await form.append('state', state);
    await form.append('city', city);
    await form.append('pincode', pincode);

    await image?.uri && form.append('image', {
      uri: image.uri,
      name: image.fileName,
      type: image.type,
    });

    await dispatch(patchBasicInfo(form));
    await dispatch(getBasicInformation())
  };

  return (
    <ScrollView>
     
      <View>
        <Input
          value={input.first_name}
          style={[TextStyles.NexaBoldText14]}
          onChangeText={text => setInput({...input, first_name: text})}
          label="FIRST NAME"
          labelStyle={[
            TextStyles.NexaBoldText14,
            ColorsStyle.lightColor5,
            MarginStyles(5).marginVertical,
          ]}
          placeholder="Frist Name"
          placeholderTextColor={ColorValue.lightColor2}
          inputContainerStyle={[
            backgroundColor.lightbackgroundColor1,
            {borderRadius: 10, borderWidth: 1},
          ]}
          
        />

        <Input
          value={input.last_name}
          style={[TextStyles.NexaBoldText14]}
          onChangeText={text => setInput({...input, last_name: text})}
          label="LAST NAME"
          labelStyle={[
            TextStyles.NexaBoldText14,
            ColorsStyle.lightColor5,
            MarginStyles(5).marginBottom,
          ]}
          placeholder="Last Name"
          placeholderTextColor={ColorValue.lightColor2}
          inputContainerStyle={[
            backgroundColor.lightbackgroundColor1,
            {borderRadius: 10, borderWidth: 1},
          ]}
        />

        <Input
          disabled
          style={[TextStyles.NexaBoldText14]}
          value={store.getState().Auth.Login.employee_email}
          label="EMAIL"
          labelStyle={[
            TextStyles.NexaBoldText14,
            ColorsStyle.lightColor5,
            MarginStyles(5).marginBottom,
          ]}
          placeholder="Email"
          placeholderTextColor={ColorValue.lightColor2}
          inputContainerStyle={[
            backgroundColor.lightbackgroundColor1,
            {borderRadius: 10, borderWidth: 1},
          ]}
        />

        <Input
          value={input.phoneNumber}
          style={[TextStyles.NexaBoldText14]}
          onChangeText={text => setInput({...input, phoneNumber: text})}
          label="PHONE"
          labelStyle={[
            TextStyles.NexaBoldText14,
            ColorsStyle.lightColor5,
            MarginStyles(5).marginBottom,
          ]}
          placeholder="Phone"
          placeholderTextColor={ColorValue.lightColor2}
          inputContainerStyle={[
            backgroundColor.lightbackgroundColor1,
            {borderRadius: 10, borderWidth: 1},
          ]}
        />

        <Input
          value={input.whatsappNumber}
          style={[TextStyles.NexaBoldText14]}
          onChangeText={text => setInput({...input, whatsappNumber: text})}
          label="WHATSAPP NO"
          labelStyle={[
            TextStyles.NexaBoldText14,
            ColorsStyle.lightColor5,
            MarginStyles(5).marginBottom,
          ]}
          placeholder="WhatsApp No"
          placeholderTextColor={ColorValue.lightColor2}
          inputContainerStyle={[
            backgroundColor.lightbackgroundColor1,
            {borderRadius: 10, borderWidth: 1},
          ]}
        />

        <Input
          value={input.address}
          style={[TextStyles.NexaBoldText14]}
          onChangeText={text => setInput({...input, address: text})}
          label="ADDRESS"
          labelStyle={[
            TextStyles.NexaBoldText14,
            ColorsStyle.lightColor5,
            MarginStyles(5).marginBottom,
          ]}
          placeholder="Address"
          placeholderTextColor={ColorValue.lightColor2}
          inputContainerStyle={[
            backgroundColor.lightbackgroundColor1,
            {borderRadius: 10, borderWidth: 1},
          ]}
        />

        <View style={[CommonStyle.rowSpaceEvenly]}>
          <Input
            value={input.country}
            style={[TextStyles.NexaBoldText14]}
            onChangeText={text => setInput({...input, country: text})}
            label="COUNTRY"
            labelStyle={[
              TextStyles.NexaBoldText14,
              ColorsStyle.lightColor5,
              MarginStyles(5).marginBottom,
            ]}
            placeholder="Country"
            placeholderTextColor={ColorValue.lightColor2}
            inputContainerStyle={[
              backgroundColor.lightbackgroundColor1,
              {borderRadius: 10, borderWidth: 1},
            ]}
            containerStyle={[HeightWightStyle('50%').wightValue]}
          />

          <Input
            value={input.state}
            style={[TextStyles.NexaBoldText14]}
            onChangeText={text => setInput({...input, state: text})}
            label="STATE"
            labelStyle={[
              TextStyles.NexaBoldText14,
              ColorsStyle.lightColor5,
              MarginStyles(5).marginBottom,
            ]}
            placeholder="State"
            placeholderTextColor={ColorValue.lightColor2}
            inputContainerStyle={[
              backgroundColor.lightbackgroundColor1,
              {borderRadius: 10, borderWidth: 1},
            ]}
            containerStyle={[HeightWightStyle('50%').wightValue]}
          />
        </View>

        <View style={[CommonStyle.rowSpaceEvenly]}>
          <Input
            value={input.city}
            style={[TextStyles.NexaBoldText14]}
            onChangeText={text => setInput({...input, city: text})}
            label="CITY"
            labelStyle={[
              TextStyles.NexaBoldText14,
              ColorsStyle.lightColor5,
              MarginStyles(5).marginBottom,
            ]}
            placeholder="City"
            placeholderTextColor={ColorValue.lightColor2}
            inputContainerStyle={[
              backgroundColor.lightbackgroundColor1,
              {borderRadius: 10, borderWidth: 1},
            ]}
            containerStyle={[HeightWightStyle('50%').wightValue]}
          />

          <Input
            value={input.pincode}
            style={[TextStyles.NexaBoldText14]}
            onChangeText={text => setInput({...input, pincode: text})}
            label="PIN CODE"
            labelStyle={[
              TextStyles.NexaBoldText14,
              ColorsStyle.lightColor5,
              MarginStyles(5).marginBottom,
            ]}
            placeholder="Pin Code"
            placeholderTextColor={ColorValue.lightColor2}
            inputContainerStyle={[
              backgroundColor.lightbackgroundColor1,
              {borderRadius: 10, borderWidth: 1},
            ]}
            containerStyle={[HeightWightStyle('50%').wightValue]}
          />
        </View>

        <View style={[CommonStyle.rowCenter]}>
          <View
            style={[
              CommonStyle.rowFlexStart,
              HeightWightStyle('95%').wightValue,
              backgroundColor.lightbackgroundColor2,
              {borderRadius: 15},
            ]}>
            <Button
              onPress={() => useGellary(setImage)}
              containerStyle={[
                HeightWightStyle('30%').wightValue,

                {
                  borderRadius: 12,
                  marginHorizontal: 10,
                  paddingLeft: 0,
                  marginLeft: 0,
                },
              ]}
              buttonStyle={[backgroundColor.successbackgroundColorDark1]}
              title="CHOSE FILE"
            />
            <View style={[CommonStyle.center]}>
              <Text style={[TextStyles.NexaBoldText12]}>NO FILE CHOSEN</Text>
            </View>
          </View>
        </View>
        <View style={[CommonStyle.rowCenter]}>
          <Button
            onPress={() => UpdateBasicInfo()}
            buttonStyle={[
              backgroundColor.successbackgroundColorDark1,
              PaddingStyles(10).paddingHorizontal,
              MarginStyles(20).marginVertical,
            ]}
            title="UPDATE"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default BasicInfo;

const styles = StyleSheet.create({});
