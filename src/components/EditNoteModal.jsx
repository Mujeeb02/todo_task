// EditNoteModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editNote } from '../store/actions/noteAction';

const EditNoteModal = ({ dark, isOpen, onRequestClose, note }) => {
  const [newTitle, setNewTitle] = useState(note.title);
  const [newDescription, setNewDescription] = useState(note.description);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(editNote(note.id, { title: newTitle, description: newDescription }));
    onRequestClose();
  };

  const handleCancel = () => {
    onRequestClose();
    setNewTitle(note.title);
    setNewDescription(note.description);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className={`flex items-center justify-center  mt-[200px] -ml-[70px] md:ml-[40px]`}>
      <div className={`w-auto p-6 rounded-md shadow-lg md:w-full max-w-md ${dark ? "bg-black" : "bg-white"}`}>
        <h2 className={`text-2xl font-bold mb-4 pl-[35%] ${dark?"text-gray-300":"text-black"}`}>Edit Note</h2>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className={`px-4 py-2 w-full border border-blue-500 rounded-md shadow-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out mb-2 ${dark?"bg-black text-gray-300":"bg-white"}`}
        />
        <div className="flex justify-between space-x-2 mt-4">
          <button onClick={handleSave} className="w-[110px] h-[38px] rounded-[5px] mt-2 px-4 py-2 bg-[#6C63FF] text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out">
            Save
          </button>
          <button onClick={handleCancel} className={`w-[110px] h-[38px] rounded-[5px] border-[1px] border-[#6C63FF] mt-2 px-4 py-2  text-[#6C63FF] shadow-sm focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out ${dark ? "bg-black" : "bg-white"}`}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditNoteModal;
