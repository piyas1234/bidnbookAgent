import React, {useState} from 'react';

import DatePicker from 'react-native-date-picker';
import {Button} from 'react-native-elements';
import HeightWightStyle from '../../globals/Styles/HeightWightStyle';
import backgroundColor from './../../globals/Styles/BackgroundColor';
import ColorValue from './../../globals/Styles/colorValue';

const DatePickerComponnt = ({data}) => {
  const [open, setOpen] = useState(false);
  const {date, setDate} = data;

  return (
    <>
      <Button
        buttonStyle={[
          backgroundColor.mainBackgroundColor,
          HeightWightStyle('60%').wightValue,
          {
            margin: 4,
            borderRadius: 10,
          },
        ]}
        title=" sellect Expire date(m/d/y)"
        onPress={() => setOpen(true)}
      />
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default DatePickerComponnt;
