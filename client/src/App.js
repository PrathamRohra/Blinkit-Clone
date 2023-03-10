import './App.css';
import { BrowserRouter, Route, Router, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './scenes/HomePage';
import ProductPage from './scenes/ProductPage';
import CreateProduct from './scenes/CreateProduct';
import Cart from './scenes/Cart';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/products' element={ <ProductPage/> }/>
          <Route path='/create-product' element={<CreateProduct/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
