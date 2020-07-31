import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Sidebar from '../common/Sidebar'
import ReactCounter from "./Counter";

export default class ReactExample extends Component {
  render() {
    const links = [{
      url: "/react-basic/counter",
      title: "Counter"
    }]
    
    return <div class="content-container">
      <Sidebar links={links} />
      <div className="content-area">
        <h3>React Examples</h3>
        <Switch>
          <Route path="/react-basic/counter"><ReactCounter /></Route>
          <Route><p>Click on the sidebar for specific examples</p></Route>
        </Switch>
      </div>
    </div>
  }
}
