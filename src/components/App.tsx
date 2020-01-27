import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from '../modules/app'
import { StoreState } from "../store";

const App: React.FC = () => {
  // const dispatch = useDispatch();
  const dispatch = useDispatch();
  const { count } = useSelector(
    (state: StoreState) => state.app
  )

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => dispatch(add())}>add</button>
      <button onClick={() => dispatch(remove())}>remove</button>
    </div>
  );
}

export default App;
