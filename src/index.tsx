import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {AstronautsMainTwoPage} from './Pages/AstronautsMainTwoPage';
import {SignIn} from './Pages/SignIn';
import {SignUp} from './Pages/SignUp';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/secondPage' element={<AstronautsMainTwoPage/>}/>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
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
