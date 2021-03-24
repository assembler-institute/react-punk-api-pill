import React from 'react';

import Star from '../icons/Star';
import useFavouriteBeers from '../../hooks/useFavouriteBeers';

import './BeerCard.scss';

const BeerCard = ({ beer }) => {
  const { id, name, tagline, imageUrl, abv } = beer;
  const { favourites, toggleFavourite } = useFavouriteBeers();
  
  return (
    <article className="beer">
      <div className="beer__img">
        <img src={imageUrl} alt={name}/>
      </div>
      <div className="beer__title">{name}</div>
      <div className="beer__tagline">{tagline}</div>
      <div className="beer__bottom">
        <div className="beer__abv">{abv}</div>
        <div onClick={() => toggleFavourite(id)}>
          <Star color={favourites[id] ? '#ffd04d' : 'grey'}/>
        </div>
      </div>
    </article>
  )
}
/*
class BeerCard extends React.Component {
  render() {
    const { id, name, tagline, imageUrl, abv } = this.props.beer;

    return (
      <article className="beer">
        <div className="beer__img">
          <img src={imageUrl} alt={name}/>
        </div>
        <div className="beer__content__title">{name}</div>
        <div className="beer__content__tagline">{tagline}</div>
        <div className="beer__content__abv">{abv}</div>
      </article>
    )
  }
}
*/
export default BeerCard;
