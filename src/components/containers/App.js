import { Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';
import Home from '../homepage/Home';
import Shop from '../shop/Shop';
import './App.css';
import ScrollToTop from '../common/scrollToTop';
import { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import Cart from '../shop/Cart';
import components from '../../data/components';

const StyledMain = {
  paddingTop: '2.5rem',
  minHeight: '100vh',
  // height: '1px', //used this because of a firefox bug
};
const allItems = [];
components.forEach((component) => allItems.push(...component.items));

const App = () => {
  const [items, setItems] = useState(allItems);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const toggleCartIsActive = () => {
    setShowCart(!showCart);
  };
  const HeaderButtons = [
    { id: uniqid(), title: 'home', link: '/' },
    { id: uniqid(), title: 'shop', link: '/shop' },
    { id: uniqid(), title: 'cart', handleClick: toggleCartIsActive },
  ];
  const addItem = (id) => {
    const sameProduct = cartItems.find((item) => item.id === id);
    if (sameProduct) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === sameProduct.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      );
    } else {
      const item = items.find((item) => item.id === id);
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  const setQuantity = (id, quantity) => {
    if (quantity === 0) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
    } else {
      const item = cartItems.find((cartItem) => cartItem.id === id);
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: quantity }
            : cartItem,
        ),
      );
    }
  };
  const computeTotalPrice = () => {
    let sum = 0;
    sum = cartItems.reduce((acc, item) => {
      console.log(`${item.quantity} ${item.price}`);

      return acc + item.quantity * item.price;
    }, 0);
    setTotalPrice(sum);
  };
  // useEffect(() => {}, []);
  useEffect(() => {
    computeTotalPrice();
  }, [cartItems]);

  return (
    <div>
      <ScrollToTop />
      <Header
        handleShowCart={toggleCartIsActive}
        buttons={HeaderButtons}
        cartItems={cartItems}
      />
      <div style={StyledMain}>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route
            path={'/shop/*'}
            element={<Shop showCart={showCart} addItem={addItem} />}
          />
        </Routes>
      </div>
      <Cart
        showCart={showCart}
        cartItems={cartItems}
        setQuantity={setQuantity}
        total={totalPrice}
        toggleCartIsActive={toggleCartIsActive}
      />
      <Footer />
    </div>
  );
};

export default App;
