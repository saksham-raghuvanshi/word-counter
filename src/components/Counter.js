import React, { useRef, useState } from "react";

const Counter = () => {
  const [charlength, setCharLength] = useState(0);
  const [wordLength, setWordLength] = useState(0);
  const textRef = useRef();
  const handleCount = () => {
    const value = textRef.current.value;
    setCharLength(value.length);
    value.length
      ? setWordLength(value.trim().split(" ").length)
      : setWordLength(0);
  };

  const handleButton = () => {
    textRef.current.value = "";
    handleCount();
  };
  return (
    <section className="counter">
      <textarea
        onChange={handleCount}
        ref={textRef}
        className="textArea"
        placeholder="Type or Paste your Text"
      ></textarea>
      <button onClick={handleButton} className="clearBtn">
        Clear
      </button>
      <p className="result">
        <span>Characters: {charlength}</span>
        <span>Word: {wordLength}</span>
      </p>
    </section>
  );
};

export default Counter;
