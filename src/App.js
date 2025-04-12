import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';

import Home from './pages/Home ';
import About from './pages/Aboutus';
import Contact from './pages/Contact';

// Optional feature components
import Component1 from './Components/Component1';
import Counter from './Components/Counter';
import FormDisplay from './Components/FormDisplay';
import KeyPresses from './Components/KeyPresses';
import ChangesText from './Components/ChangesText';
import ItemList from './Components/ItemList';
import ProductList from './Components/ProductList';
import Profile from './Components/Profile';
import ToggleButton from './Components/ToggleButton';
import AddNumbers from './Components/AddNumbers';


function App() {
  return (
    
      <div className="App">
        <Navbar />

        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/change-text" element={<ChangesText />} />
          <Route path="/toggle" element={<ToggleButton />} />
          <Route path="/items" element={<ItemList />} />
          <Route path="/add-numbers" element={<AddNumbers />} />
          <Route path="/form" element={<FormDisplay />} />
          <Route path="/key-press" element={<KeyPresses />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/context-demo" element={<Component1 />} />
        </Routes>
      </div>
    
  );
}

export default App;
