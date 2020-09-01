import React from 'react'

import Sidebar from '../common/Sidebar'
import { HooksRouter } from '../../AppRouter';

const HooksExample = () => {
  const links = [{
    url: "/react-hooks/counter",
    title: "Counter"
  }, {
    url: "/react-hooks/usecallback",
    title: "useCallback"
  }, {
    url: "/react-hooks/usecontext",
    title: "useContext"
  }, {
    url: "/react-hooks/usememo",
    title: "useMemo"
  }, {
    url: "/react-hooks/usereducer",
    title: "useReducer"
  }]

  return <div className="content-container">
      <Sidebar links={links} />
      <div className="content-area">
        <h3>Hooks Examples</h3>
        <HooksRouter />
      </div>
    </div>
}

export default HooksExample;