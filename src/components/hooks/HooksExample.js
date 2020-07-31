import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Sidebar from '../common/Sidebar'
import HooksCounter from "./Counter";

const HooksExample = () => {
  const links = [{
    url: "/react-hooks/counter",
    title: "Counter"
  }]

  return <div class="content-container">
      <Sidebar links={links} />
      <div className="content-area">
        <h3>Hooks Examples</h3>
        <Switch>
          <Route path="/react-hooks/counter"><HooksCounter /></Route>
          <Route><p>Click on the sidebar for specific examples</p></Route>
        </Switch>
      </div>
    </div>
}

export default HooksExample;