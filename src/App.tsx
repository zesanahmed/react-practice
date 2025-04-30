import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider";

const App = () => {
  const { dark, setDark } = useContext(ThemeContext);
  console.log(dark);
  return (
    <div
      className={`h-screen w-screen flex items-center justify-center ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      <button className="btn btn-primary" onClick={() => setDark(!dark)}>
        Toggle
      </button>
    </div>
  );
};

export default App;
