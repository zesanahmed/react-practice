import { useContext } from "react";
import { ThemeContext, TThemeContext } from "./context/ThemeProvider";
import { MenuItem, MenuList } from "./components/Menu";

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
      <MenuList>
        <MenuItem></MenuItem>
      </MenuList>
    </div>
  );
};

export default App;
