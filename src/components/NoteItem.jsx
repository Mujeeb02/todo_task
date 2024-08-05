// NoteItem.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote, toggleNote } from '../store/actions/noteAction';
import { FaEdit, FaTrash, FaCheckCircle } from 'react-icons/fa';
import EditNoteModal from './EditNoteModal';

const NoteItem = ({ dark,note, index }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  const handleToggle = () => {
    dispatch(toggleNote(note.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const closeEditModal = () => {
    setIsEditing(false);
  };

  return (
    <div className={`w-[525px] h-[26px] rounded-lg p-4 mb-4 flex flex-row justify-between items-center ${dark?"bg-black":"bg-white"}`}>
      <div className="flex justify-center items-start gap-4">
        <div>
          <input
            type="checkbox"
            onClick={handleToggle}
            disabled={note.completed}
            checked={note.completed}
            className={`w-[26px] h-[26px] border ${note.completed===true ? 'bg-[#6C63FF] text-white' : 'bg-white'}`}
          />
        </div>

        <div>
          <h3 className={`text-[20px] leading-[20px] font-[500]  ${!note.completed ? "text-[#252525]" : "text-[#25252580] opacity-[50%] line-through"} ${dark?"text-white":"text-black"}`}>{note.title} #{index + 1}</h3>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <button onClick={handleEdit} className="text-[#CDCDCD] hover:text-yellow-600 mx-1">
          <FaEdit size={20} />
        </button>
        <button onClick={handleDelete} className="text-[#CDCDCD] hover:text-red-600 mx-1">
          <FaTrash size={20} />
        </button>
      </div>
      {isEditing && (
        <EditNoteModal
          isOpen={isEditing}
          onRequestClose={closeEditModal}
          note={note}
          dark={dark}
        />
      )}
    </div>
  );
};

export default NoteItem;
