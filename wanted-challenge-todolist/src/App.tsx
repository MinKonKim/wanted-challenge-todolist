import { Provider } from "react-redux";
import TodoList from "./components/List/TodoList";
import { store } from "./store/store";
// import { Dispatch } from 'redux'

function App() {
  return (
    <Provider store={store}>
      <div>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
