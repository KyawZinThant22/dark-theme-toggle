import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/hook";
import { RootState } from "./store";
import { toggleDarkMode } from "./store/reducers/theme";

function App() {
  const [count, setCount] = useState(0);

  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector((state: RootState) => state.theme);

  console.log(darkMode);

  return (
    <div className={`w-full h-screen ${darkMode ? "bg-white" : "bg-[#000]"} `}>
      <div
        className={`flex items-center justify-between w-full container mx-auto pt-12 ${
          darkMode ? "bg-white" : "bg-[#000]"
        } `}
      >
        <h1 className={`${darkMode ? "text-[#000]" : "text-white"}`}>
          Dark Web
        </h1>
        <div
          className="bg-white shadow rounded-full p-3"
          onClick={() => dispatch(toggleDarkMode())}
        >
          <button>Dark</button>
        </div>
      </div>
    </div>
  );
}

export default App;
