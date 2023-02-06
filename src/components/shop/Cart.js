import CartItem from './CartItem';
import styles from '../../styles/components/Cart.module.css';

const Cart = ({ showCart: isActive, cartItems, setQuantity, total }) => {
  return (
    <div
      className={
        isActive
          ? `${styles.container} ${styles.activeContainer}`
          : styles.container
      }
    >
      <div className={styles.itemContainer}>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} setQuantity={setQuantity} />
        ))}
      </div>
      <div>
        <p>Total Price: {total}€</p>
      </div>
    </div>
  );
};
export default Cart;
