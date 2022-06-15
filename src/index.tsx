import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from "react-redux"
import { store, persistor } from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react'

import { AstronautsMainPage } from './Pages/AstronautsMainPage'
import {AstronautsMainTwoPage} from './Pages/AstronautsMainTwoPage'
import {SignIn} from './Pages/SignIn'
import {SignUp} from './Pages/SignUp'
import {SinglePage} from './Pages/SinglePage'
import {Verify} from './Pages/Verify'
import { ResetPassword } from './Pages/ResetPassword'
import { NewPasswordPage } from './Pages/ResetPassword/NewPasswordPage'
import { AddPostPage } from './Pages/AddPost'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/main' element={<AstronautsMainPage/>}/>
        <Route path='/secondPage' element={<AstronautsMainTwoPage/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/resetPassword' element={<ResetPassword/>}/>
        <Route path='/newPassword' element={<NewPasswordPage/>}/>
        <Route path='/addPost' element={<AddPostPage/>}/>
        <Route path='/posts/:id' element={<SinglePage/>}/>
      </Route>
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
  </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
