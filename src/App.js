import AnimalShow from "./AnimalShow";
import {useState} from 'react'

function getRandomAnimals(){
  const animals =['bird', 'cat', 'horse', 'gator', 'cow','dog']

  return animals [Math.floor(Math.random() * animals.length)]
}
function App(){
const [count,setCount] = useState(0);
const [animals,setAnimals] = useState([]);
  const handleClick = () => {
        setCount(c => c+1)
  
        setAnimals([...animals,getRandomAnimals()])
      }
 const renderedAnimals = animals.map((animal,index) => {
  return <AnimalShow type = {animal} key={index}/>
 })
  return (<div> 
              <button onClick ={handleClick}>Add Animal</button>
            Number of animals ={count}
             {renderedAnimals}
  </div>
       
  )
}

export default App;