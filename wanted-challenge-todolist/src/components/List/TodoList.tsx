import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../../store/features/todoSlice";
import { RootState } from "../../store/store";
import Modal from "../Modal";

function TodoList() {
  const [input, setInput] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedText, setSelectedText] = useState("");
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleRemoveClick = (id: number, text: string) => {
    setSelectedId(id);
    setSelectedText(text);
    setModalOpen(true);
  };

  const handleConfirmRemove = () => {
    if (selectedId !== null) {
      dispatch(removeTodo(selectedId));
    }
    setSelectedId(null);
    setSelectedText("");
    setModalOpen(false);
  };

  return (
    <div className="max-w-md mx-auto p-5">
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <input
          className="border-2 border-gray-200 rounded w-full p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          className="bg-blue-500 text-white rounded px-4 py-2 w-full md:w-auto"
          onClick={handleAddTodo}
        >
          추가
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="border-b border-gray-200 p-2 flex justify-between"
          >
            <span>{todo.text}</span>
            <button
              className="text-red-500 ml-2"
              onClick={() => handleRemoveClick(todo.id, todo.text)}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-2xl">
          이 "{selectedText}"을(를) 삭제하시겠습니까?
        </h2>
        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row">
          <button
            type="button"
            className="inline-flex justify-center md:w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
            onClick={handleConfirmRemove}
          >
            예
          </button>
          <button
            type="button"
            className="inline-flex justify-center md:w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:text-sm"
            onClick={() => setModalOpen(false)}
          >
            아니요
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default TodoList;
