import React, { useEffect, useState } from 'react';
import {useTheme} from './features/theme';
import {usePosts} from './features/posts';

import {Button} from './components/Button';
import {useAppDispatch, useAppSelector} from './redux/hooks'
import {fetchPosts} from './features/posts';
import {postsData} from './redux/postsData';
import {signUp} from './features/auth';

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




  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setName(event.target.value)
}

const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setEmail(event.target.value)
}

const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setPassword(event.target.value)
}

const onConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setConfirmPassword(event.target.value)
}

const sumbutForm = (event: any) => {
  event.preventDefault()
  const formData = {name, email, password, confirmPassword}
  dispatch(signUp(formData))
  console.log(formData)
}

  return (
    <div className="App">
            <button name='Primary' className='Primary'>asfasfsa</button>
      <form action="">
      <input title="Name" value={name} onChange={onNameChange}/>
      <input title="Email" value={email} onChange={onEmailChange}/>
      <input type='password' title="Password" value={password} onChange={onPasswordChange}/>
      <input type='password' title="Confirm password" value={confirmPassword} onChange={onConfirmPasswordChange}/>
      <button name='Primary' onClick={sumbutForm} className='Primary'>SignUp</button>
      </form>
    </div>
  );
}

export default App;
