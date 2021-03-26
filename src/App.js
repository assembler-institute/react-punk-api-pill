import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Cart from './components/Cart';
import ReduxProvider from './redux/Provider';
import Beers from './pages/beers';
import BeersZeroZero from './pages/beers-zero-zero';
import Login from './pages/login';
import CartContextProvider from './contexts/CartContext';

const App = () => { 
  return (
    <div className="App">
      <ReduxProvider>
        <CartContextProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Beers} />
              <Route exact path="/zero-zero" component={BeersZeroZero} />
              <Route exact path="/login" component={Login} />
              <Redirect to="/" />
            </Switch>
          </Router>
          <Cart />
        </CartContextProvider>
      </ReduxProvider>
    </div>
  );
}

export default App;
