import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store/store';
import TodoForm from './components/NoteForm';
import Home from './components/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>  
        <Routes>
          <Route path="/add" element={<TodoForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;