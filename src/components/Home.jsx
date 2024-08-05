import React, { useState } from 'react';
import NoteForm from './NoteForm';
import NoteList from "./NoteList"

const Home = () => {
  const[dark,setDark]=useState(false);
  const [isNoteFormOpen, setIsNoteFormOpen] = useState(false);

  const openNoteForm = () => setIsNoteFormOpen(true);
  const closeNoteForm = () => setIsNoteFormOpen(false);
  const darkHandler=()=>{
    setDark((prevVal=>!prevVal))
  }

  return (
    <div className={`min-h-screen w-screen p-8 ${dark?"bg-black":"bg-white"}`}>
      <div className='flex items-center justify-center'>
        <h2 className={`dtext-[26px] font-[500] leading-[38.87px] text-[#252525] h-[39px] w-[130px] ${dark?"text-gray-100":"text-[#252525]"}`}>TODO LIST</h2>
      </div>
      {/* Your NoteList component */}
      <NoteList dark={dark} darkHandler={darkHandler}/>

      <div className="mt-8 w-[50px] h-[50px] flex justify-center ml-[75%] items-center mb-4">
        <button
          onClick={openNoteForm}
          className="px-4 py-2 bg-blue-500 text-[#F7F7F7] text-lg rounded-[100%] shadow-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          +
        </button>
      </div>
      <NoteForm dark={dark} isOpen={isNoteFormOpen} onRequestClose={closeNoteForm} />
    </div>
  );
};

export default Home;
