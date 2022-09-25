import { FC } from "react";
// import { useSelector } from "react-redux";
import { useAppSelector } from "../redux/hooks";

const CounterResult: FC = () => {
  const count = useAppSelector((state) => state.counter.displaycount);
  // const count = useSelector((state) => state.counter.displaycount);
  return <div className="result">{count}</div>;
};
export default CounterResult;
