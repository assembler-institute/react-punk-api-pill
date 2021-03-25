import BeerCard from '../BeerCard';
import { CartContext } from '../../contexts/CartContext';

import './Cart.scss';

const Cart = () => {
  return (
    <section className="cart">
      <CartContext.Consumer>
        {({ cartProducts, onRemoveProduct }) => (
          <>
            <div className="cart__header">Cart: {cartProducts.length} products</div>
            <div className="cart__products">
              {cartProducts.map(beer => (
                <BeerCard
                  beer={beer}
                  key={beer.id}
                  onRemoveProduct={onRemoveProduct}
                  type="cart" />
              ))}
            </div>
          </>
        )}
      </CartContext.Consumer>
    </section>
  )
}

export default Cart;