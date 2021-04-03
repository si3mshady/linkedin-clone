import React from 'react';
import { Counter } from './features/counter/Counter';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
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
      {/* Feed */}
      <Feed />
        {/* widget */}

      </div>
    
    </div>
  );
}

export default App;
