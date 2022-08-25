import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from '../Login/Login';
import Homepage from '../Homepage/Homepage';
import People from '../People/People';
import Hobbies from '../Hobbies/Hobbies';

const Navbar = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/people'>People</Link>
            </li>
            <li>
              <Link to='/hobbies'>Hobbies</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.
            
            <Switch> has been renamed to <Route> in v6 */}

        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/people' element={<People />}></Route>
          <Route path='/hobbies' element={<Hobbies />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default Navbar;
