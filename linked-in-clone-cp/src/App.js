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

    const logOut = () => {
      setUser(null)
    }

    return (

   

    <div className="app">
        

        {!user ? <Login  setUser={setUser} /> : (
          <>
          {/* {console.log('User has logged in: Data looks like')}
          {console.log(user)} */}
          <Header user={user} logOut={logOut}  />
          <div className="app__body">
    
      <Sidebar user={user}/>     
     
      <Feed user={user} />
   
      </div>
      </>

        ) }

    
    </div>
  );
}

export default App;
