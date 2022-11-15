import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


export default function Detail(props) {
  const { detailId } = useParams();
 // const navigate = useNavigate();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("Error", err);
      });

     return setCharacter({});
  }, [detailId]);
  
const navigate = useNavigate(); //use navagte se invoca en una funcion flecha con onclick
//y se le indica a donde se queire ir onClick={() => navigate("/")}


  return (
    <div>

      <img src={character.image} alt="" />

      <div>
        <button onClick={() => navigate("/home")}>Volver</button> 
      </div>
      <card>
        <h1>NOMBRE: {character.name}</h1>
        <h2>STATUS: {character.status}</h2>
        <h2>ESPECIE: {character.species}</h2>
        <h2>GENERO: {character.gender}</h2>
        <h2>ORIGIN: {character.origin?.name}</h2>{" "}
      </card>
    </div>
  );
}