import Card from './Card';
import styled from "styled-components"

const DivCards = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-right: 10%;
margin-left: 10%;
`

export default function Cards(props) {
   const { characters } = props;
   return(
      <DivCards> 
         {
            characters.map((character , index)=> {
               console.log(index)
               return <Card key = {index}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               onClose={props.onClose}
               detailId={character.id}
               />
            })
         }
      </DivCards>
   ); 
}

//tengo un objeto rick
//tiene 4 propiedades
//todas las propiedades tiene un string
//esa info 