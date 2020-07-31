import React from 'react'
import {NavLink} from 'react-router-dom'
import './Toolbar.scss'

const Toolbar = ({links}) => {
  return <div className="toolbar">
    {links.map(link => <NavLink to={link.url}>
        <div>{link.title}</div>
      </NavLink>
    )}
  </div>;
}

export default Toolbar;