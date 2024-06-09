import "./App.css";
import { useState, useEffect } from "react";
import { BlockPicker } from "react-color";

function App() {
  const [bg, setBg] = useState("black");

  const changeColor = (bgColor) => {
    setBg(bgColor.hex);
  };
  useEffect(() => {
    document.body.style.backgroundColor = bg;
  }, [bg]);

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: bg }}>
        <h1>Change Background</h1>
        <h3>Made possible by using react-color library</h3>
        <BlockPicker
          color={bg}
          onChangeComplete={changeColor}
          onChange={changeColor}
        />
      </header>
    </div>
  );
}

export default App;
