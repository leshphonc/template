import React from 'react'
import { Provider } from 'mobx-react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Index from './pages/index'
import store from '@/pages/store'

function App() {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Provider {...store}>
      <HashRouter>
        <Switch>
          {/* 首页 */}
          <Route path="/" exact component={Index} />
        </Switch>
      </HashRouter>
    </Provider>
  )
}

export default App
