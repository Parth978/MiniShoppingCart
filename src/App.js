
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Component/Cart';
import Header from './Component/Header';
import Home from './Component/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  );
}

export default App;
