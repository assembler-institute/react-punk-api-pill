import React, { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import Star from '../icons/Star';
import useFavouriteBeers from '../../hooks/useFavouriteBeers';

import './BeerCard.scss';

//{ add_to_cart: { es: 'Añadir al carrito', en: 'Add to cart' } }

const BeerCard = ({ beer, type }) => {
  const { id, name, tagline, imageUrl, abv } = beer;
  const { favourites, toggleFavourite } = useFavouriteBeers();
  const { onAddProduct, onRemoveProduct, onRemoveProductItem } = useContext(CartContext);
  
  return (
    <article className={`beer ${type === 'cart' ? 'beer_cart' : ''}`}>
      <div className="beer__img">
        <img src={imageUrl} alt={name}/>
      </div>
      <div>
        <div className="beer__title">{name}</div>
        <div className="beer__tagline">{tagline}</div>
      </div>
      {type !== 'cart' && (
        <>
          <div className="beer__bottom">
            <div className="beer__abv">{abv}</div>
            <div onClick={() => toggleFavourite(id)}>
              <Star color={favourites[id] ? '#ffd04d' : 'grey'}/>
            </div>
          </div>
          <button onClick={() => onAddProduct(beer)}>Add to cart</button> 
        </>
      )}
      {type === 'cart' && (
        <>
          <div>qty: {beer.quantity}</div>
          <button onClick={() => onRemoveProduct(beer.id)}>X</button>
          <button onClick={() => onRemoveProductItem(beer.id)}>-1</button>
        </>
      )}
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
