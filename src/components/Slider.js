import React, { useState, useEffect } from 'react';
import styles from './style.css';

const Slider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImage]);


  return (
    <div className='slider'>
      <div className='imageContainer'>
        <a href={images[currentImage].link}>
          <img src={images[currentImage].url} alt={images[currentImage].alt} />
        </a>
      </div>

      <div className='controls'>
        <button className='navButton' onClick={prevImage}>
          Anterior
        </button>
        <div className='dots'>
          {images.map((image, index) => (
            <span
              key={index}
              className={currentImage === index ? styles.activeDot : styles.dot}
              onClick={() => goToImage(index)}
            ></span>
          ))}
        </div>
        <button className='navButton' onClick={nextImage}>
          Próxima
        </button>
      </div>
    </div>
  );
};

export default Slider;
