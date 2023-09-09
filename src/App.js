import logo from './logo.svg';
import './App.css';

import {Home} from './components/home'
import {Header} from './components/header.jsx'
import { Routes, Route, Link , useNavigate } from 'react-router-dom';
function App() {
  return (
    <>
  <Header/> 





<Routes>
       <Route path="/home" element = { <div>   <Home/></div>} />
      
   </Routes>

 
    </>
  );
}

export default App;
