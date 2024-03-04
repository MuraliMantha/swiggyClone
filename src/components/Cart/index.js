import {Link} from 'react-router-dom'
import {BiRupee} from 'react-icons/bi'
import CartContext from '../../Context/index'

import CartItem from '../CartItem'

import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const Cart = () => {
  const getTotalPrice = cartItems =>
    cartItems.reduce((total, item) => total + item.quantity * item.cost, 0)

  const renderOrdersStatusView = noOrders => (
    <div className="cart-route">
      <Header />
      <div className="orders-status-container">
        {noOrders ? (
          <img
            className="empty-cart-image"
            src="https://res.cloudinary.com/pavankalyanbandaru/image/upload/v1651083038/tasty-kitchens/no-orders-yet.png"
            alt="empty cart"
          />
        ) : (
          <img
            className="order-placed-image"
            src="https://res.cloudinary.com/pavankalyanbandaru/image/upload/v1651083036/tasty-kitchens/order-successful.png"
            alt="order successful"
          />
        )}

        <h1 className="cart-order-heading">
          {noOrders ? 'No Order Yet!' : 'Payment Successful'}
        </h1>

        {noOrders ? (
          <p className="cart-order-description">
            Your cart is empty. Add something from the menu.
          </p>
        ) : (
          <p className="cart-order-description">
            Thank you for ordering. <br />
            Your Order is Successfully Placed.
          </p>
        )}

        <Link to="/">
          <button className="cart-default-button" type="button">
            {noOrders ? 'Order Now' : 'Go To Home Page'}
          </button>
        </Link>
      </div>
    </div>
  )

  const renderCartItemsSection = value => {
    const {cartItems, placeOrder} = value

    return (
      <>
        <Header />
        <div className="cart-section">
          <ul className="cart-items-container">
            <li className="cart-items-header-li">
              <p className="li-cart-item-title w-36">Item</p>
              <p className="li-cart-item-title w-32">Quantity</p>
              <p className="li-cart-item-title w-32">Price</p>
            </li>

            {cartItems.map(item => (
              <CartItem key={item.id} data={item} />
            ))}
          </ul>
          <hr className="cart-hr" />

          <div className="cart-summary-container">
            <h1 className="cart-order-total-text">Order Total:</h1>

            <div className="cart-total-cost-container">
              <BiRupee className="cart-total-rupee-icon" />
              <p className="cart-total-cost" data-testid="total-price">
                {getTotalPrice(cartItems)}.00
              </p>
            </div>
          </div>

          <div className="cart-place-order-container">
            <button
              className="cart-default-button"
              type="button"
              onClick={placeOrder}
            >
              Place Order
            </button>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const renderCartRoute = value => {
    const {cartItems, isOrderPlaced} = value

    // Returns Order Placed Successful view
    if (isOrderPlaced) {
      return renderOrdersStatusView(false)
    }

    // Returns No Orders View
    if (cartItems.length === 0) {
      return renderOrdersStatusView(true)
    }

    // Returns Cart List view
    return renderCartItemsSection(value)
  }

  return (
    <CartContext.Consumer>
      {value => renderCartRoute(value)}
    </CartContext.Consumer>
  )
}
export default Cart
