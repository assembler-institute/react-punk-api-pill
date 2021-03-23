import React from 'react';

import BeerCard from '../BeerCard';

class BeerCards extends React.Component {
  render() {
    const beers = this.props.beers; // const { beers } = this.props

    return (
      <div className="App">
        {beers.map(beer => {
          return <BeerCard key={beer.id} beer={beer}/>
        })}
      </div>
    );
  }
}

export default BeerCards;
