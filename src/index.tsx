import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css';

import './styles/index.css'

import { store } from 'redux/store'

import App from './App'

ReactDOM.render(
   <BrowserRouter>
      <Provider store={store}>
         <App />
      </Provider>
   </BrowserRouter>,
   document.getElementById('root') as HTMLElement
)