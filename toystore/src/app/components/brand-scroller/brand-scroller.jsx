

import React, { useEffect, useState } from 'react';
import './brand-scroller.css';

const BrandScroller = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/json/scroller.json')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching scroller data:', error));
  }, []);

  return (
    <div className="wrapper">
      {items.map((item, index) => (
        <div
          key={index}
          className={`item item${index + 1}`}
          style={{ backgroundImage: `url(${item.image})` }}
        />
      ))}
    </div>
  );
};

export default BrandScroller;
