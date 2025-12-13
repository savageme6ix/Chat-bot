 function ChatMessage1(props){
    const {message,sender} = props
    
    if(sender === "Bot"){
        return(
        <div>
            <img src="react.svg" width="50" />
            {message} 
        </div>
        )
    } else{
         return(
        <div>
            {message} 
            <img src="react.svg" width="50" />
        </div>
      )
    }
   
 }
 export default ChatMessage1