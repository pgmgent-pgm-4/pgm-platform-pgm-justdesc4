import React, { useState } from "react";
import "./css/ImageSlider.css";

export default function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <button className="left-arrow" onClick={goToPrevious}>
        &#10094;
      </button>
      <div className="slider-wrapper">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.alt}
            className={index === currentIndex ? "slide active" : "slide"}
          />
        ))}
      </div>
      <button className="right-arrow" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
}
