import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clear = () => setInput("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-72">

        <input
          type="text"
          value={input}
          readOnly
          className="w-full mb-4 p-2 border rounded text-right text-xl"
        />

        <div className="grid grid-cols-4 gap-2">
          {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map((btn) => (
            <button
              key={btn}
              onClick={() => btn === "=" ? calculate() : handleClick(btn)}
              className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
            >
              {btn}
            </button>
          ))}

          <button
            onClick={clear}
            className="col-span-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;