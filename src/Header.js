import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import "./Header.css";
import { IconButton } from "@material-ui/core";
import { Link,useNavigate } from "react-router-dom";
import { ArrowBackIos } from "@material-ui/icons";

function Header({backButton}) {
    const history = useNavigate();
  return (
    <div className="header">
        {backButton ? (
            <IconButton onClick={() => history(backButton)}>
            <ArrowBackIos fontSize="large" className="header_icon"></ArrowBackIos>
            </IconButton>
        ):(
            <IconButton>
            <PersonIcon className="header_icon" fontSize="large"></PersonIcon>
          </IconButton>

        )}
     
      <Link to={"/"}>
        <img
          src="https://1000logos.net/wp-content/uploads/2018/07/Tinder_logo_PNG3.png"
          alt=""
          className="header_logo"
        ></img>
      </Link>
      <Link to="/chat">
        <IconButton>
          <QuestionAnswerIcon
            className="header_icon"
            fontSize="large"
          ></QuestionAnswerIcon>
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
