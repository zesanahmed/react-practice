import { Dispatch } from "react";
type Tcounter = {
  counter: number;
  setCounter: Dispatch<React.SetStateAction<number>>;
};

const UseStateExample = ({ counter, setCounter }: Tcounter) => {
  return (
    <div>
      <p>Counter calculator</p>
      <p className="text-center text-2xl">{counter}</p>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-primary"
      >
        Increment
      </button>
    </div>
  );
};

export default UseStateExample;
