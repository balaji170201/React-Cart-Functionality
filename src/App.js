import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          <Routes>
            <Route path='/' element={<Home searchTerm={searchTerm}/>}/>
            <Route path='/cart' element={<Cart />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
