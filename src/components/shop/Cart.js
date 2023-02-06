import CartItem from './CartItem';
import styles from '../../styles/components/Cart.module.css';
import CartTotal from './CartTotal';

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
      <CartTotal value={total} />
    </div>
  );
};
export default Cart;
