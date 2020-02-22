import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/configureStore'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Home from './containers/Home'
import './App.css'


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <BrowserRouter>
            <React.Fragment>
              <Route exact path="/" component={Home}/> 
            </React.Fragment>
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App
