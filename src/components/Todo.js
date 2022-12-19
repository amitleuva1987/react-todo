import { useEffect, useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import TodoList from "./TodoList";

function Todo() {
  const { list, setList } = useTodoContext();
  const [task, setTask] = useState([]);

  const handleChange = (e) => {
    const current = new Date();
    const time = current.toLocaleTimeString("en-US");
    const date = `${current.getDate()}-${
      current.getMonth() + 1
    }-${current.getFullYear()}`;

    const taskDetail = {
      taskname: e.target.value,
      task_added: date + " " + time,
      status: "pending",
    };

    setTask(taskDetail);
  };

  const handleSubmit = () => {
    if (task.taskname === "") {
      alert("please enter task name");
      return false;
    }

    setList([...list, task]);
    setTask({ taskname: "", task_added: "", status: "" });
  };

  return (
    <>
      <div className="flex justify-center">
        <input
          type="text"
          name="taskname"
          className="border-2 p-2"
          onChange={handleChange}
          value={task.taskname}
        />
      </div>
      <div className="flex justify-center mt-5">
        <button className="p-3 bg-indigo-500 text-white" onClick={handleSubmit}>
          Create
        </button>
      </div>
      <TodoList />
    </>
  );
}

export default Todo;
