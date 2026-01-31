import { useState } from "react"

function Input({ChatMessage, setChatMessage}){

     const[inputText, setInputText] = useState('')

        function saveInputText(event){
            setInputText(event.target.value)
        }

     async function sendMessage() {
        const response = await window.Chatbot.getResponseAsync(inputText);

        setChatMessage(prev => [
            ...prev,
            { message: inputText, sender: 'user', id: crypto.randomUUID() },
            { message: response, sender: 'robot', id: crypto.randomUUID() }
        ]);

        setInputText('');
    }

   async function send(event){
      {if(event.key==='Enter'){
        const response = await window.Chatbot.getResponseAsync(inputText);

        setChatMessage(prev => [
            ...prev,
            { message: inputText, sender: 'user', id: crypto.randomUUID() },
            { message: response, sender: 'robot', id: crypto.randomUUID() }
        ]);

        setInputText('');
      }else if(event.key==='Escape'){
        setInputText('')
      }}
    }


    return(
        <>
        <input placeholder="Write message" size="30" onChange={saveInputText} onKeyDown={send} value={inputText} />
        <button onClick={sendMessage}>Send</button>
        </>
    )
}
export default Input