import React from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components"

const DivNav = styled.nav`
display: flex;
flex-direction:row;
justify-content: center;
margin-left:50px;
border-radius: 10%;
border: 2px solid #222121;
border-left: 1px solid #222121;
  border-right: 1px solid #222121;
background-color: #b8b8b825;
font-size: 30px

`

function Nav(props) {


return (
    <DivNav>
       <SearchBar/>
    </DivNav>
)}
export default Nav