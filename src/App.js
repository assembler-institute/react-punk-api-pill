import React, { useState } from 'react';

import Cart from './componets/Cart';
import Beers from './pages/beers';
import BeersZeroZero from './pages/beers-zero-zero';
import CartContextProvider from './contexts/CartContext';

const App = () => { 
  const [page, setPage] = useState('beers');

  return (
    <div className="App">
      <CartContextProvider>
        <div>
          <button onClick={() => setPage('beers')}>Beers</button>
          <button onClick={() => setPage('beers-zero-zero')}>Beers Zero Zero</button>
        </div>
        {page === 'beers' ? <Beers /> : <BeersZeroZero/> }
        <Cart />
      </CartContextProvider>
    </div>
  );
}

export default App;
