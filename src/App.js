import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
