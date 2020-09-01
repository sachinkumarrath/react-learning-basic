import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import ReactExample from "./components/react-basic/ReactExample";
import ReactCounter from "./components/react-basic/Counter";
import ReactContext from "./components/react-basic/ContextExample";

import HooksCounter from "./components/hooks/Counter";
import UseReducer from './components/hooks/UseReducer';
import UseCallback from './components/hooks/UseCallback';
import UseMemo from './components/hooks/UseMemo';
import UseContext from './components/hooks/UseContext';

// import HooksExample from "./components/hooks/HooksExample";
const HooksExample = React.lazy(() => import('./components/hooks/HooksExample'))

const InCorrectURL = () => {
  return <h4>Please navigate to correct URL</h4>
}

export const HooksRouter = () => {
  return (
    <Switch>
      <Route path="/react-hooks/counter"><HooksCounter /></Route>
      <Route path="/react-hooks/usecallback"><UseCallback /></Route>
      <Route path="/react-hooks/usecontext"><UseContext /></Route>
      <Route path="/react-hooks/usememo"><UseMemo /></Route>
      <Route path="/react-hooks/usereducer"><UseReducer /></Route>
      <Route><p>Click on the sidebar for specific examples</p></Route>
    </Switch>
  )
}

export const ReactBasicRouter = () => {
  return (
    <Switch>
      <Route path="/react-basic/counter"><ReactCounter /></Route>
      <Route path="/react-basic/context"><ReactContext /></Route>
      <Route><p>Click on the sidebar for specific examples</p></Route>
    </Switch>
  )
}

export const TypeScriptRouter = () => {

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