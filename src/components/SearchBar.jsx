import styled from "styled-components"
export default function SearchBar(props) {

   const Inputstyle = styled.input`
   border-radius: 10px;
   font-size: 15px;
   `
   const Botonse = styled.button`
   color:white;
   background-color: #25e607;
   border-radius: 10%;
   font-family: Arial;
   font-size: 20px;
   display:flex;
   flex-direction:column;
   align-items: center;
   margin-top: 5px

   `
   return (
      <div>
         <Inputstyle type="search" />
         <Botonse onClick={() => props.onSearch("esto abriria un pj")}>buscar personaje</Botonse>
         
      </div>
   );
}
