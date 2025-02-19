import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../features/counterSlice";
import "./counter.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1 className="counter-value">Counter: {count}</h1>
      <div className="counter-buttons">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => count > 0 && dispatch(decrement())} disabled={count === 0}>
          Decrement
        </button>
        <button onClick={() => count > 0 && dispatch(reset())} disabled={count === 0}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
