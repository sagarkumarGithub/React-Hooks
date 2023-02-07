import React, { useState } from "react";

const UseStateHook = () => {
  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default UseStateHook;
