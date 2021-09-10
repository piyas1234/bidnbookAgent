const {
  default: AsyncStorage,
} = require('@react-native-async-storage/async-storage');

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const removeValue = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }

  console.log('Done.');
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }

  console.log('Done.');
};

const getAllKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    // read key error
  }

  console.log(keys);
  // example console.log result:
  // ['@MyApp_user', '@MyApp_key']
};

const getMultiple = async () => {
  let values;
  try {
    values = await AsyncStorage.multiGet(['@MyApp_user', '@MyApp_key']);
  } catch (e) {
    // read error
  }
  console.log(values);

  // example console.log output:
  // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
};

const multiSet = async () => {
  const firstPair = ['@MyApp_user', 'value_1'];
  const secondPair = ['@MyApp_key', 'value_2'];
  try {
    await AsyncStorage.multiSet([firstPair, secondPair]);
  } catch (e) {
    //save error
  }

  console.log('Done.');
};
