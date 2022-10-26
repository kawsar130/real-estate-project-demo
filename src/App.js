import { Routes, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import OrderSuccess from './components/Order/OrderSuccess';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="order" element={<OrderSuccess />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
