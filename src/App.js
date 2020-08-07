import React from 'react'
import './App.css'
import { Main } from './pages'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main></Main>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
