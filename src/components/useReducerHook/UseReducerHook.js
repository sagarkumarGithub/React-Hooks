import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return { count: state.count + 1, showText: state.showText };
    case "DECREAMENT":
      return { count: state.count - 1, showText: state.showText };
    case "TOGGLETEXT":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  showText: true
};

const useReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREAMENT" })}>+</button>
      {state.count}
      <button
        onClick={() => {
          dispatch({ type: "DECREAMENT" });
          dispatch({ type: "TOGGLETEXT" });
        }}
      >
        -
      </button>
      {state.showText && <p>i am toggle text</p>}
    </div>
  );
};

export default useReducerHook;
