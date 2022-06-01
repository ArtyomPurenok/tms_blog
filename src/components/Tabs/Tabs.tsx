import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { tabsValue } from "../../redux/reducer/StateTabs"
import './Tabs.scss'

import {TabsContent} from './TabsContent'
import { TabAll } from "./AllTabs/TabAll"
import {TabFavorites} from './AllTabs/TabFavorites'


type Content = {
  Content?: any
  Favorites?: any
}




export const Tabs = ({Content, Favorites}: Content) => {
  const state = useSelector((state: any) => state.tabs);
  const [ active, setActive ] = React.useState(0);

  useEffect(() => {
    setActive(state.state)
  }, [state])


  const dispatch = useDispatch();


  const openTab = (e: any) => dispatch(tabsValue(e.target.dataset.index));

  const contentBtnTabs = [
    { nameBtn: 'All', content: <TabAll/> },
    { nameBtn: 'My favorites', content: (<TabFavorites/> ) },
    { nameBtn: 'Popular', content: 'Popular txt' },
  ];
  

    return <div className="tabs">
          <div className="tabs__btns--div">
            {contentBtnTabs.map((el, index) => (
              <button
                key={index}
                className={`tabs__btn ${index === +(active) ? 'tabs__btn--active' : ''}`}
                onClick={openTab}
                data-index={index}
              >{el.nameBtn}</button>
            ))}
          </div>
          {contentBtnTabs && <TabsContent {...contentBtnTabs[active]} />}
        </div>
            }