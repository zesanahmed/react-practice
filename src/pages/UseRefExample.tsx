import React, { useRef, useState } from "react";

const UseRefExample = () => {
  const [count, setCount] = useState(0);
  const myRef = useRef(0);

  const increment = () => {
    myRef.current = myRef.current + 1;
    setCount(count + 1);
    console.log(myRef.current, count);
  };
  return (
    <div>
      <h1>UseRef</h1>
      <button onClick={() => increment()} className="btn btn-info">
        {myRef.current}
      </button>
    </div>
  );
};

export default UseRefExample;
