import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      <button
        onClick={() => setHidden((prev) => !prev)}
        className="btn btn-error"
      >
        {hidden ? "Show" : "Hide"}
      </button>
      <div>{!hidden && <Todo />}</div>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Render");
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <h1 className="border border-red-500 p-10 m-10">{count}</h1>;
};

const Todo = () => {
  const controller = new AbortController();
  const signal = controller.signal;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
      .then((res) => res.json())
      .then((data) => alert(data.title));

    return () => {
      controller.abort();
    };
  }, []);
  return <div className="border border-red-500 p-10">Todo</div>;
};

export default UseEffectExample;
