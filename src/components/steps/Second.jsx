import FormInputs from "../forms/FormInputs";
import React from 'react'
import { useForm } from 'react-hook-form'
import { SecondForm } from '../../static/secondForm'
import './steps.scss'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Button from '@mui/material/Button';
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { OrderTitle } from "../OrderTitle";
import Stack from '@mui/material/Stack';
const StyledButton = styled(Button)(() => ({
    color: "#000000",
    borderRadius: "30px",
    backgroundColor: "#FFFFFF",
    padding: "10px 15%",
    gap: "12.5px",
    border: "none",
    marginTop: "24px",
    textTransform: "capitalize",
    left: "50%",
    transform: "translate(-80%)",
    ":hover": {
        backgroundColor: "#FFFFFF",
    },
    "& svg": {
        width: "20px",
        height: "20px",
        position: "relative",
        top: 0,
        left: 0,
        // height: "17px",
        // width: "17px",
    },
}));
const StyledBackButton = styled(Button)(() => ({
    color: "#000000",
    borderRadius: "30px",
    backgroundColor: "#FFFFFF",
    padding: "10px 15%",
    gap: "12.5px",
    border: "none",
    marginTop: "24px",
    textTransform: "capitalize",
    left: "50%",
    position: "relative",
    transform: "translate(-130%)",
    width: "50px",
    ":hover": {
        backgroundColor: "#FFFFFF",
        border: "none"
    },

}));
export const Second = () => {
    const init = JSON.parse(localStorage.getItem('second'));
    const {
        register,
        handleSubmit,
        control
    } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange",
        defaultValues: {
            name: init ? init.name : "",
            phone: init ? init.phone : "",
            email: init ? init.email : "",
            comments: init ? init.comments : ""
        }
    });
    const navigate = useNavigate();
    const handleClick = () => {
        console.log("dfsd");
        navigate("/orders/step/1");
    }
    const onSubmit = (fields) => {
        console.log(fields);
        localStorage.setItem('second', JSON.stringify(fields));
        navigate("/orders/step/3");
    }
    return (
        <>
            <OrderTitle id={2} title="Client Information" />
            <div className='formWrapper'>
                <form
                    onSubmit={handleSubmit(onSubmit, (errors, e) => {
                        console.log('Это ошибка')
                        console.log(errors, e)
                    })}
                >
                    <Stack direction="column" spacing={3}>

                        {SecondForm.map(element => (
                            <FormInputs
                                key={element.name}
                                element={element}
                                register={register}
                                control={control}
                            />
                        ))}
                    </Stack>
                    <StyledBackButton variant="outlined" onClick={handleClick}>Back</StyledBackButton>
                    <StyledButton type="submit" variant="outlined">Next Step<ArrowForwardIosRoundedIcon /></StyledButton>
                </form>
            </div>
        </>
    )
}
