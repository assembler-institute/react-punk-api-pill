import React, { useState } from 'react';

import Beers from './pages/beers';
import BeersZeroZero from './pages/beers-zero-zero';

const App = () => { 
  const [page, setPage] = useState('beers');

  return (
    <div className="App">
      <div>
        <button onClick={() => setPage('beers')}>Beers</button>
        <button onClick={() => setPage('beers-zero-zero')}>Beers Zero Zero</button>
      </div>
      {page === 'beers' ? <Beers /> : <BeersZeroZero />}
    </div>
  );
}

export default App;
