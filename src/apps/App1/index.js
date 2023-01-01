import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { action1 } from "./actions/index";
import { select } from "./namespace";
const App1 = function () {
  const count = useSelector((state) =>
    select((st) => st.reducer1.value)(state)
  );
  const dispatch = useDispatch();
  const onbuttonClick = () => {
    dispatch(action1());
  };
  return (
    <div>
      <h3>Hello App1</h3>
      <p>This is App1 - {count}</p>
      <button onClick={onbuttonClick}>click me</button>
    </div>
  );
};
export default App1;
