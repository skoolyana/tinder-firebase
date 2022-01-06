import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import Chatscreen from "./Chatscreen";

function App() {
  return (
    <div className="App">
      <Router>  
        
        <Routes>
        <Route path="/chat/:person" element={<> <Header backButton="/chat"></Header><Chatscreen></Chatscreen></>}></Route>
        
          <Route path="/chat" element={<> <Header backButton="/"></Header><Chats></Chats></>}></Route>
          <Route path="/"  element={<><Header></Header> <TinderCards></TinderCards><SwipeButtons></SwipeButtons></>}>
          </Route>
        </Routes>
      </Router>

      {/*Chat Screen */}

      {/*Individual Chat Screen */}
    </div>
  );
}

export default App;
