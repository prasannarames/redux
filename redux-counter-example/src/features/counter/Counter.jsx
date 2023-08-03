import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByValue } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementValue, setIncrementValue] = useState(0);

  let addValue = Number(incrementValue) || 0;

  const resetAll = () => {
    setIncrementValue(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input
          type="text"
          value={incrementValue}
          onChange={(e) => setIncrementValue(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => dispatch(incrementByValue(addValue))}>
          Add value
        </button>
        <button onClick={resetAll}>RESET</button>
      </div>
    </section>
  );
};

export default Counter;
