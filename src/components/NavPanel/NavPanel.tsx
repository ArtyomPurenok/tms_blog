import React, { useState } from "react";
import './NavPanel.scss';

import {NavPanelContent} from './NavPanelContent';


const contentBtnNavPanel = [
    { nameBtn: 'All', content: 'London is the capital city of England.' },
    { nameBtn: 'My favorites', content: 'Paris is the capital of France.' },
    { nameBtn: 'Popular', content: 'Tokyo is the capital of Japan.' },
  ];


export const NavPanel = () => {

  const [ active, setActive ] = React.useState(0);
  const openTab = (e: any) => setActive(e.target.dataset.index);
  

    return <div className="nav-panel">
          <div className="nav-panel__btns--div">
            {contentBtnNavPanel.map((el, index) => (
              <button
                className={`nav-panel__btn ${index === active ? 'active' : ''}`}
                onClick={openTab}
                data-index={index}
              >{el.nameBtn}</button>
            ))}
          </div>
          {contentBtnNavPanel && <NavPanelContent {...contentBtnNavPanel[active]} />}
        </div>
      ;
            }