
import StackFlashMessageViewManager, { Options, } from 'react-native-stack-flash-message';
import backgroundColor from './../Styles/BackgroundColor';

 
  const flash = (options: Options) => {
    StackFlashMessageViewManager.show(options);
  };


 export const successFlash = (title:any,message:any) => {
    flash({
      type: 'success',
      title: title,
      contents: message,
      duration: Math.random() * 2000,
    });
  };

  export  const infoFlash = (title:any,message:any) => {
    flash({
      type: 'info',
      title: title,
      contents: message,
      duration: Math.random() * 2000,
    });
  };
  export  const errorFlash = (title:any,message:any) => {
    flash({
      type: 'error',
      title: title,
      contents: message,
      duration: Math.random() * 2000,
    });
  };

   

 