import CartItem from './CartItem';
import uniqid from 'uniqid';

// write me a basic react functional component for a shopping cart
const StyledContainer = {
  position: 'fixed',
  top: '5vh',
  right: '-90vw',
  width: '90vw',
  height: '90vh',
  backgroundColor: 'white',
  border: '0.2rem solid gray',
  padding: '1rem',
  transition: 'right 0.4s ease-in-out',
};
const ActiveStyledContainer = {
  position: 'fixed',
  top: '5vh',
  right: '5vw',
  width: '90vw',
  height: '90vh',
  backgroundColor: 'white',
  border: '0.2rem solid gray',
  padding: '1rem',
  transition: 'right 0.4s ease-in-out',
};
const ItemContainer = {
  display: 'flex',
  flexDirection: 'column',

  // width: '80%',
  height: '80%',
};

const Cart = ({ showCart, cartItems, setQuantity }) => {
  const incrementQuantity = (id, prevQuantity) => {
    setQuantity(id, Number(prevQuantity) + 1);
  };
  const decrementQuantity = (id, prevQuantity) => {
    setQuantity(id, Number(prevQuantity) - 1);
  };
  return (
    <div
      style={showCart ? ActiveStyledContainer : StyledContainer}
      className="shopping-cart"
    >
      <div style={ItemContainer}>
        {cartItems.map((item) => (
          <CartItem
            key={uniqid()}
            item={item}
            setQuantity={setQuantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
        ))}
      </div>
    </div>
  );
};
export default Cart;
