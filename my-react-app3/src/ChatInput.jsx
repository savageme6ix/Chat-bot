import { useState } from "react"

function Input({ChatMessage, setChatMessage}){

     const[inputText, setInputText] = useState('')

        function saveInputText(event){
            setInputText(event.target.value)
        }

     function sendMessage() {
        const response = window.Chatbot.getResponse(inputText);

        setChatMessage(prev => [
            ...prev,
            { message: inputText, sender: 'user', id: crypto.randomUUID() },
            { message: response, sender: 'robot', id: crypto.randomUUID() }
        ]);

        setInputText('');
    }


    return(
        <>
        <input placeholder="Write message" size="30" onChange={saveInputText} value={inputText} />
        <button onClick={sendMessage}>Send</button>
        </>
    )
}
export default Input