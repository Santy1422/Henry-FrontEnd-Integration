import { useDispatch, useSelector} from 'react-redux';
import * as actions from '../../redux/actions/index.js'
/* 8️⃣ ***COMPONENTE BANDDETAIL*** 8️⃣

Implementar el componente BandDetail. En este ejercicio tendrás que renderizar las diferentes propiedades 
de la banda.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que despachar una action con el "id" de la banda cuando se monta el componente. Luego, traer esa 
información de tu estado global.

🟢 Tendrás que renderizar algunos datos de la banda correspondiente.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser funcional.
❗Tienes que usar hooks.
❗NO hacer un destructuring de los hooks, debes utilizarlos con la siguiente forma:
      -'React.useState' - 'React.useEffect';
*/


import React from 'react';

const BandDetail = (props) => {
const dispatch = useDispatch()
 React.useEffect (() =>  dispatch(actions.getBandDetail(props.id)))   
 const estado = useSelector(state => state.bands)
 const estado2 = useSelector(state => state.bandDetail)


return <div>
      <h1>{estado.name}</h1>
      <img src={estado.image} alt={estado.name}/>
      <h5>Entradas disponibles: {estado.tickets}</h5>
      <h5>Fecha del evento: {estado.functionDate}</h5>
      <h5>Origen de la banda: {estado.origin}</h5>
      <h5>Integrantes: {estado2.members.join(" ")} </h5>
      <h3>{estado.description}</h3>
   </div>;
};

export default BandDetail;
