import React from 'react';
import './App.css';
import AppHeader from './components/header/header';
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/onthisday/:month/:day" element={<AppHeader />} />
      </Routes>
    </Router>
  );
}

export default App;

