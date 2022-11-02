import FormInputs from "../forms/FormInputs";
import React from 'react'
import { useForm } from 'react-hook-form'
import formModel from '../../static/formModel'
import './steps.scss'
import Button from '@mui/material/Button';
import styled from "@emotion/styled";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { OrderTitle } from "../OrderTitle";
const StyledButton = styled(Button)(() => ({
    color: "#000000",
    borderRadius: "30px",
    backgroundColor: "#FFFFFF",
    padding: "10px 15%",
    gap: "12.5px",
    border: "none",
    marginTop : "24px",
    textTransform: "capitalize",
    left: "50%",
    transform: "translate(-50%)",
    ":hover": {
      backgroundColor: "#FFFFFF",
    },
    "& svg": {
        width:"20px",
        height:"20px",
      position: "relative",
      top: 0,
      left: 0,
      height: "17px",
      width: "17px",
    },
  }));
  
export const First = () => {
    const {
        register,
        handleSubmit,
        reset,
        control
    } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange",
        defaultValues: {

        }
    });

    const onSubmit = (fields) => {
        console.log(fields);
    }
    return (
        <>
        <OrderTitle id={1} title = "Select Service" />
        <div className='formWrapper'>
            <form
                onSubmit={handleSubmit(onSubmit, (errors, e) => {
                    console.log('Это ошибка')
                    console.log(errors, e)
                })}
            >
                {formModel.map(element => (
                    <FormInputs
                        key={element.name}
                        element={element}
                        register={register}
                        control={control}
                    />
                ))}
                
                <StyledButton type="submit" variant="outlined">Next Step<ArrowForwardIosRoundedIcon/></StyledButton>
            </form>
        </div>
        </>
    )
}

