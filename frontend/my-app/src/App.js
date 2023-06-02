

import './App.css';
//import Footer from './components/Footer';
//import Layout from './components/Layout';
import Home  from "./pages/Home"
import About from "./pages/About.js"
import Contact from "./pages/Contact"
import Policy from "./pages/Policy"
import Pagenotfound from "./pages/Pagenotfound"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route   path='/' element={<Home/>}/>
      <Route   path='/register' element={<Register/>}/>
      <Route   path='/login' element={<Login/>}/>
      <Route   path='/about' element={<About/>}/>
      <Route   path='/contact' element={<Contact/>}/>
      <Route   path='/policy' element={<Policy/>}/>
      <Route   path='*' element={<Pagenotfound/>}/>
    </Routes>
   </BrowserRouter>
    
   </>
   
    
  );
}

export default App;
