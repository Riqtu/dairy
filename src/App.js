import React, { useState, useEffect } from 'react'
import './App.css'
import { Main, Production, Contacts, Master } from './pages'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useStores } from './hooks/useStores'

function App() {
  const [active, setActive] = useState(false)
  const { mainStore } = useStores()

  useEffect(() => {
    let href = document.location.pathname

    if (mainStore.href !== href) mainStore.setHref(href)
  }, [mainStore])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main setActive={setActive} active={active} />
          </Route>
          <Route exact path="/production">
            <Production></Production>
          </Route>
          <Route exact path="/master-class">
            <Master></Master>
          </Route>
          <Route exact path="/contacts">
            <Contacts></Contacts>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
