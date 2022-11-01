import * as React from 'react';
import styled from "@emotion/styled";

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
const StyledTimePicker = styled(TimePicker)(() => ({
    ".MuiOutlinedInput-root": {
      width: "100%",
      height: "100%",
      width : "330px",
      background: "#FAFAFA",
      borderRadius: "20px",
      outline: "none",
    },
    ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "label.Mui-focused": {
      color: "rgba(0, 0, 0, 0.96)",
    },
  }));
export default function Time({element,register}) {
  const [value, setValue] = React.useState(null);
const {label,name,placeholder} = element;
const params = {
    type: "time",
    name,
    placeholder,
    label,
    ...register(name, { ...element.register }),
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledTimePicker
        label={label}
        value={value}
        onChange={(event,newValue) => {
          setValue(newValue);
          console.log(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
