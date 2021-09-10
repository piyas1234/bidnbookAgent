import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Button, Image, Input} from 'react-native-elements';
import TextStyles from './../../globals/Styles/TextStyle';
import ColorsStyle from './../../globals/Styles/ColorsStyle';
import ColorValue from './../../globals/Styles/colorValue';
import backgroundColor from './../../globals/Styles/BackgroundColor';
import CommonStyle from './../../globals/Styles/CommonStyle';
import HeightWightStyle from './../../globals/Styles/HeightWightStyle';
import MarginStyles from './../../globals/Styles/MarginStyles';
import {ScrollView} from 'react-native-gesture-handler';
import DatePickerComponnt from './DatePickerComponent';
import {useDispatch} from 'react-redux';
import {errorFlash} from '../../globals/Messages';
import {useGellary} from '../../Redux/ImageUpload/ImageContext';
import {
  post_employee_identity_adhar_data,
  post_employee_identity_dl_data,
  post_employee_identity_pan_data,
  post_employee_identity_passport_data,
} from './../../Redux/Action/ProfileAction';
const Documentation = () => {
  const [input, setInput] = useState({});
  const [adarNo, setAdarNo] = useState('');
  const [adarImage, setAdarImage] = useState([null]);
  const [adarDate, setAdarDate] = useState(new Date());
  const [PanNo, setPanNo] = useState('');
  const [PanImage, setPanImage] = useState([null]);
  const [PanDate, setPanDate] = useState(new Date());
  const [PassportNo, setPassportNo] = useState('');
  const [passportImage, setPassportImage] = useState([null]);
  const [passportDate, setPassportDate] = useState(new Date());
  const [DrivingNo, setDrivingNo] = useState('');
  const [DrivingImage, setDrivingImage] = useState([null]);
  const [drivingDate, setDrivingDate] = useState(new Date());

  const dispatch = useDispatch();

  const postAdarCard = async () => {
    if (adarNo === '' && adarImage[0] === null) {
      return errorFlash('Error', 'please Fill alldd the fields!');
    }
    // {"employee_identity_id":,"doc_type":"2",
    // identity_number":"620467629695",
    // "file_doc":"doc_file","expiry_date":}
    try {
      const form = await new FormData();
      // await form.append('employee_identity_id')
      await form.append('identity_number', adarNo);
      await form.append('doc_type', '2');
      await form.append('expiry_date', adarDate);

      (await adarImage?.uri) &&
        form.append('file_doc', {
          uri: adarImage.uri,
          name: adarImage.fileName,
          type: adarImage.type,
        });

      await dispatch(post_employee_identity_adhar_data(form));
    } catch (err) {
      errorFlash('Error', 'something error');
    }
  };

  const postPanCard = async () => {
    if (PanNo === '' && PanImage[0] === null) {
      return errorFlash('Error', 'please Fill alldd the fields!');
    }
    // {"employee_identity_id":,"doc_type":"2",
    // identity_number":"620467629695",
    // "file_doc":"doc_file","expiry_date":}
    try {
      const form = await new FormData();
      // await form.append('employee_identity_id')
      await form.append('identity_number', PanNo);
      await form.append('doc_type', '1');
      await form.append('expiry_date', PanDate);

      (await PanImage?.uri) &&
        form.append('file_doc', {
          uri: PanImage.uri,
          name: PanImage.fileName,
          type: PanImage.type,
        });

      await dispatch(post_employee_identity_pan_data(form));
    } catch (err) {
      errorFlash('Error', 'something error');
    }
  };

  const postPassportCard = async () => {
    if (PassportNo === '' && passportImage[0] === null) {
      return errorFlash('Error', 'please Fill alldd the fields!');
    }
    // {"employee_identity_id":,"doc_type":"2",
    // identity_number":"620467629695",
    // "file_doc":"doc_file","expiry_date":}
    try {
      const form = await new FormData();
      // await form.append('employee_identity_id')
      await form.append('identity_number', PassportNo);
      await form.append('doc_type', '4');
      await form.append('expiry_date', passportDate);

      (await passportImage?.uri) &&
        form.append('file_doc', {
          uri: passportImage.uri,
          name: passportImage.fileName,
          type: passportImage.type,
        });

      await dispatch(post_employee_identity_passport_data(form));
    } catch (err) {
      errorFlash('Error', 'something error');
    }
  };

  const postDrivingCard = async () => {
    if (DrivingNo === '' && DrivingImage[0] === null) {
      return errorFlash('Error', 'please Fill alldd the fields!');
    }
    // {"employee_identity_id":,"doc_type":"2",
    // identity_number":"620467629695",
    // "file_doc":"doc_file","expiry_date":}
    try {
      const form = await new FormData();
      // await form.append('employee_identity_id')
      await form.append('identity_number', DrivingNo);
      await form.append('doc_type', '3');
      await form.append('expiry_date', drivingDate);

      (await DrivingImage?.uri) &&
        form.append('file_doc', {
          uri: DrivingImage.uri,
          name: DrivingImage.fileName,
          type: DrivingImage.type,
        });

      await dispatch(post_employee_identity_dl_data(form));
    } catch (err) {
      errorFlash('Error', 'something error');
    }
  };

  return (
    <ScrollView>
      <View>
        <Input
          onChangeText={text => setAdarNo(text)}
          label="AADHAR CARD"
          labelStyle={[TextStyles.NexaBoldText14, ColorsStyle.lightColor5]}
          placeholder="Aadhar no"
          placeholderTextColor={ColorValue.lightColor4}
          inputContainerStyle={[
            backgroundColor.lightbackgroundColor1,
            {borderRadius: 10, borderWidth: 1},
          ]}
        />

        <DatePickerComponnt data={{date: adarDate, setDate: setAdarDate}} />

        <Text
          style={[
            MarginStyles(10).marginHorizontal,
            TextStyles.NexaBoldText14,
            ColorsStyle.lightColor4,
          ]}>
          Upload Aadhar Card
        </Text>

        {adarImage[0] !== null ? (
          <View
            style={[
              backgroundColor.WhitebackgroundColor,
              {elevation: 5, margin: 20},
            ]}>
            <Pressable onPress={() => setAdarImage([null])}>
              <Text
                style={{
                  textAlign: 'right',
                  paddingHorizontal: 10,
                  fontSize: 20,
                }}>
                X
              </Text>
            </Pressable>
            <Image
              style={{width: '100%', height: 200, resizeMode: 'contain'}}
              source={{uri: adarImage.uri}}
            />
          </View>
        ) : (
          <View style={[CommonStyle.rowCenter]}>
            <View
              style={[
                CommonStyle.rowFlexStart,
                HeightWightStyle('95%').wightValue,

                {borderRadius: 15},
              ]}>
              <Button
                onPress={() => useGellary(setAdarImage)}
                containerStyle={[
                  HeightWightStyle('30%').wightValue,

                  {
                    borderRadius: 12,
                    marginHorizontal: 10,
                    paddingLeft: 0,
                    marginLeft: 0,
                  },
                ]}
                buttonStyle={[backgroundColor.mainBackgroundColor]}
                title="CHOSE FILE"
              />
              <View style={[CommonStyle.center]}>
                <Text style={[TextStyles.NexaBoldText12]}>NO FILE CHOSEN</Text>
              </View>
            </View>
          </View>
        )}

        <View>
          <Button
            onPress={() => postAdarCard()}
            buttonStyle={[
              backgroundColor.lightbackgroundColor2,
              MarginStyles(10).marginall,
              {borderRadius: 10},
            ]}
            title="UPDATE"
            titleStyle={ColorsStyle.lightColor7}
          />
        </View>
      </View>

      <View>
        <Input
          onChangeText={text => setPanNo(text)}
          label="PAN CARD"
          labelStyle={[TextStyles.NexaBoldText14, ColorsStyle.lightColor5]}
          placeholder="Aadhar no"
          placeholderTextColor={ColorValue.lightColor4}
          inputContainerStyle={[
            backgroundColor.lightbackgroundColor1,
            {borderRadius: 10, borderWidth: 1},
          ]}
        />

        <DatePickerComponnt data={{date: PanDate, setDate: setPanDate}} />

        <Text
          style={[
            MarginStyles(10).marginHorizontal,
            TextStyles.NexaBoldText14,
            ColorsStyle.lightColor4,
          ]}>
          Upload PAN Card
        </Text>
        {PanImage[0] !== null ? (
          <View
            style={[
              backgroundColor.WhitebackgroundColor,
              {elevation: 5, margin: 20},
            ]}>
            <Pressable onPress={() => setPanImage([null])}>
              <Text
                style={{
                  textAlign: 'right',
                  paddingHorizontal: 10,
                  fontSize: 20,
                }}>
                X
              </Text>
            </Pressable>
            <Image
              style={{width: '100%', height: 200, resizeMode: 'contain'}}
              source={{uri: PanImage.uri}}
            />
          </View>
        ) : (
          <View style={[CommonStyle.rowCenter]}>
            <View
              style={[
                CommonStyle.rowFlexStart,
                HeightWightStyle('95%').wightValue,

                {borderRadius: 15},
              ]}>
              <Button
                onPress={() => useGellary(setPanImage)}
                containerStyle={[
                  HeightWightStyle('30%').wightValue,

                  {
                    borderRadius: 12,
                    marginHorizontal: 10,
                    paddingLeft: 0,
                    marginLeft: 0,
                  },
                ]}
                buttonStyle={[backgroundColor.mainBackgroundColor]}
                title="CHOSE FILE"
              />
              <View style={[CommonStyle.center]}>
                <Text style={[TextStyles.NexaBoldText12]}>NO FILE CHOSEN</Text>
              </View>
            </View>
          </View>
        )}
        <View>
          <Button
          onPress={()=>postPanCard()}
            buttonStyle={[
              backgroundColor.lightbackgroundColor2,
              MarginStyles(10).marginall,
              {borderRadius: 10},
            ]}
            title="UPDATE"
            titleStyle={ColorsStyle.lightColor7}
          />
        </View>
      </View>

      <View>
        <Input
          onChangeText={text => setPassportNo(text)}
          label="PASSPORT"
          labelStyle={[TextStyles.NexaBoldText14, ColorsStyle.lightColor5]}
          placeholder="Passport No"
          placeholderTextColor={ColorValue.lightColor4}
          inputContainerStyle={[
            backgroundColor.lightbackgroundColor1,
            {borderRadius: 10, borderWidth: 1},
          ]}
        />

        <DatePickerComponnt
          data={{date: passportDate, setDate: setPassportDate}}
        />

        <View>
          <Text
            style={[
              MarginStyles(10).marginHorizontal,
              TextStyles.NexaBoldText14,
              ColorsStyle.lightColor4,
            ]}>
            Upload Passport
          </Text>
        </View>

        {passportImage[0] !== null ? (
          <View
            style={[
              backgroundColor.WhitebackgroundColor,
              {elevation: 5, margin: 20},
            ]}>
            <Pressable onPress={() => setPassportImage([null])}>
              <Text
                style={{
                  textAlign: 'right',
                  paddingHorizontal: 10,
                  fontSize: 20,
                }}>
                X
              </Text>
            </Pressable>
            <Image
              style={{width: '100%', height: 200, resizeMode: 'contain'}}
              source={{uri: passportImage.uri}}
            />
          </View>
        ) : (
          <View style={[CommonStyle.rowCenter]}>
            <View
              style={[
                CommonStyle.rowFlexStart,
                HeightWightStyle('95%').wightValue,

                {borderRadius: 15},
              ]}>
              <Button
                onPress={() => useGellary(setPassportImage)}
                containerStyle={[
                  HeightWightStyle('30%').wightValue,

                  {
                    borderRadius: 12,
                    marginHorizontal: 10,
                    paddingLeft: 0,
                    marginLeft: 0,
                  },
                ]}
                buttonStyle={[backgroundColor.mainBackgroundColor]}
                title="CHOSE FILE"
              />
              <View style={[CommonStyle.center]}>
                <Text style={[TextStyles.NexaBoldText12]}>NO FILE CHOSEN</Text>
              </View>
            </View>
          </View>
        )}
        <View>
          <Button
            onPress={()=>postPassportCard()}
            buttonStyle={[
              backgroundColor.lightbackgroundColor2,
              MarginStyles(10).marginall,
              {borderRadius: 10},
            ]}
            title="UPDATE"
            titleStyle={ColorsStyle.lightColor7}
          />
        </View>
      </View>

      <View>
        <Input
          onChangeText={text => setDrivingNo(text)}
          label="DRIVING LICENSE"
          labelStyle={[TextStyles.NexaBoldText14, ColorsStyle.lightColor5]}
          placeholder="Driving License No"
          placeholderTextColor={ColorValue.lightColor4}
          inputContainerStyle={[
            backgroundColor.lightbackgroundColor1,
            {borderRadius: 10, borderWidth: 1},
          ]}
        />

        <DatePickerComponnt
          data={{date: passportDate, setDate: setPassportDate}}
        />

        <View>
          <Text
            style={[
              MarginStyles(10).marginHorizontal,
              TextStyles.NexaBoldText14,
              ColorsStyle.lightColor4,
            ]}>
            Upload Driving license
          </Text>
        </View>
        {DrivingImage[0] !== null ? (
          <View
            style={[
              backgroundColor.WhitebackgroundColor,
              {elevation: 5, margin: 20},
            ]}>
            <Pressable onPress={() => setDrivingImage([null])}>
              <Text
                style={{
                  textAlign: 'right',
                  paddingHorizontal: 10,
                  fontSize: 20,
                }}>
                X
              </Text>
            </Pressable>
            <Image
              style={{width: '100%', height: 200, resizeMode: 'contain'}}
              source={{uri: DrivingImage.uri}}
            />
          </View>
        ) : (
          <View style={[CommonStyle.rowCenter]}>
            <View
              style={[
                CommonStyle.rowFlexStart,
                HeightWightStyle('95%').wightValue,

                {borderRadius: 15},
              ]}>
              <Button
                onPress={() => useGellary(setDrivingImage)}
                containerStyle={[
                  HeightWightStyle('30%').wightValue,

                  {
                    borderRadius: 12,
                    marginHorizontal: 10,
                    paddingLeft: 0,
                    marginLeft: 0,
                  },
                ]}
                buttonStyle={[backgroundColor.mainBackgroundColor]}
                title="CHOSE FILE"
              />
              <View style={[CommonStyle.center]}>
                <Text style={[TextStyles.NexaBoldText12]}>NO FILE CHOSEN</Text>
              </View>
            </View>
          </View>
        )}
        <View>
          <Button
            onPress={()=>postDrivingCard()}
            buttonStyle={[
              backgroundColor.lightbackgroundColor2,
              MarginStyles(10).marginall,
              {borderRadius: 10},
            ]}
            title="UPDATE"
            titleStyle={ColorsStyle.lightColor7}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Documentation;

const styles = StyleSheet.create({});
