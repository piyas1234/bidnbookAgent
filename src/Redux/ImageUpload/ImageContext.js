import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const useCamera = setImage => {
    launchCamera(
    {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 200,
      cropping: true,
    },
    res => {
      setImage(res.assets);
    },
  );
};

export const useGellary = setImage => {
    launchImageLibrary(
    {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 200,
      cropping: true,
      
    },
    res => {
      setImage(res.assets[0]);
      
    },

    
     
  )

  
};
