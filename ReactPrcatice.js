import React from 'react';
import { useState } from 'react'

function App(){
  const [marks,setMarks] = useState([3,4,5,6,7,8]);
  
  
  function increment(x){
    
    const copyMarks =[...marks]
    copyMarks[x]++
    setMarks(copyMarks)
    
    
  }
  
  
    function decrement(x){
    
    const copyMarks =[...marks]
    copyMarks[x]--
    setMarks(copyMarks)
    
    
  }
  
  return(
    
    <>
      <h1>My Multiple counter App.</h1>
      <p>Hello world</p>
      
      <ul>
        
      {
        marks.map((m, i)=>(
        <li key={i} style ={}>
          
          <button onClick= {() => increment(i)}>+</button>
          {m}
          
          <button onClick={()=> decrement(i)}>-</button>
          
          
        </li>
          
          
        ))
      }
      </ul>
      
    </>
    )
}
export default App
