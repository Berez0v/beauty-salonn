import * as React from 'react';
import styled from "@emotion/styled";
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
const StyledDatePicker = styled(MuiDatePicker)(() => ({
  ".MuiOutlinedInput-root": {
    width: "100%",
    height: "100%",
    background: "#FAFAFA",
    borderRadius: "20px",
    outline: "none",
    width: "660px"
  },
  ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "label.Mui-focused": {
    color: "rgba(0, 0, 0, 0.96)",
  },
}));
export default function DatePicker({ element, register, control }) {
  const { label, name, placeholder } = element;
  return (

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        control={control}
        render={({ field: { onChange } }) => (
          <DatePicker
            onChange={
              (event, value) => {
              console.log(value)
              onChange(value)
              }}/>
        )}
        />
    </LocalizationProvider>
  );
}