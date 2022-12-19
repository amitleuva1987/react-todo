import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export function useTodoContext() {
  return useContext(TodoContext);
}

function TodoList({ children }) {
  const [list, setList] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true);
  const [change, setChange] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("todoList") !== null) {
      const todoList = JSON.parse(localStorage.getItem("todoList"));
      if (todoList) {
        setList(todoList);
      }
    }
    setInitialLoad(false);
  }, []);

  useEffect(() => {
    if (initialLoad === false) {
      const local_list = JSON.stringify(list);
      localStorage.setItem("todoList", local_list);
    }
  }, [list, change]);

  return (
    <TodoContext.Provider value={{ list, setList, change, setChange }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoList;
