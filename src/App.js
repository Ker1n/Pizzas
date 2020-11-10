import React from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';

import  logo from './assets/img/pizza-logo.svg';
import {Header} from './components';  
import {Home, Card} from './pages';


import {setPizzas as setPizzasAction} from './redux/actions/pizzas';
import {connect} from 'react-redux';

class App extends React.Component {
  
  componentDidMount() { 
    axios.get("http://localhost:3000/db.json")
    .then(({data}) => { 
      this.props.setPizzas(data.pizzas)
    });
}

  render () { 
    return (
      <div className="wrapper">
        <Header logo={logo} /> 
        <div className="content">
          <div className="container">
          <Route path='/' exact render={() => <Home items={this.props.items} />} />
          <Route path='/card' exact  component={Card} /> 
          </div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return { 
    items: state.pizzas.items,
    filters: state.filters
  }
};

const mapDispatchToProps = (dispatch) => { 
  return { 
    setPizzas: (items) => dispatch(setPizzasAction(items))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


