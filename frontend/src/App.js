import React from 'react';
import { CookiesProvider } from 'react-cookie';
// import Main from './components/Main.js';
// import Login from './components/Login.js';
import Router from './Router.js'
import './App.css';

function App() {
  return (
     <CookiesProvider>
    <div className="App">
        <Router/>
    </div>
    </CookiesProvider>
  );
}

export default App;
