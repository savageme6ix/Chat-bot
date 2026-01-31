import './App.css'
import ChatMessage from "./HchatMessage.jsx"
import Input from './ChatInput.jsx'
import { useState } from 'react'
function App() {
    const [message, setChatMessage] = useState([
    { message: "Hello Chatbot", sender: "user" },
    { message: "Hello! How can i help you?", sender: "robot" },
    { message: "Can you get me todays date?", sender: "user" },
    { message: "Today is September 27", sender: "robot" }
  ])

 return(
    <>
  <Input ChatMessage={message} setChatMessage={setChatMessage} />
  <ChatMessage ChatMessage={message} />
  </>
 )
}

export default App
