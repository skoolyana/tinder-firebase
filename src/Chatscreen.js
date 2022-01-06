import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./Chatscreen.css";

function Chatscreen() {

    const [input, setInput] = useState('');

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, {message : input}])
        setInput('');
    }

  const [messages, setMessages] = useState([
    {
      name: "Aishwarya",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8ZhJINHuQXBxQnx_sAGa4woihqE0_EL8RA&usqp=CAU",
      message: "Whats up",
    },
    {
      name: "Aishwarya",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8ZhJINHuQXBxQnx_sAGa4woihqE0_EL8RA&usqp=CAU",
      message: "How is it going",
    },
    {
      message: "I am fine thanks",
    },
  ]);

  return (
    <div className="chat_screen">
      <p className="chatscreen_timestamp">
        {" "}
        YOU MATCHED WITH AISH ON 20/08/1982
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatscreen_message">
            <Avatar
              className="chatscreen_image"
              alt={message.name}
              src={message.image}
            ></Avatar>
            <p className="chatscreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatscreen_message">
            <p className="chatscreen_textuser">{message.message}</p>
          </div>
        )
      )}

      <div className="chatscreen_input">
        <form className="chatscreen_inputform">
          <input value={input}  onChange={e => setInput(e.target.value)}
          className="chatscreen_inputtext" placeholder="Type a message" type="text"></input>
            <button onClick={handleSend} type="submit" className="chatscreen_sendBtn">SEND</button>
         
        </form>
      </div> 
    </div>
  );
}

export default Chatscreen;
