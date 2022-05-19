import React, { useEffect, useState } from 'react';
import {useTheme} from './features/theme'

import {Button} from './components/Button';
import {useAppDispatch, useAppSelector} from './redux/hooks'
import {fetchPosts} from './features/posts';
import {postsData} from './redux/postsData';

function App() {
  const {theme, toggleTheme} = useTheme()

  const posts = useAppSelector(state => state.posts.content)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchPosts(postsData))
    } ,1000)
  } ,[])

  console.log(posts)
  return (
    <div className="App">

      <div className={`App theme--${theme}`}>
        <Button btnTxt="Primary" btnClass='primary' functionLikeNumber={toggleTheme}/>
      </div>

    </div>
  );
}

export default App;
