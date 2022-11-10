import styled from "styled-components"
import React from "react";
import {useState} from "react"
import App from "../App";


function SearchBar(props) {

const [characters, setCharacters] = useState([])
  
   function handleChange(e) {
		setCharacters(e.target.value);
	}
   const aux = () =>{
      props.onSearch(characters)
   }

   return (
      <div>
         <input onChange={handleChange}/>
         <button onClick={aux}>buscar personaje</button>
         
      </div>
   );
}
export default SearchBar