import React from 'react'
import {NavLink} from 'react-router-dom'
import './Sidebar.scss'

const Sidebar = ({links}) => {
  return <div className="sidebar">
    {links.map(link => <NavLink to={link.url}>
        <div>{link.title}</div>
      </NavLink>
    )}
  </div>
}

export default Sidebar