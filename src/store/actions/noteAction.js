import { v4 as uuidv4 } from 'uuid';

export const addNote = (note) => ({
  type: 'ADD_NOTE',
  payload: {
    id: uuidv4(),
    title: note.title,
    description: note.description,
    date: note.date,
    completed: false,
  },
});

export const deleteNote = (id) => ({
  type: 'DELETE_NOTE',
  payload: id,
});

export const toggleNote = (id) => ({
  type: 'TOGGLE_NOTE',
  payload: id,
});

export const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  payload: { id, updates },
});

export const searchNote = (term) => ({
  type: 'SEARCH_NOTE',
  payload: term,
});

export const loadNotes = (notes) => ({
  type: 'LOAD_NOTES',
  payload: notes,
});