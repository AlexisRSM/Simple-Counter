import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SecondsCounter from './SecondsCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="Main w-25 m-auto">
      {<SecondsCounter />}
    </div>

  )
}

export default App
