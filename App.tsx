import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import StackNavigator from './src/globals/route/StackNavigator';
import {useDispatch, useSelector} from 'react-redux';
import StackFlashMessageViewManager from 'react-native-stack-flash-message';
import {loadAction, loadRolesList} from './src/Redux/Action/AuthAction';
import { getSocialLinks, getBasicInformation } from './src/Redux/Action/ProfileAction';

const App = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(loadAction());
    await dispatch(loadRolesList());
    await dispatch(getSocialLinks());
    await dispatch(getBasicInformation());
  }, []);
  const data = useSelector((state: any) => console.log(state));
 

  return (
    <SafeAreaProvider>
      <StackFlashMessageViewManager
        ref={ref => StackFlashMessageViewManager.setRef(ref)}
      />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
