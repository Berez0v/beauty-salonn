import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const StyledTextField = styled(TextField)(() => ({
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

const InputText = ({ element, register }) => {
  const { label, name, placeholder } = element;

  const params = {
    type: "text",
    name,
    placeholder,
    label,
    ...register(name, { ...element.register }),
  };

  return <StyledTextField {...params} />;
};

export default InputText;
