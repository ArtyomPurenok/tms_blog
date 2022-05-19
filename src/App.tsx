import React, { useState } from 'react';

import {Link} from 'react-router-dom';
import {LikeBox} from './components/LikeBox';
import {Button} from './components/Button';


function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <div className="App">
      <div className={`App theme--${theme}`}>
        <Button txt="Primary" className='primary' onClick={toggleTheme}/>
      </div>
      {/* <nav>
        <Link to='/posts'>Posts</Link>
        <Link to='/posts/1'>Post 1</Link>
        <Link to='/posts/add'>Add post</Link>
        <Link to='/search'>Search</Link>
      </nav> */}
    </div>
  );
}

export default App;
