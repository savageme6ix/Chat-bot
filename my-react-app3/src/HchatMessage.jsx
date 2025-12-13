 function ChatMessage1(props){
    const message = props.message;
    const sender = props.sender;
    
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
            <img src="react.svg" width="50" />
            {message} 
        </div>
      )
    }
   
 }
 export default ChatMessage1