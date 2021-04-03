import React from 'react';
import { Counter } from './features/counter/Counter';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import './App.css';


function App() {
  return (
    <div className="app">
      {/* header  */}
      <Header />
      {/* App Body */}
      <div className="app__body">
      {/* Sidebar */}
      <Sidebar />       
        {/* widget */}

      </div>
    
    </div>
  );
}

export default App;
