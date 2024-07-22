'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  // State to manage the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/resources/images/img1.webp",
    "/resources/images/img2.webp",
    "/resources/images/img3.webp",
  ];

 
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };


  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, [currentSlide]);

  return (
    <div>
      <div className={styles.shoutoutBar}>
        <h1>Get Free Delivery on Purchases Over 3000 LKR</h1>
        <Image src="/resources/icons/delivery.png" alt="Delivery Icon" width={100} height={100} />
      </div>

      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link href="/Home" className={styles.logo}>
            <Image src="/resources/images/logo.webp" alt="Logo" width={200} height={100} />
          </Link>

          <ul className={styles.navbar}>
            <li>
              <Link href="#Product">Products</Link>
            </li>
            <li>
              <Link href="#sale" className={styles.sale}>On Sale</Link>
            </li>
            <li>
              <Link href="#Contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/Cart">
              My Cart <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className={styles.heroBanner}>
        <div className={styles.bannerWrapper}>
          <Image src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`}  layout="responsive" width={2000} height={400} />
        </div>

        <button
          className={`${styles.carouselArrow} ${styles.leftArrow}`}
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className={`${styles.carouselArrow} ${styles.rightArrow}`}
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>

    </div>
  );
}
