import FormInputs from "../forms/FormInputs";
import React from 'react'
import { useForm } from 'react-hook-form'
import formModel from '../../static/formModel'
import './steps.scss'
import Button from '@mui/material/Button';
import styled from "@emotion/styled";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { OrderTitle } from "../OrderTitle";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import { serviceCategoryOptions } from "../../static/formModel";
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
    transform: "translate(-50%)",
    ":hover": {
        backgroundColor: "#FFFFFF",
    },
    "& svg": {
        width: "20px",
        height: "20px",
        position: "relative",
        top: 0,
        left: 0,
        height: "17px",
        width: "17px",
    },
}));

export const First = () => {
    const init = JSON.parse(localStorage.getItem('first'));
    // console.log(init);
    // console.log(serviceCategoryOptions.find(category => category.id === init.serviceCategory));

    
    const {
        register,
        handleSubmit,
        reset,
        control
    } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange",
        defaultValues: {
            // Твой автокомплит должен сохранять в localStorage id а потом его брать и по нему находить обьект опции
          serviceCategory : init ? serviceCategoryOptions.find(category => category.id === init.serviceCategory) : "",
          service : init ? init.service : "",
          masters : init ? init.masters : "",
          date : init ? init.date : "",
          timeFrom : init ? init.timeFrom : "",
          timeTo : init ? init.timeTo : "",
          price : init ? init.price : "" 
        }
    });
    const navigate = useNavigate();
    const onSubmit = (fields) => {
        const validatedFields = {...fields, serviceCategory: fields.serviceCategory.id}
        console.log(validatedFields);
        localStorage.setItem('first',JSON.stringify(validatedFields));
        navigate("/orders/step/2");
    }
    return (
        <>
            <OrderTitle id={1} title="Select Service" />
            <div className='formWrapper'>
                <form
                    onSubmit={handleSubmit(onSubmit, (errors, e) => {
                        console.log('Это ошибка')
                        console.log(errors, e)
                    })}
                >
                    <Stack direction="column" spacing={3}>
                        {formModel.map(element => (

                            <FormInputs
                                key={element.name}
                                element={element}
                                register={register}
                                control={control}
                            />
                        ))}

                    </Stack>
                    <StyledButton type="submit" variant="outlined">Next Step<ArrowForwardIosRoundedIcon /></StyledButton>
                </form>
            </div>
        </>
    )
}

