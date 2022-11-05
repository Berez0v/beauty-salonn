import React from "react";
import EmailInput from "./inputs/EmailInput";
import InputText from "./inputs/InputText";
import NumberInput from "./inputs/NumberInput";
import CurrencyInput from "./inputs/CurrencyInput";
import SelectInput from "./inputs/SelectInput";
import TextareaInput from "./inputs/Textarea";
import DateInput from "./inputs/DateInput";
import Time from "./inputs/Time";
const FormInputs = ({ element, register, control }) => {
  let InputElement;
  switch (element.type) {
    case "text":
      InputElement = InputText;
      break;
    case "time":
      InputElement = Time;
      break;
    case "currency":
      InputElement = CurrencyInput;
      break;
    case "email":
      InputElement = EmailInput;
      break;
    case "select":
      InputElement = SelectInput;
      break;
    case "number":
      InputElement = NumberInput;
      break;
    case "textarea":
      InputElement = TextareaInput;
      break;
    case "date":
      InputElement = DateInput;
      break;
    default:
      InputElement = InputText;
  }
  return (
    <InputElement element={element} register={register} control={control} />
  );
};

export default FormInputs;
