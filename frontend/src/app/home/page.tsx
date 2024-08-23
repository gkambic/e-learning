"use client"; 
import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';

const imageUrls = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  // Agrega más imágenes según sea necesario
];

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 10000); // Cambiar imagen cada 10 segundos

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.backgroundContainer}>
      {imageUrls.map((url, index) => (
        <div
          key={index}
          className={styles.backgroundImage}
          style={{
            backgroundImage: `url(${url})`,
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
};

export default HomePage;
