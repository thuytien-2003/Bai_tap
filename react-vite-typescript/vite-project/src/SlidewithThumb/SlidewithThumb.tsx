import styles from './SlidewithThumb.module.css';
import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const SlidewithThumb = () => {
  const images = [
    '/images/maygiat.jpg',
    '/images/loa.jpg',
    '/images/camera.jpg',
    '/images/sach.jpg',
    '/images/tainghe.jpg',
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Slide with Thumb</h2>
      <div className={styles.sliderContainer}>
        <button className={styles.prevButton} onClick={goToPrev}>
          <AiOutlineLeft size={32} color="#222" />
        </button>
        <img src={images[currentIndex]} alt="Slide" className={styles.mainImage} />
        <button className={styles.nextButton} onClick={goToNext}>
          <AiOutlineRight size={32} color="#222" />
        </button>
      </div>
      <div className={styles.thumbnails}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`${styles.thumbnail} ${currentIndex === index ? styles.activeThumbnail : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SlidewithThumb;