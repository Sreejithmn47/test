import React,{useState} from 'react'

function Counter() {

    const [count , setCount ] = useState(0)
  return (
    <div>
        

<h1>The count is : { count }</h1>

<button onClick={()=>{setCount ( count + 1)}}>ADD</button>
      
    </div>
  )
}

export default Counter
