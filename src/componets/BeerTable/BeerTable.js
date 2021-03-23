import React from 'react';

import { isFavourite, toggleFavourite } from '../../controllers/beers';
import Star from '../icons/Star';

import './BeerTable.scss';

class BeerTable extends React.Component {
  render() {
    const beers = this.props.beers; // const { beers } = this.props
    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>abv</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {beers.map(beer => (
            <tr key={beer.id}>
              <td>{beer.id}</td>
              <td>{beer.name}</td>
              <td>{beer.abv}</td>
              <td>
                <div className="fav_button" onClick={()=>toggleFavourite(beer.id)}>
                  <Star color={isFavourite(beer.id) ? '#ffd04d' : 'grey'}/>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default BeerTable;