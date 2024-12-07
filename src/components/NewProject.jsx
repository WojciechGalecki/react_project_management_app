import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAddProject, onCancel }) {
  const inputTitle = useRef(null);
  const inputDescription = useRef(null);
  const inputDueDate = useRef(null);
  const modal = useRef();

  function handleSave() {
    const title = inputTitle.current.value;
    const description = inputDescription.current.value;
    const dueDate = inputDueDate.current.value;

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAddProject({
      title: title,
      description: description,
      dueDate: dueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">
          Title, desciption and due date are required!
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="TITLE" type="text" ref={inputTitle} />
          <Input label="DESCRIPTION" textarea ref={inputDescription} />
          <Input label="DUE DATE" type="date" ref={inputDueDate} />
        </div>
      </div>
    </>
  );
}
