import React, { useRef, useEffect, useState } from 'react';
import './card-set1.css'; 

const CardSet1 = () => {
  const [cards, setCards] = useState([]);
  const cardWrapperRef = useRef(null);
  const scrollDirection = useRef('right'); 
  const widthToScroll = useRef(0);
  const autoScrollInterval = useRef(null);

  useEffect(() => {
  
    const fetchCards = async () => {
      try {
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
        <h1>Featured Products</h1>
          <i className="fa-solid fa-arrow-right"></i>
  
        <div className="card-set">
          {cards.map((card) => (
            <div key={card.id} className="card">
              <img src={card.imageUrl} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-price">{card.price}</p>
                <div class="buttons">
                  <a href="your-link-here" class="add-cart"><span>Add to Cart</span></a>
                  </div>
  
              </div>
            </div>
          ))}
        </div>
      </div>
  
  );
};

export default CardSet1;