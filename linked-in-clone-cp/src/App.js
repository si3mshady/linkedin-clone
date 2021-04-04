import React, {useState} from 'react';
import { selectUser } from './features/userSlice';
import {useSelector} from 'react-redux'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Login from './components/Login';
import './App.css';


function App() {
    // const user = useSelector(selectUser)
    const [user, setUser] = useState(null)  

    return (


    <div className="app">
        <Header />

        {!user ? <Login setUser={setUser} /> : (

          <div className="app__body">
      {/* Sidebar */}
      <Sidebar />     
      {/* Feed */}
      <Feed />
        {/* widget */}

      </div>
        ) }

    
    

    {/* header  */}
  
      {/* App Body */}
     
    
    </div>
  );
}

export default App;
