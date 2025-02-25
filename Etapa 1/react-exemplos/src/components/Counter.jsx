import { useState } from 'react'
import '../App.css'

function Counter() {
  const [count, setCount] = useState(Number(initial))
  
  return ( 
    <>
      <div className="card">
        <button onClick={() => setCount((count) =>  count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default Counter;
