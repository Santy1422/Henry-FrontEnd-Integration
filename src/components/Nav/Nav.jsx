import { Link } from 'react-router-dom';
/* 2️⃣ ***COMPONENTE NAV*** 2️⃣
Implementar el componente Nav. En este ejercicio tendrás que asociar dos etiquetas Link to='' a 
distintos elementos.

REQUISITOS
🟢 El primer <Link> debe dirigir a "/" con el texto "Home".
🟢 El segundo <Link> debe dirigir a "/band/create" con el texto "Create Band".

IMPORTANTE
❗Este componente debe ser funcional.
*/
import './nav.css';
import React from 'react';

const Nav = () => {
   return <div className='nav'>
           <Link to={'/'}><span>Home</span></Link>  
     <Link to={'/band/create'}><span>Create Band</span></Link>  
   </div>;
};

export default Nav;
