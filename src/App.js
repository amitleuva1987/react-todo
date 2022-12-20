import logo from "./logo.svg";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import Todo from "./components/Todo";
import Filter from "./components/Filter";
import TodoL from "./components/TodoList";
import TodoList from "./context/TodoContext";

function App() {
  return (
    <TodoList>
      <div className="max-w-2xl py-3 mx-auto">
        <h2 className="text-xl font-bold text-gray-500 text-center uppercase mt-5">
          Todo App
        </h2>
        <Filter />
        <div>
          <TodoL />
        </div>
        <Toaster />
      </div>
    </TodoList>
  );
}

export default App;
