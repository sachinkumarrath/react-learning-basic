import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import ReactExample from "./components/react-basic/ReactExample";

// import HooksExample from "./components/hooks/HooksExample";

const HooksExample = React.lazy(() => import('./components/hooks/HooksExample'))

const InCorrectURL = () => {
  return <h4>Please navigate to correct URL</h4>
}

const AppRouters = () => {
  return (
    <Switch>
      <Route path="/react-basic" component={ReactExample} />
      <Route path="/react-hooks">
        <Suspense fallback={<div>Loading...</div>}>
          <HooksExample />
        </Suspense>
      </Route>
      <Route path="/react-typescript"></Route>      
      <Route><InCorrectURL /></Route>
      {/* <Route component={InCorrectURL} /> */}
      {/* <Route render={() => <h4>Please navigate to correct URL</h4>} /> */}  
    </Switch>
  )
}

export default AppRouters;