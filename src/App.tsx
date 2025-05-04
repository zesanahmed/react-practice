import { useContext } from "react";
import { ThemeContext, TThemeContext } from "./context/ThemeProvider";
import UsersContainer from "./components/UsersContainer";
import Select from "./components/Select";

const App = () => {
  const { dark, setDark } = useContext(ThemeContext) as TThemeContext;
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
      <Select>
        <Select.SelectOption value="1">Option 1</Select.SelectOption>
        <Select.SelectOption value="2">Option 2</Select.SelectOption>
        <Select.SelectOption value="3">Option 3</Select.SelectOption>
        <Select.SelectOption value="4">Option 4</Select.SelectOption>
        <Select.SelectOption value="5">Option 5</Select.SelectOption>
      </Select>
    </div>
  );
};

export default App;
