import {useSelector,useDispatch} from "react-redux";

import { counterActions } from '../store/store.js'

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const isOpen = useSelector((state) => state.counter.isOpen);
  console.log(isOpen)
  const dispatch = useDispatch();
  return (
    <>
   <nav>
    <ul className="border-red-400 border-b-2 h-20 w-full flex items-center justify-between p-4">
        <li className="bg-slate-500 text-cyan-50 w-[15%] text-center h-full" onClick={()=>dispatch(counterActions.openModal())}>openCounter</li>
        <li className="bg-slate-500 text-cyan-50 w-[15%] text-center h-full"> {`isopen is ${isOpen}`}</li>
        <li className="bg-slate-500 text-cyan-50 w-[15%] text-center h-full">{counter-1}</li>
        <li className="bg-slate-500 text-cyan-50 w-[15%] text-center h-full">{counter}</li>
        <li className="bg-slate-500 text-cyan-50 w-[15%] text-center h-full">{counter+1}</li>
    </ul>
    </nav>
    </>
  );
};

export default Counter;