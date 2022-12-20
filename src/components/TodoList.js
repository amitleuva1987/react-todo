import { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

function TodoList() {
  const { list, setList, change, setChange, sort } = useTodoContext();
  const [currentEditIndex, setCurrentEditIndex] = useState();
  const [editvalue, setEditValue] = useState("");

  const handleEdit = (index) => {
    if (editvalue === "") {
      alert("please enter task name");
      return false;
    }

    const todo_list = list;
    todo_list[index].taskname = editvalue;
    setList(todo_list);
    setChange(!change);
    setCurrentEditIndex(null);
    toast.success("Task Edited successfully!");
  };

  const handleCompleteTask = (index) => {
    const todo_list = list;
    todo_list[index].status = "Done";
    setList(todo_list);
    setChange(!change);
    toast.success("Task Edited successfully!");
  };

  const handleEditTask = (event) => {
    setEditValue(event.target.value);
  };

  const removeTask = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setList((current) => current.filter((current) => current !== item));
        Swal.fire("Deleted!", "Your task has been deleted.", "success");
      }
    });
  };

  const enableEdit = (index) => {
    setCurrentEditIndex(index);
    setEditValue(list[index].taskname);
  };

  const SortedList = list.filter((list) => {
    if (sort === "") {
      return true;
    }
    return list.status === sort;
  });

  const listItems = SortedList.map((item, index) => (
    <li key={index} className="bg-gray-200 px-3 py-2 mt-2">
      <div className="flex justify-between">
        <div>
          <input
            type="checkbox"
            name="chktask"
            className="form-checkbox"
            checked={item.status == "Done" ? true : false}
            onClick={() => handleCompleteTask(index)}
          />
          <span
            className={
              "uppercase text-gray-600 ml-2 " +
              (item.status == "Done" ? "line-through" : "")
            }
          >
            {item.taskname}{" "}
          </span>
          <br /> <span className="text-sm">create at : {item.task_added}</span>
        </div>
        <div className="space-x-2">
          <span className="cursor-pointer" onClick={() => enableEdit(index)}>
            Edit
          </span>
          <span className="cursor-pointer" onClick={() => removeTask(item)}>
            Delete
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          onChange={(e) => handleEditTask(e)}
          className={`border-2 border-blue-300 p-2 ${
            currentEditIndex == index ? "block" : "hidden"
          }`}
          value={editvalue}
        />
        <button
          className={`bg-indigo-500 p-3 text-white ${
            currentEditIndex == index ? "block" : "hidden"
          }`}
          onClick={() => handleEdit(index)}
        >
          SAVE
        </button>
      </div>
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default TodoList;
