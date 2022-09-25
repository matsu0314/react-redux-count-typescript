import { useDispatch } from "react-redux";
import { numSetting } from "../redux/counterSlice";

const CounterSelect = () => {
  const dispatch = useDispatch();

  const selectChange = (e) => {
    const action = numSetting(Number(e.target.value));
    dispatch(action);
  };
  return (
    <div className="counter-select">
      <select onChange={selectChange}>
        <option value="1">1ずつ増減する</option>
        <option value="5">5ずつ増減する</option>
        <option value="10">10ずつ増減する</option>
      </select>
    </div>
  );
};

export default CounterSelect;
