import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

import Home from './pages/App'
import Film from './pages/Film'
import Error404 from './pages/Error404'

const Root = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/film/:id" component={Film} />
      <Route component={Error404} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(Root, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
