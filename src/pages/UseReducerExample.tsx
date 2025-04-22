import { ChangeEvent, useReducer } from "react";

const initialState = { name: "", email: "" };

const reducer = (currentState, action) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addEmail":
      return { ...currentState, email: action.payload };
    default:
      return currentState;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
        className="border-2 border-b-purple-700"
        type="text"
        name="name"
        id="name"
        placeholder="Enter Name"
      />
      <input
        className="border-2 border-b-purple-700 "
        onChange={(e) =>
          dispatch({ type: "addEmail", payload: e.target.value })
        }
        type="text"
        name="email"
        id="email"
        placeholder="Enter Email"
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default UseReducerExample;

// import React, { useReducer } from "react";

// const initialState = { count: 0 };

// const reducer = (currentState, action) => {
//   console.log("currentState =>", currentState);
//   console.log("action =>", action);
//   switch (action.type) {
//     case "increment":
//       return { count: currentState.count + 1 };
//     case "decrement":
//       return { count: currentState.count - 1 };
//     case "incrementBySetAmount":
//       return { count: currentState.count + action.payload };
//     default:
//       return currentState;
//   }
// };

// const UseReducerExample = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button
//         onClick={() => dispatch({ type: "increment" })}
//         className="btn btn-primary"
//       >
//         Increment
//       </button>
//       <button
//         className="btn btn-primary"
//         onClick={() => dispatch({ type: "incrementBySetAmount", payload: 3 })}
//       >
//         Increment By 3
//       </button>
//       <button
//         onClick={() => dispatch({ type: "decrement" })}
//         className="btn btn-primary"
//       >
//         Decrement
//       </button>
//     </div>
//   );
// };

// export default UseReducerExample;
