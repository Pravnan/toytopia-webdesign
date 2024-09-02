'use client'; 

import './Navbar.css'; 


const Navbar = () => {
  return (
    <nav className="nav-container">
      <a href="Home.html" className="logo">
        <img
          src="/resources/images/logo.webp" 
          alt="Brand Logo"
          width="80" 
          height="auto" 
        />
      </a>
      <ul className="navbar">
        <li><a href="#Product">Products</a></li>
        <li><a href="#sale" className="sale">On Sale</a></li>
        <li><a href="#Contact">Contact Us</a></li>
        <li><a href="#Offers">Offers</a></li>
  
      </ul>

      <a href="cart.html" className="icons">
        <img
          src="resources\icons\cart.svg"
          alt="icons"
          width="30" 
          height="auto" 
        />
        <img
          src="resources\icons\user.svg"
          alt="icons"
          width="30" 
          height="auto" 
        />
      </a>
    </nav>
  );
};

export default Navbar;
