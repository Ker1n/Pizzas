import React from 'react';
import {render} from 'react-dom';
import App from './App';
import "./scss/app.scss"
import {BrowserRouter as Router} from 'react-router-dom'

import {Provider} from 'react-redux'

import store  from './redux/store'



store.dispatch({ 
  type: 'SET_SORT_BY',
  payload: 'price'
})




render(
    <Router>
      <Provider store={store}>
        <App  />
      </Provider>   
    </Router>
, document.getElementById('root')
);

  