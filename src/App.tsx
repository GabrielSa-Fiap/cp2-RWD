import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Posts from './Components/Posts';
import Users from './Components/Users';
import Photos from './Components/Photos';
import Home from './Home';




const App: React.FC = () => {
  return (
      <Router>
        
        <div>
          
         <header className="bg-blue-950 text-white p-4 flex justify-center">
         <nav className="flex items-center space-x-4">
         <Link to='/'className="hover:text-blue-500"> INÍCIO </Link><br/>
         <Link to="/Posts" className="hover:text-blue-500"> POSTS </Link><br/>
         <Link to="/Users" className="hover:text-blue-500"> USERS </Link><br/>
         <Link to="/Photos" className="hover:text-blue-500"> PHOTOS </Link>
         </nav>
         </header>
        </div>

       <div>
        <Routes>
                <Route path='/' element={<Home/>} />
               <Route path="/posts" element={<Posts/>} />
            <Route path="/users" element={<Users/>} />
           <Route path="/photos" element={<Photos/>} />
        </Routes>
      </div>

      <footer className="bg-blue-950 text-white py-4 text-center">
    <p>© 2024 Fiap - RM:554064 Gabriel Sá Bragança - 1TDSZ_2023 -  </p>
</footer>


    </Router>
 );
};

export default App;
