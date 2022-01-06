import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";
import database from "./firebase";

import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

function TinderCards() {
  const [people, setPeople] = useState([]);

  // Piece of Code which runs based on a Condition
  useEffect(() => {
    const queryConst = query(collection(database, "people"));

    onSnapshot(queryConst, (snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  const swiped = (direction, nametoDelete) => {
    console.log("Removing" + nametoDelete);
    //setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
    //setLastDirection(direction);
  };




  return (
    <div>
  
      <div className="tindercards_container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            on
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: "url(" + person.url + ")" }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
          
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
