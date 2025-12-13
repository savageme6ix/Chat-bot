import './App.css'
import Input from './ChatInput'
import ChatMessage1 from './HchatMessage'
function App() {
  return(
    <>
     <Input />
     <ChatMessage1 message="hello Chatbot"/>
     <ChatMessage1 message="hello! How can i help you?"/>
     <ChatMessage1 message= "can you get me todays date?"/>
     <ChatMessage1 message= "Today is september 27"/>
     <ChatMessage1 message= "how about flip a coin"/>
     <ChatMessage1 message= "Sure you got tails"/>
     </>
  )
 
}

export default App
