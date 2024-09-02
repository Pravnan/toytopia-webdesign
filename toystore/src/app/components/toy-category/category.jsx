'use client'; 

import React from 'react';
import './category.css'; 
import Image from 'next/image'; // Ensure you're importing Image correctly from next/image

const Category = () => {
  return (
    <div className="category">
      <div className="forboys">
  <Image id="boys" src="/resources/images/boys.jpg" alt="For Boys" width={2000} height={2000} />
  <div className="overlay-text">For Boys</div>
</div>

<div className="forgirls">
  <Image id="girls" src="/resources/images/girls.jpg" alt="For Girls" width={1000} height={2000} />
  <div className="overlay-text">For Girls</div>
</div>

    </div>
  );
};

export default Category;
