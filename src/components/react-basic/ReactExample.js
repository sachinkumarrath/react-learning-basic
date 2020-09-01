import React, { Component } from 'react'

import Sidebar from '../common/Sidebar'
import { ReactBasicRouter } from '../../AppRouter'

export default class ReactExample extends Component {
  render() {
    const links = [{
      url: "/react-basic/counter",
      title: "Counter"
    }, {
      url: "/react-basic/context",
      title: "Context API"
    }]
    
    return <div className="content-container">
      <Sidebar links={links} />
      <div className="content-area">
        <h3>React Examples</h3>
        <ReactBasicRouter />
      </div>
    </div>
  }
}
