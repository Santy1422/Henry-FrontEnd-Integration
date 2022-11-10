import styled from "styled-components"
import { Link } from "react-router-dom"
const DivCard = styled.div`
background-color: #9b9badcf;
`
const Botonse = styled.button`
color:white;
background-color: red;
border-radius: 10%;
`


export default function Card(props) {
const aux = () =>{
props.onClose(props.name)

}
   console.log(props)
   return (
      <DivCard>
      <Botonse onClick={() => props.onClose(props.detailIds)}>X</Botonse>
      
      <Link to={`/detail/${props.detailId}`} >  <h2 key={props.key}>{props.name}</h2></Link>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <img src={props.image} alt="" />
   </DivCard>
);
}
