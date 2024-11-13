import { useState } from 'react'
import './App.css'
/**
 * Counter
 */
function App() {
  let [count, setCount] = useState(0)
  return (
    <>
      <h2>Counter value : {count}</h2>
      <button onClick={ () => setCount(count+1)}>Add Value</button>
      <br/><br/>
      <button onClick={() => setCount(count-1)}>Remove Value</button>
    </>
  )
}

export default App
