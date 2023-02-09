import CartItem from './CartItem';
import styles from '../../styles/components/Cart.module.css';
import Button from '../common/Button';
import ButtonStyles from '../../styles/components/Button.module.css';

const Cart = ({
  showCart: isActive,
  cartItems,
  setQuantity,
  total,
  toggleCartIsActive,
}) => {
  return (
    <div
      className={
        isActive
          ? `${styles.container} ${styles.activeContainer}`
          : styles.container
      }
    >
      <Button
        title={'close'}
        handleClick={toggleCartIsActive}
        styles={ButtonStyles}
      />
      <div className={styles.itemContainer}>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} setQuantity={setQuantity} />
        ))}
      </div>
      <div>
        <p className={styles['total-price']}>
          Total Price: {Math.round((total + Number.EPSILON) * 100) / 100}€
        </p>
      </div>
    </div>
  );
};
export default Cart;
