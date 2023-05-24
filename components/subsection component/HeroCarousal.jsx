import { useState, useEffect } from "react";

const Carousel = ({ slides, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((activeIndex + 1) % slides.length);
    }, interval);

    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex, interval, slides.length]);

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % slides.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === activeIndex ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="carousel-caption">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-prev" onClick={handlePrevClick}>
        &lt;
      </button>
      <button className="carousel-next" onClick={handleNextClick}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
