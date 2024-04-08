import { Input } from "@mui/material";
import { useState, useEffect, useRef } from "react";

const Test = () => {
  const [text, setText] = useState("");

  

  const data = () => {
    const a = window.btoa(text);
    const b = window.atob(a);
    // alert("encrypted text: " + a + "\ndecrypted text: " + b);
    window.confirm()
  };

  return (
    <>
      {/* <div>{currentDate}</div> */}
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={data}>submit</button>
    </>
  );
};

export default Test;
