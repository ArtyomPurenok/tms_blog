import React, { useEffect, useState } from 'react';
import {useTheme} from './features/theme';
import {usePosts} from './features/posts';

import {Button} from './components/Button';
import {useAppDispatch, useAppSelector} from './redux/hooks'
import {fetchPosts} from './features/posts';
import {postsData} from './redux/postsData';

function App() {
  const {theme, toggleTheme} = useTheme()
  const {posts, onLikePost, onDislikePost} = usePosts()

  // const posts = useAppSelector(state => state.posts.content)
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
        {posts?.map(post => {
          return (
            <div key={post.id}>
            <div style={{display: 'flex', flexDirection: 'column' }}>
              <span>{post.title}</span>
              <span>{String(post.like)}</span>
            </div>
            <Button 
            btnClass='secondary'
            functionLikeNumber={() => onLikePost(post.id)}
            btnTxt="Like"/>
            <Button 
            btnClass='secondary'
            functionLikeNumber={() => onDislikePost(post.id)}
            btnTxt="DisLike"/>
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default App;
