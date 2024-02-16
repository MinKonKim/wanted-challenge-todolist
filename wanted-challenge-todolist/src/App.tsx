import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch, increment } from "./store/store.ts";
// import { Dispatch } from 'redux'

function App() {
  const 꺼내온거 = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();
  // const dispatch: Dispatch = useDispatch();

  return (
    <div className="App">
      {꺼내온거.counter.value}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        버튼
      </button>
    </div>
  );
}

export default App;
