import React from "react"
import styled from "styled-components"

export interface TalButtonProps{
    texto?:string
    tipo?:'primario'|'secundario'
    onClick?:()=>void
}

const CustomButton = styled.button<TalButtonProps>`
    background-color:${(props:TalButtonProps)=> props.tipo === 'primario' ? "blue" : "purple"  };
    color:${(props:TalButtonProps)=> props.tipo ===  'primario' ? "white" : "black"  };
    padding: 1rem 1.5rem;
    border: 2px solid indigo;
    transition:0.3s ease;
    cursor: pointer;
    font-size:1.2em;   
    
`

export const TalButton = ({texto,onClick,tipo = 'primario'} : TalButtonProps) =>{
    return(
    <CustomButton onClick={onClick} tipo={tipo}>{texto} </CustomButton>
)
}