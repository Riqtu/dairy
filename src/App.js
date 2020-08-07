import React, { useEffect } from 'react'
import './App.css'
import { Main, Production } from './pages'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main></Main>
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
