import styled from "styled-components"

const DivCard = styled.div`
background-color: #9b9badcf;
`
const Botonse = styled.button`
color:white;
background-color: red;
border-radius: 10%;
`


export default function Card(props) {
   return (
      <DivCard>
         {
    <><><><><Botonse  onClick={()=>props.onClose}>X</Botonse>
               <h2>name: {props.name}</h2>
            </><h2>species: {props.species}</h2>
            </><h2>gender: {props.gender}</h2></><img src={props.image} alt="image.props"></img></>
    /* <button onClick={}>X</button>
         <h2></h2>
         <h2></h2
         <h2></h2>
         <img  src={} alt="" /> */}
      </DivCard>
   )
}
