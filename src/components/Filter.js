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
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        parentTask=""
        listIndex=""
      />
      <div className="flex justify-between">
        <div>
          <button
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={() => setShowModal(true)}
          >
            Add Task
          </button>
        </div>
        <div>
          <select
            name="status"
            className="form-select "
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
