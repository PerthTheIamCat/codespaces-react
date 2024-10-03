import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Posts from './Posts'
import Shop from './Shop'

function App() {
  return (
    <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>    
            <li><Link to="/posts?fname=pawit&lname=thongkum">Post Greeting</Link></li>
            <li><Link to="/posts/1">Post id 1</Link></li>
            <li><Link to="/posts/2">Post id 2</Link></li>
            <li><Link to="shop">Shop</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/posts' element={<Posts/>}></Route>
          <Route path='/posts/:id' element={<Posts/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
