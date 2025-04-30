import { useState } from "react";
import UseStateExample from "./pages/UseStateExample";
import HandleMultipleStates from "./pages/HandleMultipleStates";
import UseReducerExample from "./pages/UseReducerExample";
import UseEffectExample from "./pages/UseEffectExample";
import UseRefExample from "./pages/UseRefExample";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <UseStateExample counter={counter} setCounter={setCounter} />
      <HandleMultipleStates />
      <UseReducerExample />
      <UseEffectExample />
      <UseRefExample />
    </div>
  );
};

export default App;
