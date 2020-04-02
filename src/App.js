import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import List from './components/List'

function App() {
  return (
    <Router>
      <>
        <div className="container">
          <Switch>
            <Route path="/">
              <List />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  )
}

export default App
