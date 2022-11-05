import React from 'react'
import './steps.scss'
import Button from '@mui/material/Button';
import styled from "@emotion/styled";
import { OrderTitle } from "../OrderTitle";
import { useNavigate } from "react-router-dom";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
const StyledList = styled(List)(()=>({
    ".css-1wvyk48-MuiList-root" :{
        backgroundColor : "black!important",
        // border :"2px solid black"
    }

}))
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
    },
}));

export const Finish = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/orders/step/2");
    }
    const service = JSON.parse(localStorage.getItem('first'));
    const client = JSON.parse(localStorage.getItem('second'));
    console.log(service);
    return (
        <>
            <OrderTitle id={3} title="Finish Order" />
            <div className='formWrapper'>
                <StyledList sx={{ width: '100%', maxWidth: 660, bgcolor: 'background.paper' }}>
                    
                    <ListItem disableGutters secondaryAction={<div>{service.service}</div>}>
                        <ListItemText primary={`Service`} />
                    </ListItem>
                    
                    <ListItem disableGutters secondaryAction={<div>{service.masters}</div>}>
                        <ListItemText primary={`Masters`} />
                    </ListItem>
                    
                    <ListItem disableGutters secondaryAction={<div>{service.date}</div>}>
                        <ListItemText primary={`Date/Time`} />
                    </ListItem>
                    
                    <ListItem disableGutters secondaryAction={<div>{service.price} {service.currency}</div>}>
                        <ListItemText primary={`Price`} />
                    </ListItem>
                    
                    <ListItem disableGutters secondaryAction={<div>{client.name}</div>}>
                        <ListItemText primary={`Client name`} />
                    </ListItem>
                    
                    <ListItem disableGutters secondaryAction={<div>+{client.phone}</div>}>
                        <ListItemText primary={`Client phone`} />
                    </ListItem>
                    
                    <ListItem disableGutters secondaryAction={<div>{client.email}</div>}>
                        <ListItemText primary={`Client email`} />
                    </ListItem>

                    <ListItem disableGutters secondaryAction={<div>{client.comments}</div>}>
                        <ListItemText primary={`Comments`} />
                    </ListItem>
                </StyledList>
                <StyledBackButton variant="outlined" onClick={handleClick}>Back</StyledBackButton>
                <StyledButton type="submit" variant="outlined">Create Order</StyledButton>

            </div>
        </>
    )
}

