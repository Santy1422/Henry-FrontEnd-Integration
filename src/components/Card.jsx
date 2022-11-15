import styled from "styled-components"
import { Link } from "react-router-dom"
import * as actions from "../redux/actions"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useEffect } from "react"

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

export default function Card(props) {
const estadoglobal = useSelector(state => state.myFavorites)
const dispatch = useDispatch()
const aux = () =>{
props.onClose(props.name)

}
const [isFav, setIsFav] = useState(false)

const handleFavorite = () =>{
if(isFav === true){

   setIsFav(false)   
   dispatch(actions.deletes(props.id))
} else {
   setIsFav(true)   
   dispatch(actions.agregar(props))
}
}

useEffect(() => {
   estadoglobal.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [props.estadoglobal]);

   return (
      <DivCard className="asdf">
      <Botonse onClick={aux}>X</Botonse>
      <Link to={`/detail/${props.detailId}`} >  <H2styled key={props.key}>{props.name}</H2styled></Link>
      <H2styled>{props.species}</H2styled>
      <H2styled>{props.gender}</H2styled>
      <Imgcard src={props.image} alt="" />
      {isFav ? (
					<button onClick={handleFavorite}>❤️</button>
				) : (
					<button onClick={handleFavorite}>🤍</button>
				)}

   </DivCard>
);
   }
