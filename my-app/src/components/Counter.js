import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/store.js";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const isOpen = useSelector((state) => state.counter.isOpen);
  const dispatch = useDispatch();
  return (
    <>
      {isOpen && (
        <div className="absolute top-[150px] left-[33%] w-[33%] h-[200px] border-black border-2 rounded-lg">
          <h1 className="bg-purple-600 h-[20%] w-full block text-white font-bold">
            Counter
          </h1>
          <button onClick={() => dispatch(counterActions.increment())}>
            +1
          </button>
          <div className="text-3xl font-bold underline">{counter}</div>
          <button
            disabled={counter <= 0}
            onClick={() => dispatch(counterActions.decrement())}
          >
            -1
          </button>
          <div className="flex justify-around items-center">
            <div
              className="bg-purple-600 text-white w-20 h-12 text-center rounded-lg p-[10px] "
              onClick={() => dispatch(counterActions.closeModal())}
            >
              Close
            </div>
            <div
              className="bg-purple-600 text-white w-20 h-12 text-center rounded-lg p-[10px]"
              onClick={() => dispatch(counterActions.closeModal())}
            >
              Save
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Counter;
