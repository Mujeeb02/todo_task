  const initialState = {
    notes: [],
  };

  const noteReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NOTE':
        return {
          ...state,
          notes: [...state.notes, action.payload],
        };
      case 'DELETE_NOTE':
        return {
          ...state,
          notes: state.notes.filter((note) => note.id !== action.payload),
        };
      case 'TOGGLE_NOTE':
        return {
          ...state,
          notes: state.notes.map((note) =>
            note.id === action.payload ? { ...note, completed: !note.completed } : note
          ),
        };
      case 'EDIT_NOTE':
        return {
          ...state,
          notes: state.notes.map((note) =>
            note.id === action.payload.id ? { ...note, ...action.payload.updates } : note
          ),
        };
      case 'SEARCH_NOTE':
        return {
          ...state,
          searchTerm: action.payload,
        };
      case 'LOAD_NOTES':
        return {
          ...state,
          notes: action.payload,
        };
      default:
        return state;
    }
  };

  export default noteReducer;