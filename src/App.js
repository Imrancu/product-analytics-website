import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Deshboard from './components/Deshboard/Deshboard';
import ErrorRoute from './components/ErrorRoute/ErrorRoute';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/reviews' element={<Reviews/>}></Route>
          <Route path='/deshboard' element={<Deshboard/>}></Route>
          <Route path='/blogs' element={<Blogs/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='*' element={<ErrorRoute/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
