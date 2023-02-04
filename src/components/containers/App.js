import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';
import Home from '../homepage/Home';
import Shop from '../shop/Shop';
import './App.css';
import ScrollToTop from '../common/scrollToTop';
import styled from 'styled-components';

const StyledMain = {
  paddingTop: '2.5rem',
  minHeight: '100vh',
  // height: '1px', //used this because of a firefox bug
};

function App() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <div style={StyledMain}>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/shop/*'} element={<Shop />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
