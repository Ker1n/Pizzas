import React from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import {setPizzas} from './redux/actions/pizzas';
import store from './redux/store';


// import {Connect} from 'react-redux';


import  logo from './assets/img/pizza-logo.svg';
import {Header} from './components';  
import {Home, Card} from './pages';

// const [pizzas, setPizzas] = useState([])

class App extends React.Component {
  
  componentDidMount() { 
      axios.get("http://localhost:3000/db.json")
      .then(({data}) => { 
        store.dispatch(setPizzas(data.pizzas))
      });
  }

  render () { 
    return (
      <div className="wrapper">
        <Header logo={logo} /> 
        <div className="content">
          <div className="container">
          <Route path='/' exact render={() => <Home items={[]} />} />
          <Route path='/card' exact  component={Card} /> 
          </div>
        </div>
      </div>
    );
  };
};


export default App


