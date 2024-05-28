import React, { useState, useRef } from "react";

function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value);
  };
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown person"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

export default Player;
