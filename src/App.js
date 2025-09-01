import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <div>
          <button
            data-testid="minus-button"
            onClick={() => {
              setCount((prev) => prev - 1);
            }}
            disabled={isDisabled}
          >
            -
          </button>
          <button
            data-testid="plus-button"
            onClick={() => {
              setCount((prev) => prev + 1);
            }}
            disabled={isDisabled}
          >
            +
          </button>
        </div>
        <div>
          <button
            data-testid="on/off-button"
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              setIsDisabled((prev) => !prev);
            }}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
