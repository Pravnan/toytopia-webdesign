'use client'; // Client Component

import './Navbar.css'; // Import custom styles for the Navbar

const Navbar = () => {
  return (
    <nav className="nav-container">
      <a href="Home.html" className="logo">
        <img
          src="/resources/images/logo.webp" // Correct path
          alt="Brand Logo"
          width="80" // Adjust width as needed
          height="auto" // Maintain aspect ratio
        />
      </a>
      <ul className="navbar">
        <li><a href="#Product">Products</a></li>
        <li><a href="#sale" className="sale">On Sale</a></li>
        <li><a href="#Contact">Contact Us</a></li>
        <li><a href="Cart">My Cart <i className="fas fa-shopping-cart"></i></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
