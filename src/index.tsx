import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom';
import {AddPost} from './router/AddPost/addPost';
import {Post} from './router/post';
import {Posts} from './router/posts';
import {Search} from './router/search';

import { LikeBox } from './components/LikeBox';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/posts/testStar' element={<Posts/>}/>
      <Route path='/LikeBox' element={<LikeBox/>}/>
      <Route path='/posts/:id' element={<Post/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route
      path='*'
      element={
        <main style={{padding:'1em'}}>
          <p>404 Not Found</p>
        </main>
      }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
