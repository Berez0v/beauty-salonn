import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';

const TextareaInput = ({ element, register }) => {
  const { name, placeholder } = element;

  const textareaStyles = {
    width: "100%",
    height: "138px",
    border: "none"
  };
const StyledTextField = styled(TextField)(()=>({
  ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root" : {
      borderRadius: "20px"
  }
}))


  return (
    <StyledTextField
      name={name}
      minRows={2}
      placeholder={placeholder}
      sx={textareaStyles}
      {...register(name, { ...element.register })}
    />
  );
};

export default TextareaInput;
