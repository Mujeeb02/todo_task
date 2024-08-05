// NoteForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../store/actions/noteAction';
import { useNavigate } from 'react-router-dom';
import Modal from "react-modal"

const NoteForm = ({ dark,isOpen,  onRequestClose}) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSave = () => {
    if (title.trim() === '') return; // Do not submit if title is empty
    dispatch(addNote({ title }));
    navigate('/'); // Redirect to home after saving
    onRequestClose(); // Close the modal
  };

  const handleCancel = () => {
    navigate('/'); // Redirect to home on cancel
    onRequestClose(); // Close the modal
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className={`mt-[118px] ml-[50%] -translate-x-[50%] flex flex-col items-center rounded-[16px] justify-center shadow-md w-[300px] md:w-[500px] h-[289px] bg- ${dark?"bg-[black]":"bg-[#F7F7F7]"}`}>
      <div className='flex items-center justify-center'>
        <h2 className={`text-[26px] font-[500] leading-[38.87px] h-[39px] w-[135px] ${dark?"text-white":"text-[#252525]"}`}>NEW NOTE</h2>
      </div>
      <div className='flex flex-col gap-[100px] mt-4'>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Input your note..."
          className={`w-auto md:w-[400px] h-[38px] px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out mb-2 ${dark?"bg-black text-gray-300":"bg-white"}`}
        />
        <div className='flex justify-between mt-[24] gap-4 md:gap-0'>
          <button type="submit" onClick={handleCancel} className={`w-[110px] h-[38px] rounded-[5px] border-[1px] border-[#6C63FF] mt-2 px-4 py-2  text-[#6C63FF] shadow-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out ${dark?"bg-black":"bg-white"}`}>
            Cancel
          </button>
          <button onClick={handleSave} className="w-[110px] h-[38px] rounded-[5px] mt-2 px-4 py-2 bg-[#6C63FF] text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out">
            Apply
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default NoteForm;
