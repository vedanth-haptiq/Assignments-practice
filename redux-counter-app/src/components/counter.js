import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../reducers/counterSlice";
import { INCREASE , DECREMENT ,RESET ,COUNTER_TITLE} from "../constant/constantString";
import "./counter.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1 className="counter-value">{COUNTER_TITLE}: {count}</h1>
      <div className="counter-buttons">
        <button onClick={() => dispatch(increment())}>{INCREASE}</button>
        <button onClick={() => count > 0 && dispatch(decrement())} disabled={count === 0}>
          {DECREMENT}
        </button>
        <button onClick={() => count > 0 && dispatch(reset())} disabled={count === 0}>
          {RESET}
        </button>
      </div>
    </div>
  );
};

export default Counter;
