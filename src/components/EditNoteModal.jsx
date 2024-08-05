// EditNoteModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editNote } from '../store/actions/noteAction';

const EditNoteModal = ({ isOpen, onRequestClose, note }) => {
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
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Edit Note</h2>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="px-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out mb-2"
        />
        <div className="flex justify-end space-x-2 mt-4">
          <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:bg-green-600 transition duration-300 ease-in-out">
            Save
          </button>
          <button onClick={handleCancel} className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:bg-gray-600 transition duration-300 ease-in-out">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditNoteModal;
