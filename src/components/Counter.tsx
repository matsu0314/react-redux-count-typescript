import { FC } from "react";

import CounterResult from "./CounterResult";
import CounterBtn from "./CounterBtn";
import CounterSelect from "./CounterSelect";

const Counter: FC = () => {
  return (
    <div>
      <CounterResult />
      <CounterBtn />
      <CounterSelect />
    </div>
  );
};
export default Counter;
