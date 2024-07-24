// toystore/src/app/components/card-set1/card-set1.jsx

import React, { useEffect, useState } from 'react';
import './card-set1.css'; // Import the new CSS file

const CardSet1 = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Function to fetch JSON data and generate cards
    const fetchCards = async () => {
      try {
        // Fetch the JSON file from the public directory
        const response = await fetch('/json/cards.json');
        const cardsData = await response.json();
        setCards(cardsData);
      } catch (error) {
        console.error('Error loading the JSON data:', error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="card-container">
      <h1>Featured Products ➜</h1>
        <i className="fa-solid fa-arrow-right"></i>

      <div className="card-set">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.imageUrl} className="card-img-top" alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-price">{card.price}</p>
              {/* <p className="card-price2">{card.price2}</p> Display the price */}
              {/* <div className="buttons"> */}
              <div class="buttons">
                <a href="your-link-here" class="add-cart"><span>Add to Cart</span></a>
                </div>

              {/* <a href="#" className="add-fav">Favorites</a> */}
              {/* </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSet1;
