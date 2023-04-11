import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'

import { useGlobalContext } from './context'

const Sidebar = () => {
  // 调用 useGlobalContext;
  // 然后将 state 与 close function 注入；
  // 最后使用 Ternary Operator 调整 className
  const data = useGlobalContext();
  const {showSidebar, closeSidebar} = data;

  return <aside className={`${showSidebar ? 'sidebar show-sidebar' : 'sidebar'}`}>
    <div className='sidebar-header'>
      <img src={logo} className='logo' alt='coding addict'></img>
      <button className='close-btn' onClick={closeSidebar}>
        <FaTimes />
      </button>
    </div>
    <ul className='links'>
      {links.map((link) => {
        const {id, url, text, icon} = link;
        return <li key={id}>
          <a href={url}>{icon}{text}</a>
        </li>
      })}
    </ul>
    <ul className='social-icons'>
      {social.map((socialIcon) => {
        const {id, url, icon} = socialIcon;
        return <li key={id}>
          <a href={url}>{icon}</a>
        </li>
      })}
    </ul>
  </aside>
}

export default Sidebar
