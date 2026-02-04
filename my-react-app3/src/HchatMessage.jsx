import Bot from "./bot.png"
import Human from "./profile.jpeg"
import  "./Main.css"
import React, { useRef, useEffect } from 'react';
function MessageBubble({ message, sender }) {
  return (
    <div className={`message ${sender}`}>
      <img src={sender==='robot'? Bot : Human}/>
      <p>{message}</p>
    </div>
  );
}

export default function ChatMessage({ChatMessage}) {
 const chatMessagesRef =  useRef(null)
    useEffect(()=>{
      const containerElem = chatMessagesRef.current;
      if(containerElem){
        containerElem.scrollTop=containerElem.scrollHeight;
      }
    },[ChatMessage])
  return (
    <div ref={chatMessagesRef} className="chat-container">
      {ChatMessage.map((msg, index) => (
        <MessageBubble 
          key={index} 
          message={msg.message} 
          sender={msg.sender} 
        />
      ))}
    </div>
  );
}