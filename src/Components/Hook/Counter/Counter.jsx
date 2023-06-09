import { useState } from "react";

const Counter = function () {
  const [value, setValue] = useState(0);
  const handleAdd = () => {
    setValue(value + 1);
  };
  const handleSubtract = () => {
    if (value > 0) setValue(value - 1);
  };
  const handleReset = () => {
    setValue(value - value);
  };

  return (
    <div>
      <h1>Fariha Najla Adihka</h1>
      <button onClick={handleAdd}>+</button>
      <h2>{value}</h2>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default Counter;
