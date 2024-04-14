import React, { useState } from 'react';
import './App.css';
import AppHeader from './components/header/header';
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from './components/theme';

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <div className='app-wrapper'>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <>
          <GlobalStyles/>
            <Router>
              <Routes>
                <Route path="/onthisday/:month/:day" element={<AppHeader darkMode={isDarkTheme} toggleDarkMode={toggleTheme}/>} />
              </Routes>
            </Router>
        </>
      </ThemeProvider>
    </div>


  );
}

export default App;

