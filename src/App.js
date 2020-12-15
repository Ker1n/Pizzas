import React from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';

import  logo from './assets/img/pizza-logo.svg';
import {Header} from './components';  
import {Home, Card} from './pages';

import {setPizzas} from './redux/actions/pizzas';
import {useDispatch} from 'react-redux';

function App ()  {

 const dispatch = useDispatch();

  React.useEffect(() => { 
    axios.get("http://localhost:3001/pizzas")
    .then(({data}) => {
     dispatch(setPizzas(data));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header logo={logo} /> 
        <div className="content">
          <div className="container">
          <Route path='/' exact component={Home} /> 
          <Route path='/card' exact  component={Card} /> 
        </div>
      </div>
    </div>
  )
} 

export default App

