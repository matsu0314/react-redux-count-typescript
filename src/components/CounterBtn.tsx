import { plus, minus, reset } from "../redux/counterSlice";
// import { useDispatch } from "react-redux";
import { useAppDispatch } from "../redux/hooks";

const CounterBtn = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <button className="plus" onClick={() => dispatch(plus())} value="+">
        +
      </button>
      <button className="minus" onClick={() => dispatch(minus())} value="-">
        -
      </button>
      <br />
      <button className="reset" onClick={() => dispatch(reset())} value="reset">
        reset
      </button>
    </>
  );
};

export default CounterBtn;
