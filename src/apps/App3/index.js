import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { select } from "./namespace";
import { action1 } from "./actions/index";
const App3 = function () {
  const count = useSelector((state) =>
    select((st) => st.reducer1.value)(state)
  );
  const dispatch = useDispatch();
  const onbuttonClick = () => {
    dispatch(action1());
  };
  return (
    <div>
      <h3>Hello App3</h3>
      <p>This is App3 - {count}</p>
      <button onClick={onbuttonClick}>click me</button>
    </div>
  );
};
export default App3;
