import React from "react";

const Counter = () => {
  return (
    <section className="counter">
      <textarea
        className="textArea"
        placeholder="Type or Paste your Text"
      ></textarea>
      <button className="clearBtn">Clear</button>
      <p className="result">
        <span>Characters: </span>
        <span>Word: </span>
      </p>
    </section>
  );
};

export default Counter;
