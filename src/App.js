import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import AppRouter from './AppRouter'
import Toolbar from './components/common/Toolbar'
import './App.scss';

function App() {
  const links = [{
    url: "/react-basic",
    title: "React"
  }, {
    url: "/react-hooks",
    title: "Hooks"
  }, {
    url: "/typescripts",
    title: "Typescripts"
  }]
  return (
    <div className="App">
      <Router>
        <Toolbar links={links}/>
        <AppRouter />
      </Router>      
    </div>
  );
}

export default App;
