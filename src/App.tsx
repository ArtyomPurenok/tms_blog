import React from 'react';

import {Link} from 'react-router-dom';
import {LikeBox} from './components/LikeBox';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/posts'>Posts</Link>
        <Link to='/posts/1'>Post 1</Link>
        <Link to='/posts/add'>Add post</Link>
        <Link to='/search'>Search</Link>
      </nav>
    </div>
  );
}

export default App;
