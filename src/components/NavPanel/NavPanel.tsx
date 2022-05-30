import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tabsValue } from "../../redux/reducer/StateTabs";
import './NavPanel.scss';

import {NavPanelContent} from './NavPanelContent';

type Content = {
  Content?: any
}




export const NavPanel = ({Content}: Content) => {
  const state = useSelector((state: any) => state.tabs);
  const [ active, setActive ] = React.useState(0);

  useEffect(() => {
    console.log(state.state)
    setActive(state.state)
  }, [state])


  const dispatch = useDispatch();


  const openTab = (e: any) => dispatch(tabsValue(e.target.dataset.index));

  const contentBtnNavPanel = [
    { nameBtn: 'All', content: <Content/> },
    { nameBtn: 'My favorites', content: 'My favorites txt' },
    { nameBtn: 'Popular', content: 'Popular txt' },
  ];
  

    return <div className="nav-panel">
          <div className="nav-panel__btns--div">
            {contentBtnNavPanel.map((el, index) => (
              <button
                key={index}
                className={`nav-panel__btn ${index === +(active) ? 'nav-panel__btn--active' : ''}`}
                onClick={openTab}
                data-index={index}
              >{el.nameBtn}</button>
            ))}
          </div>
          {contentBtnNavPanel && <NavPanelContent {...contentBtnNavPanel[active]} />}
        </div>
            }