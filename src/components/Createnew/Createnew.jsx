import React, { useState } from "react";
import "./Createnew.scss";

const Createnew = () => {
  const [input, saveInput] = useState("");

  const addNewCard = () => {
    console.log(input);
  };

  return (
    <div className="createNewArea">
      <button className="newbutton" onClick={addNewCard}>
        Add new Card
      </button>
      <input
        className="inputField"
        onChange={(e) => {
          saveInput(e.target.value);
        }}
        value={input}
        placeholder="Enter Text Here"
      ></input>
    </div>
  );
};
export default Createnew;
