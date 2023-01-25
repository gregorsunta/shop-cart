import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../homepage/Home';
import Shop from '../shop/Shop';

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
