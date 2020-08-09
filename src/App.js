import React, { useState } from 'react'
import './App.css'
import { Main, Production } from './pages'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Menu from './components/Menu/Menu'

function App() {
  const [active, setActive] = useState(false)
  return (
    <div className="App">
      {/* <Menu active={active}></Menu> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Main setActive={setActive} active={active}></Main>
          </Route>
          <Route exact path="/restaurant">
            <Production></Production>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
