// src/app/components/Carousel/Carousel.jsx
'use client'; // Client Component

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JS is included

import './Carousel.css'; // Path to your CSS file

const Carousel = () => {
  return (
    <div id="carouselExampleInterval" className="carousel slide carousel-container" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img src="/resources/images/img5.png" className="d-block w-100" alt="First Slide" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="/resources/images/img2.webp" className="d-block w-100" alt="Second Slide" />
        </div>
        <div className="carousel-item">
          <img src="/resources/images/img4.webp" className="d-block w-100" alt="Third Slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;

