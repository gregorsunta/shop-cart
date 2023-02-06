import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    { id: uniqid(), name: 'home', link: '/' },
    { id: uniqid(), name: 'shop', link: '/shop' },
    { id: uniqid(), name: 'cart', handleClick: toggleCartIsActive },
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
    computeTotalPrice();
  };
  const setQuantity = (id, quantity) => {
    const item = cartItems.find((cartItem) => cartItem.id === id);
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: quantity }
          : cartItem,
      ),
    );
    computeTotalPrice();
  };
  const computeTotalPrice = () => {
    let sum = 0;
    sum = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
    setTotalPrice(sum);
  };
  return (
    <div>
      <ScrollToTop />
      <Header handleShowCart={toggleCartIsActive} buttons={HeaderButtons} />
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
      />
      <Footer />
    </div>
  );
};

export default App;
