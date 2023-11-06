import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="relative w-full h-64 md:h-96 lg:h-120 overflow-hidden">
      <div
        className="flex"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} className="w-full" />
        ))}
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-3 bg-gray-800 text-white px-3 py-1 rounded"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-3 bg-gray-800 text-white px-3 py-1 rounded"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
