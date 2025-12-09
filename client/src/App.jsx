import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  // useEffect(async() => (
     fetch('http://localhost:3000/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message)
      ).catch((err) => console.error('Error fetching message:', err))
  // ),[])

  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1>{message}</h1>
    </>
  )
}

export default App
