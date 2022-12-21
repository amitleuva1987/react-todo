import { useEffect, useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import toast from "react-hot-toast";

function Modal({ showModal, setShowModal, parentTask, listIndex }) {
  const { list, setList, change, setChange } = useTodoContext();
  const [task, setTask] = useState([]);
  const [enableedit, setEnableEdit] = useState(false);

  const handleChange = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

  const handleEdit = () => {
    if (task.taskname === "") {
      alert("please enter task name");
      return false;
    }
    if (task.status === "") {
      alert("please enter task name");
      return false;
    }
    const todo_list = list;
    todo_list[listIndex] = task;
    setList(todo_list);
    setChange(!change);
    toast.success("Task Edited successfully!");
    setShowModal(false);
  };

  const handleSubmit = () => {
    const current = new Date();
    const time = current.toLocaleTimeString("en-US");
    const date = `${current.getDate()}-${
      current.getMonth() + 1
    }-${current.getFullYear()}`;

    const taskDetails = task;
    taskDetails.task_added = date + " " + time;

    if (task.taskname === "") {
      alert("please enter task name");
      return false;
    }

    if (task.status === "") {
      alert("please enter task name");
      return false;
    }

    setList([...list, taskDetails]);
    setTask({ taskname: "", task_added: "", status: "" });
    setShowModal(false);
  };

  useEffect(() => {
    setTask(parentTask);
    if (parentTask.taskname && parentTask.taskname !== "") {
      setEnableEdit(true);
    }
  }, [parentTask]);

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold uppercase ">
                    Create a Task
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-6 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black-400 opacity-6 pb-1 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <input
                    type="text"
                    className="form-input block w-full"
                    name="taskname"
                    placeholder="Task name"
                    onChange={(e) => handleChange(e)}
                    value={task.taskname}
                  />
                  <select
                    name="status"
                    className="form-select block mt-3 w-full"
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="">Select Status</option>
                    <option value="Done">Done</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {enableedit ? (
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handleEdit()}
                    >
                      SAVE
                    </button>
                  ) : (
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handleSubmit()}
                    >
                      ADD
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Modal;
