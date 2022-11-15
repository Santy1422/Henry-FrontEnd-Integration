import React from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux"

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


 const estado = useSelector(state => state.myFavorites)  
  const Location = useLocation()



return (
    <DivNav>
       <SearchBar onSearch={props.onSearch}/>
<Link to="/about"><li>About</li></Link>
<Link to="/home"><li>Home</li></Link>
{!(estado.length === 0) ? 
      <><button>{estado.length}❤️</button><select>
        {estado?.map((element) => <option><lu>{element.name}</lu></option>)}
      </select></>	 : 
					<button>🤍</button>
				}

    </DivNav>
)}

export default Nav