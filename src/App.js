import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import characters, { Rick } from './data.js'
import {useState} from "react"

function App () {

  //const [characters, setCharacters] = useState([<Card/>])
  return (
    <><div className='App' style={{ padding: '25px' }}>
    <Nav/>
    <hr />

    </div>
          <Cards characters={characters} />
          
        <hr />
</>
  )
}

export default App
