import React, { useState } from "react";

function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setSubmitted(false);
    setEnteredPlayerName(e.target.value);
  };
  const handleClick = () => {
    setSubmitted(true);
  };
  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : "unknown person"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

export default Player;
