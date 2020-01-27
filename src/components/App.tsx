import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { appModule } from '../modules/app'
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
      <button onClick={() => dispatch(appModule.actions.add())}>add</button>
      <button onClick={() => dispatch(appModule.actions.remove())}>remove</button>
    </div>
  );
}

export default App;
