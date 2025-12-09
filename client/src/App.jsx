import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  // useEffect(async() => (
     fetch(`${import.meta.env.VITE_URL}/api/message`)
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
