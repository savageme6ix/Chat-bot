import './App.css'
import Input from './ChatInput'
import ChatMessage1 from './HchatMessage'
function App() {
  return(
    <>
     <Input />
     <ChatMessage1 message="hello Chatbot" sender="User"/>
     <ChatMessage1 message="hello! How can i help you?" sender="Bot"/>
     <ChatMessage1 message= "can you get me todays date?" sender = "User"/>
     <ChatMessage1 message= "Today is september 27" sender="Bot"/>
     <ChatMessage1 message= "how about flip a coin" sender="User"/>
     <ChatMessage1 message= "Sure you got tails" sender="Bot"/>
     </>
  )
 
}

export default App
