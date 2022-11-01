// import {Textarea} from "@mui/joy/Textarea";
import TextField from '@mui/material/TextField';
const TextareaInput = ({ element, register }) => {
  const { name, placeholder } = element;

  const textareaStyles = {
    width: "100%",
    height: "138px",
  };

  return (
    <TextField
      name={name}
      minRows={2}
      placeholder={placeholder}
      sx={textareaStyles}
      {...register(name, { ...element.register })}
    />
  );
};

export default TextareaInput;
