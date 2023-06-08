
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Component/Home';
import Login from './Component/Login';
import Search from './Component/Search';



function App() {

  
  return (
    <div className="App">
      
      <Router>
    
  
      <Routes>
      <Route path="/" element={<Home/>} />
     
      <Route path="/login" element={<Login/>} />
      <Route path="/search" element={<Search/>} />
  
     

      </Routes>
  
    </Router>
      
    </div>
  );
}

export default App;
