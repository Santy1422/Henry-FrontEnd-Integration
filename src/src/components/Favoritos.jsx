import React from "react";
import { useSelector } from "react-redux"
import styled from "styled-components"

export const Favoritos = (props) =>{

    const DivCard = styled.div`
    margin-top: 3%;
    background-color: #c2c2cccf;
    border-radius: 10px;
    border: solid 2px;
    &:hover{
       background-color: #9b9badcf;
    border-radius: 10px;
    border: solid 2px;
    }
    
    `
    const Botonse = styled.button`
    color:white;
    background-color: red;
    border-radius: 10%;
    &:hover{
    color:white;
    background-color: #b50404;
    border-radius: 10%;
    }
    `
    const Imgcard = styled.img`
    display: flex;
    justify-content: center;
    border-radius: 30%;
    border: solid 1px;
    
    &:hover{
       display: flex;
    justify-content: center;
    border-radius: 30%;
    border: solid 1px;
       -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -o-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1)
    }
    `
    const H2styled = styled.h3`
    display: flex;
    justify-content: center;
    `
    const Blikes = styled.button`
    &:hover{
    
    -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -o-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1)
    }
    `    



const estadoglobal = useSelector(state => state.myFavorites)
   return(
    <DivCard> 
        {estadoglobal.map((element) => 
        (<><H2styled>{element.name}</H2styled>
        <H2styled>{element.gender}</H2styled>
        <Imgcard src={element.image}/>
        <p></p>
        </>)
        )}
    </DivCard>
   )

}
