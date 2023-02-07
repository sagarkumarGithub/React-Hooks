import React, { useState, useEffect } from "react";
import axios from "axios";

const UseEffectHook = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        // console.log(response.data[0]);
        setData(response.data[0].email);
      });
  }, []);

  return (
    <div>
      <h1>I am UseEffectHook</h1>
      <h4>{data}</h4>
    </div>
  );
};

export default UseEffectHook;
