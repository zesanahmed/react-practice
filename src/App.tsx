import { useState } from "react";
import UseStateExample from "./pages/UseStateExample";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <UseStateExample counter={counter} setCounter={setCounter} />
    </div>
  );
};

export default App;
