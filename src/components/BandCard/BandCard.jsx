import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions/index.js'

/* 7️⃣ ***COMPONENTE BANDCARD*** 7️⃣

Implementar el componente BandCard.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que renderizar una serie de etiquetas HTML que incluyan texto y propiedades.
🟢 Tendrás que despachar una action para eliminar una banda específica.

IMPORTANTE
❗Este componente debe ser de funcional.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
*/
import './bandCard.css';
import React from 'react';


const BandCard = (props) => {
   dispatch = useDispatch()
   return <div className='card'>
      <button onClick={() => dispatch(actions.deleteBands(props.id))}>x</button>
      <Link to={`/band/${props.id}`}>  <h3>{props.name}</h3></Link>
      <img src={props.image} alt={props.name}/>
      <p>FunctionDate: {props.functionDate}</p>
      
   </div>;
};


// console.log
// {
//   id: 1,
//   name: 'The Beatles',
//   functionDate: '09-10-2022',
//   image: 'https://media.ambito.com/p/e90015ca4ed155874fcefa55e6ac539c/adjuntos/239/imagenes/039/981/0039981805/the-beatleswebp.png'
// }
export default BandCard;
