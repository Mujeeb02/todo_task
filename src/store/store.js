import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './reducers/noteReducer';

const persistedNotes = JSON.parse(localStorage.getItem('notes')) || [];

const store = configureStore({
  reducer: {
    notes: noteReducer,
  },
  preloadedState: {
    notes: { notes: persistedNotes },
  },
  devTools: process.env.NODE_ENV !== 'production',
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('notes', JSON.stringify(state.notes.notes));
});

export default store;