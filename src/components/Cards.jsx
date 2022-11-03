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
            characters.map((element)=> {
               return <Card
               name={element.name}
               species={element.species}
               gender={element.gender}
               image={element.image}
               onClose={()=> window.alert('Emulamos que se cierraxxdd')}
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