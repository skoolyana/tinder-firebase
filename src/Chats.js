import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Aishwarya"
        message="Hey How are you"
        timestamp="30 minutes ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8ZhJINHuQXBxQnx_sAGa4woihqE0_EL8RA&usqp=CAU"
      ></Chat>

    <Chat
        name="Priyanka"
        message="Lets meetup"
        timestamp="40 minutes ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy479Q7CWpwlNbRDgg5STCTWH1axtYHsUmOA&usqp=CAU"
      ></Chat>

<Chat
        name="Arya"
        message="Not Today"
        timestamp="40 minutes ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorwrziRe6QZkhUKspOObR_RsUa8ZhBrFl1Q&usqp=CAU"
      ></Chat>



    </div>
  );
}

export default Chats;
