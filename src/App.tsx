import React from 'react';

import {Header} from './Header'
import {Footer} from './Footer'
import { ReactComponent as UserIcon } from './components/Icons/UserIcon.svg'

function App() {
  return (
    <div className="App">
      <Header HeaderUserIcon={UserIcon}/>
      <Footer/>
    </div>
  );
}

export default App;
