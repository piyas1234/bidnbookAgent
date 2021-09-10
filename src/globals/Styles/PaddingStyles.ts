import {StyleSheet} from 'react-native';

const PaddingStyles = (value: any) =>
  StyleSheet.create({
    Paddingall: {
      margin: value,
    },
    paddingHorizontal: {
      paddingHorizontal: value,
    },
    paddingVertical: {
      paddingVertical: value,
    },
    paddingLeft: {
      paddingLeft: value,
    },
    paddingRight: {
      paddingRight: value,
    },
    paddingTop: {
      paddingTop: value,
    },
    paddingBottom: {
      paddingBottom: value,
    },
  });

export default PaddingStyles;
