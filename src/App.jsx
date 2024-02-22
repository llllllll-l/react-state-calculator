import { useState } from "react";

import "./App.css";

function App() {
  const [leftDisplay, setLeftDisplay] = useState("0");
  const [rightDisplay, setRightDisplay] = useState("0");

  const [operatorDisplay, setOperator] = useState("");

  const [resultDisplay, setResult] = useState("0");

  const handleNumberClick = (number, panel) => {
    if (panel === "left") {
      setLeftDisplay((prevInput) =>
        prevInput === "0" ? number : prevInput + number
      );
    } else if (panel === "right") {
      setRightDisplay((prevInput) =>
        prevInput === "0" ? number : prevInput + number
      );
    }
  };

  const handleClear = (panel) => {
    if (panel === "left") {
      setLeftDisplay("0");
    } else if (panel === "right") {
      setRightDisplay("0");
    }
  };

  const handleOperationClick = (operation) => {
    switch (operation) {
      case "+":
        setOperator(operation);
        break;
      case "-":
        setOperator(operation);
        break;
      case "*":
        setOperator(operation);
        break;
      case "÷":
        setOperator(operation);
        break;
      default:
        break;
    }
    console.log(operation);
  };

  const culateTotal = () => {
    const leftNum = parseFloat(leftDisplay);
    const rightNum = parseFloat(rightDisplay);

    switch (operatorDisplay) {
      case "+":
        setResult(String(leftNum + rightNum));
        break;
      case "-":
        setResult(String(leftNum - rightNum));
        break;
      case "*":
        setResult(String(leftNum * rightNum));
        break;
      case "÷":
        setResult(String(leftNum / rightNum));
        break;
      default:
        break;
    }
    setLeftDisplay("0");
    setRightDisplay("0");
    setOperator("");
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{leftDisplay}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
            <button
              key={number}
              onClick={() => handleNumberClick(String(number), "left")}
            >
              {number}
            </button>
          ))}
          <button onClick={() => handleClear("left")}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operatorDisplay}</p>
        <div className="numbers">
          {["+", "-", "*", "÷"].map((op) => (
            <button key={op} onClick={() => handleOperationClick(op)}>
              {op}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{rightDisplay}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
            <button
              key={number}
              onClick={() => handleNumberClick(String(number), "right")}
            >
              {number}
            </button>
          ))}
          <button onClick={() => handleClear("right")}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{resultDisplay}</p>
        <div>
          <button onClick={culateTotal}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;