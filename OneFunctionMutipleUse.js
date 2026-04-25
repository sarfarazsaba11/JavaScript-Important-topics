import React from 'react';
import { useState } from 'react'

function App(){
  const [marks,setMarks] = useState([3,4,5,6,7,8]);
  
  
  function update(x,dx){
    
    const copyMarks =[...marks]
    copyMarks[x]=copyMarks[x]+dx
    setMarks(copyMarks)
    
    
  }
  
  
  return(
    
    <>
      <h1 style= {{color:"blue", width:"100%", margin:"auto",text:"center" }}>My Multiple counter App.</h1>
      <p>Hello world</p>
      
      <ul>
        
      {
        marks.map((m, i)=>(
        <li key={i} style ={{display:"flex",justifyContent:"center",gap:"10px",margin:"10px"}}>
          
          <button onClick= {() => update(i,1)}>+</button>
          {m}
          
          <button onClick={()=> update(i,-1)}>-</button>
          
          
        </li>
          
          
        ))
      }
      </ul>
      
    </>
    )
}
export default App
