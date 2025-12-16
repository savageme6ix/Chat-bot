 function ChatMessage1(props){
    const {message,sender} = props

         return(
        <div>
            {sender==="Bot" && <img src="bot.png" width="50"/>}
            {message} 
            {sender=== "User" && <img src="profile.jpeg" width="50"/>}
        </div>
      )
 }
 export default ChatMessage1