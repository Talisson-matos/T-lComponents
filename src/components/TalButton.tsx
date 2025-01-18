import React from "react"
import styled from "styled-components"

const CustomButton = styled.button`
    background-color:indigo;
    color:white;
    padding: 1rem 1.5rem;
    border: 2px solid indigo;
    transition:0.3s ease;
    cursor: pointer;
    font-size:1.2em;
   
    &:hover{
        background-color:transparent;
        color: indigo;
        border: 2px solid indigo;

    }
`

export const TalButton = () =>{
    return(<CustomButton>Clicar</CustomButton>)
}