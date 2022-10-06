
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import Item from './components/Item';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes> 
      <Route path='/' element={<Home />} > </Route>
      <Route path='/products' element={<ItemListContainer />} > </Route>
      <Route path='/details' element={<Detail />} > </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;