import { useRef, useState } from "react";

const Lab08 = () => {
  const inputRef = useRef(null);
  const divRef = useRef(null);
  const [data, setData] = useState("");
  return (
    <div>
      <h1>useref example</h1>
      <input type="text" ref={inputRef} />
      <button onClick={() => setData(inputRef.current.value)}>display</button>
      <h3>{data}</h3>
      <button onClick={() => (divRef.current.style.backgroundColor = "#f00")}>
        change color
      </button>
      <div ref={divRef}>hello</div>
    </div>
  );
};

export default Lab08;
