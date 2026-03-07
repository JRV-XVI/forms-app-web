import { useState } from 'react'
import ComicForm from './components/FormComponent.jsx'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <ComicForm/>
  )
}

export default App
