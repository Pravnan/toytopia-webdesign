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
        <li><a href="Cart">My Cart 🛍<i className="fas fa-shopping-cart"></i></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
