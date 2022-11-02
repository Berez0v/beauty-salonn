import FormInputs from "../forms/FormInputs";
import React from 'react'
import { useForm } from 'react-hook-form'
import {SecondForm} from '../../static/secondForm'
import './steps.scss'
import Button from '@mui/material/Button';
// import styled from "@emotion/styled";

export const Second = () => {
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
        console.log("grhgr");
        console.log(fields);
    }
    return (
        <div className='formWrapper'>
            <form
                onSubmit={handleSubmit(onSubmit, (errors, e) => {
                    console.log('Это ошибка')
                    console.log(errors, e)
                })}
            >
                {SecondForm.map(element => (
                    <FormInputs
                        key={element.name}
                        element={element}
                        register={register}
                        control={control}
                    />
                ))}
                
                <Button type="submit" variant="outlined">Next Step</Button>
            </form>
        </div>
    )
}
