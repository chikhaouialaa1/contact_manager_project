import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Form from './Component/Form';
import Table from './Component/Table';
import Cart from './Component/Cart';
import Login from './Component/Login';
import Singup from './Component/Singup';


class App extends Component {
  render() {
    return (
        <div>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Table} />
          <Route path="/form" component={Form} />
          <Route path="/cart" component={Cart} />
          <Route path="/singup" component={Singup} />
        </div>
    );
  }
}

export default App;
