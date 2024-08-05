import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NoteItem from './NoteItem';
import { CiDark, CiLight } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";

const NoteList = ({ dark, darkHandler }) => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  const notes = useSelector((state) => state.notes.notes);
  console.log(notes)

  const searchHandler = (e) => {
    setSearch(e.target.value);
    setPage(0);
    setCurrent(1);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );
  let displayedNotes = [];
  if (sort === 'complete') {
    displayedNotes = filteredNotes.filter((note) => note.completed === true);
  }
  else if (sort === 'incomplete') {
    displayedNotes = filteredNotes.filter((note) => note.completed !== true);
  }
  else {
    displayedNotes = filteredNotes;
  }

  const themeHandler = () => {
    darkHandler();
  }

  return (
    <div className="w-auto md:w-[750px] max-w-4xl mx-auto flex flex-col items-center justify-center">
      <div className="md:ml-0 w-auto md:w-[750px] h-[38px] mb-6 flex flex-col md:flex-row gap-4 mt-4 items-center">
        <div>
          <div className="relative w-full max-w-xs md:max-w-md lg:max-w-[600px]">
            <input
              type="text"
              placeholder="Search notes ...."
              value={search}
              onChange={searchHandler}
              className={`p-2 pr-10 w-[300px] md:w-[595px] h-[38px] border border-[#6C63FF] rounded-[5px] shadow-sm focus:ring-2 focus:ring-purple-500 ${dark ? "bg-black text-gray-300" : "bg-white"}`}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <FiSearch className={`text-gray-400 ${dark ? "text-gray-300" : "text-gray-400"}`} />
            </div>
          </div>
        </div>
        <div className="h-[38px] flex flex-row justify-between gap-32 md:gap-4">
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="p-2 w-[120px] h-[38px] border border-gray-300 rounded-[5px] text-white bg-[#6C63FF] shadow-sm focus:ring-2 focus:ring-purple-500"
          >
            <option value="all" className='bg-white text-[#6C63FF]'>All</option>
            <option value="complete" className='bg-white text-[#6C63FF]'>Complete</option>
            <option value="incomplete" className='bg-white text-[#6C63FF]'>Incomplete</option>
          </select>
          <div className="h-[38px] w-[38px] flex items-center justify-center bg-[#6C63FF] rounded-[5px] text-white hover:cursor-pointer" onClick={themeHandler}>
            {
              dark && (
                <CiLight className='h-[22px] w-[22px]' />
              )
            }
            {
              !dark && (<CiDark className='h-[22px] w-[22px]' />)
            }
          </div>
        </div>

      </div>

      <div className="list mt-8 md:mt-0">
        {displayedNotes.length === 0 ? (
          <div>
            <p className={`${dark ? "text-white" : "text-black"}`}>Empty...</p>
          </div>
        ) : (
          displayedNotes.map((note, i) => (
            <div key={note.id} className="p-4">
              <NoteItem dark={dark} note={note} index={i} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NoteList;
