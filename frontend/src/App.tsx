import React, { useState } from 'react';
import './App.css';
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from './components/theme';
import Main from './components/main/main';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const  toggleTheme = (event: any) => {
    setIsDarkTheme(event?.target?.checked)
  }

  return (
    <div className='app-wrapper'>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <>
          <GlobalStyles/>
            <Router>
              <Routes>
                <Route path="/onthisday/:month/:day"  element={<Main toggleDarkMode={toggleTheme}/>}/>
                <Route path="*"  element={<Main toggleDarkMode={toggleTheme}/>}/>
              </Routes>
            </Router>
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;

