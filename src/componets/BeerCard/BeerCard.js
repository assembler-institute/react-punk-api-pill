import React from 'react';

import './BeerCard.scss';

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

export default BeerCard;
