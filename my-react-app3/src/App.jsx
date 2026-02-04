import './App.css'
import ChatMessage from "./HchatMessage.jsx"
import Input from './ChatInput.jsx'
import { useState } from 'react'

function App() {
  const [message, setChatMessage] = useState([])

  return (
    <>
      <Input ChatMessage={message} setChatMessage={setChatMessage} />
      <ChatMessage ChatMessage={message} />
    </>
  )
}

export default App
