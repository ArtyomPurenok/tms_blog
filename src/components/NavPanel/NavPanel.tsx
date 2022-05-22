import React, { useState } from "react";
import './NavPanel.scss';

import {NavPanelBtn} from './NavPanelBtn';

const items = [
    { title: 'All', content: 'London is the capital city of England.' },
    { title: 'My favorites', content: 'Paris is the capital of France.' },
    { title: 'Popular', content: 'Tokyo is the capital of Japan.' },
  ];



export const NavPanel = () => {
    const TabContent = ({content}: any) => (
        <div className="tabcontent">
          <div>{content}</div> 
        </div>
      );
      
    const [ active, setActive ] = React.useState(0);
    const openTab = (e: any) => setActive(e.target.dataset.index);




    return <div>
          <div className="tab">
            {items.map((el, index) => (
              <button
                className={`tablinks ${index === active ? 'active' : ''}`}
                onClick={openTab}
                data-index={index}
              >{el.title}</button>
            ))}
          </div>
          {items && <TabContent {...items[active]} />}
        </div>
      ;
  










    // return <div className="nav-panel">
    //     <NavPanelBtn name='All'/>
    //     <NavPanelBtn name='My favorites'/>
    //     <NavPanelBtn name='Popular'/>
    // </div>
            }