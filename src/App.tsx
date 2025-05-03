import { useContext } from "react";
import { ThemeContext, TThemeContext } from "./context/ThemeProvider";
import { MenuItem, MenuList } from "./components/Menu";
import Profile from "./pages/hooksPages/Profile";
import GameResult from "./pages/hooksPages/GameResult";

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
      <Profile />
      <GameResult />
    </div>
  );
};

export default App;
