import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';
import Home from '../homepage/Home';
import Shop from '../shop/Shop';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/shop'} element={<Shop />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
