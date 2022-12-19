import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import Todo from "./components/Todo";
import TodoList from "./context/TodoContext";
import Modal from "./components/Modal";

function App() {
  const notify = () => toast("here is your toast");
  const [showModal, setShowModal] = useState(false);

  return (
    <TodoList>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className="max-w-2xl py-3 mx-auto">
        <h2 className="text-xl font-bold text-center">Todo App</h2>
        <div className="flex justify-between">
          <div>
            <button
              className="bg-indigo-500 p-2 text-white"
              onClick={() => setShowModal(true)}
            >
              Add Task
            </button>
          </div>
          <div>
            <select className="border-2">
              <option value={1}>1</option>
            </select>
          </div>
        </div>
        <div>
          <Todo />
        </div>
        <Toaster />
      </div>
    </TodoList>
  );
}

export default App;
