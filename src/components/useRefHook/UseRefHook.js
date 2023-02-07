import React, { useRef } from "react";

const UseRefHook = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>I am use ref hook</h1>
      <input type="text" placeholder="Exm..." ref={inputRef} />
      <button onClick={handleClick}>Change name</button>
    </div>
  );
};

export default UseRefHook;
