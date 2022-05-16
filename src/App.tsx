import React from 'react';

import {Link, NavLink} from 'react-router-dom';
import {LikeBox} from './components/LikeBox';


function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to='/posts'>Posts</NavLink>
        <Link to='/posts/1'>Post 1</Link>
        <Link to='/posts/add'>Add post</Link>
        <Link to='/search'>Search</Link>
      </nav>
    </div>
  );
}

export default App;
