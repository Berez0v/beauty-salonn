import { Autocomplete, styled, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ClearIcon from "@mui/icons-material/Clear";

const StyledAutcomplete = styled(Autocomplete)(() => ({
  ".MuiOutlinedInput-root": {
    width: "100%",
    height: "100%",
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
  ".MuiAutocomplete-inputRoot": {
    width: "100%",
    
    height: "100%",
    background: "#FAFAFA",
    borderRadius: "20px",
    outline: "none",
  },
  ".MuiAutocomplete-popupIndicator": {
    position: "absolute",
    right: "0px",
    top: "-5px"
  },
  ".MuiAutocomplete-clearIndicator": {
    position: "absolute",
    right: "40px",
  },
  ".icon": {
    fontSize: "32px",
    color: "rgba(0, 0, 0, 0.96)",
  },
}));

const SelectInput = ({ element, register,control}) => {
  const { label, name, options, placeholder } = element;
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <StyledAutcomplete
            name={name}
            forcePopupIcon={true}
            popupIcon={<KeyboardArrowDownRoundedIcon className="icon" />}
            {...register(name, { ...element.register })}
            options={options}
            onChange={(_, data) => {
              return onChange(data?.id);
            }}
            clearIcon={<ClearIcon fontSize="small" />}
            isOptionEqualToValue={(option, value) =>
              option.id === value.id
            }
            renderInput={(params) => (
              <TextField {...params} label={label} placeholder={placeholder} />
            )}
          />
        )}
      />
    </>
  );
};

export default SelectInput;
