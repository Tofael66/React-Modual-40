import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './Componens/Componenss/Countrues'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>React Tutorial</h1>
    
     <Countries></Countries>
    </>
  )
}

export default App
