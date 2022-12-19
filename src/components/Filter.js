import { useEffect, useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import Modal from "./Modal";

function Filter() {
  const [showModal, setShowModal] = useState(false);
  const { sort, setSort } = useTodoContext();

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
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
          <select
            name="status"
            className="border-2 p-2 flex mt-3"
            onChange={(e) => handleChange(e)}
          >
            <option value="">Select Status</option>
            <option value="Done">Done</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Filter;
