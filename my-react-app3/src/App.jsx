import './App.css'
import Input from './ChatInput'
import ChatMessage1 from './HchatMessage'
function App() {
  let messagee = [{
    message:"hello Chatbot",
    sender: "User"
  },{
    message:"hello! How can i help you?",
    sender:"Bot"
  },{
    message:"can you get me todays date?",
    sender:"User"
  },{
    message:"Today is september 27",
    sender:"Bot"
  },{
    message:"how about flip a coin",
    sender:"User"
  },{
    message:"Sure you got tails",
    sender:"Bot"
  }]

 return(
    <>
     <Input />
      {messagee.map((m)=>{
       return(
      <ChatMessage1   message={m.message}
      sender = {m.sender} />
       );
    
  })}
     </>
 )
}

export default App
