import './App.css'
import Input from './ChatInput'
import ChatMessage1 from './HchatMessage'
function App() {
  let messagee = [{
    message:"hello Chatbot",
    sender: "User",
    id: "id1"
  },{
    message:"hello! How can i help you?",
    sender:"Bot",
    id: "id2"
  },{
    message:"can you get me todays date?",
    sender:"User",
    id: "id3"
  },{
    message:"Today is september 27",
    sender:"Bot",
    id: "id4"
  },{
    message:"how about flip a coin",
    sender:"User",
    id: "id5"
  },{
    message:"Sure you got tails",
    sender:"Bot",
    id: "id6"
  }]

 return(
    <>
     <Input />
      {messagee.map((m)=>{
       return(
      <ChatMessage1   message={m.message}
      sender = {m.sender} key={m.id} />
       );
    
  })}
     </>
 )
}

export default App
