import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import TextStyles from './../../globals/Styles/TextStyle';
import ColorsStyle from './../../globals/Styles/ColorsStyle';
import ColorValue from './../../globals/Styles/colorValue';
import backgroundColor from './../../globals/Styles/BackgroundColor';
import CommonStyle from './../../globals/Styles/CommonStyle';
import PaddingStyles from './../../globals/Styles/PaddingStyles';
import {useDispatch, useSelector} from 'react-redux';
import {patchSocialLinks} from '../../Redux/Action/ProfileAction';
import { getSocialLinks } from './../../Redux/Action/ProfileAction';

const SocialLinks = () => {
  const SocialLinks = useSelector(state => state.Profile.SocialLinks);
  const {Twitter_url, facebook_url, instagram_url, linkedin_url, youtube_url} =
    SocialLinks;
  const [input, setInput] = useState({
    Twitter_url,
    facebook_url,
    instagram_url,
    linkedin_url,
    youtube_url,
  });

  useEffect(() => {
    setInput(SocialLinks);
  }, []);
  const dispatch = useDispatch();
  const UpdateProfileRequest = async () => {
    await dispatch(patchSocialLinks(input));
    await dispatch(getSocialLinks());
    
  };

  return (
    <View>
      <View>
        <Input
          value={input.facebook_url}
          onChangeText={text => setInput({...input, facebook_url: text})}
          label="Faccebook URL"
          labelStyle={[TextStyles.NexaBoldText14, ColorsStyle.lightColor5]}
          placeholder="Facebook URL"
          placeholderTextColor={ColorValue.WhiteColor}
          inputContainerStyle={[
            backgroundColor.lightbackgroundColor1,
            {borderRadius: 10, borderWidth: 1},
          ]}
        />

        <Input
          value={input.instagram_url}
          onChangeText={text => setInput({...input, instagram_url: text})}
          label="Instagram URL"
          labelStyle={[TextStyles.NexaBoldText14, ColorsStyle.lightColor5]}
          placeholder="Instagram URL"
          placeholderTextColor={ColorValue.WhiteColor}
          inputContainerStyle={[
            backgroundColor.lightbackgroundColor1,
            {borderRadius: 10, borderWidth: 1},
          ]}
        />
        <Input
          value={input.Twitter_url}
          onChangeText={text => setInput({...input, Twitter_url: text})}
          label="Twitter"
          labelStyle={[TextStyles.NexaBoldText14, ColorsStyle.lightColor5]}
          placeholder="Twitter"
          placeholderTextColor={ColorValue.WhiteColor}
          inputContainerStyle={[
            backgroundColor.lightbackgroundColor1,
            {borderRadius: 10, borderWidth: 1},
          ]}
        />
        <Input
          value={input.linkedin_url}
          onChangeText={text => setInput({...input, linkedin_url: text})}
          label="Linkdin"
          labelStyle={[TextStyles.NexaBoldText14, ColorsStyle.lightColor5]}
          placeholder="Linkdin"
          placeholderTextColor={ColorValue.WhiteColor}
          inputContainerStyle={[
            backgroundColor.lightbackgroundColor1,
            {borderRadius: 10, borderWidth: 1},
          ]}
        />
        <Input
          value={input.youtube_url}
          onChangeText={text => setInput({...input, youtube_url: text})}
          label="Youtube"
          labelStyle={[TextStyles.NexaBoldText14, ColorsStyle.lightColor5]}
          placeholder="Youtube"
          placeholderTextColor={ColorValue.WhiteColor}
          inputContainerStyle={[
            backgroundColor.lightbackgroundColor1,
            {borderRadius: 10, borderWidth: 1},
          ]}
        />

        <View style={[CommonStyle.rowCenter]}>
          <Button
            onPress={() => UpdateProfileRequest()}
            buttonStyle={[
              backgroundColor.successbackgroundColorDark1,
              PaddingStyles(10).paddingHorizontal,
            ]}
            title="UPDATE"
          />
        </View>
      </View>
    </View>
  );
};

export default SocialLinks;

const styles = StyleSheet.create({});
