import * as React from 'react';
import styled from "@emotion/styled";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Controller } from 'react-hook-form';
const StyledTimePicker = styled(TimePicker)(() => ({
  ".MuiOutlinedInput-root": {
    width: "100%",
    height: "100%",
    width: "660px",
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
export default function Time({ element, register ,control}) {
  const { label, name, placeholder } = element;
  const [reqDate, setreqDate] = useState(new Date());
  return (
    <Controller
      name={name}
      defaultValue={reqDate}
      control={control}
      render={
        ({ field: { onChange, ...restField } }) =>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledTimePicker
              label={label}

              onChange={(event) => {
                onChange(event); setreqDate(event);
              }}
              renderInput={(params) =>
                <TextField {...params} />}
              {...restField}
            />
          </LocalizationProvider>}
    />
  );
}
