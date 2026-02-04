import Bot from "./bot.png"
import Human from "./profile.jpeg"
import  "./Main.css"
import React, { useState } from 'react';
function MessageBubble({ message, sender }) {
  return (
    <div className={`message ${sender}`}>
      <img src={sender==='robot'? Bot : Human}/>
      <p>{message}</p>
    </div>
  );
}

export default function ChatMessage({ChatMessage}) {

  return (
    <div className="chat-container">
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