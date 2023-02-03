import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';
import Home from '../homepage/Home';
import Shop from '../shop/Shop';
import './App.css';
import styled from 'styled-components';

const StyledMain = styled.div`
  padding-top: 2.5rem;
  min-height: 100vh;
  height: 1px;
`;

function App() {
  return (
    <div>
      <Header />
      <StyledMain>
        <Routes style={StyledMain}>
          <Route path={'/'} element={<Home />} />
          <Route path={'/shop/*'} element={<Shop />} />
        </Routes>
      </StyledMain>
      <Footer />
    </div>
  );
}

export default App;
