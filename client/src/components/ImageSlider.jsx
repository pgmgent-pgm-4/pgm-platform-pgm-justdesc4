import React from "react";

export default function ImageSlider({ images }) {
  return (
    <div>
      <div className="slider">
        {images.map((image, index) => (
          <img key={index} src={image.url} alt={image.alt} />
        ))}
      </div>
    </div>
  );
}
