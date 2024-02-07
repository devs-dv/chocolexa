import React, { useState } from "react";
import cake1 from "../assets/cake1.jpg";
import cake2 from "../assets/black forest.jpg";
import cake3 from "../assets/vanilla.jpg";
import '../App.css'
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const slides = [cake1, cake2, cake3];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div
            className="relative w-full aspect-[16/9] overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            role="region"
            aria-roledescription="carousel"
          >
            <div className="overflow-hidden" style={{ position: "relative" }}>
              <div
                className="flex carousel-container"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`w-full carousel-slide ${
                      index === currentSlide ? "visible" : "hidden"
                    }`}
                  >
                    {console.log(slide)}
                    <img
                      src={slide}
                      width={800}
                      height={600}
                      alt={`Cake ${index + 1}`}
                      style={{ aspectRatio: "16/9", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={prevSlide}
                className="previous-btn"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10%",
                  zIndex: 1,
                }}
              >
                Previous
              </button>
              <button
                onClick={nextSlide}
                className="next-btn"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10%",
                  zIndex: 1,
                }}
              >
                Next
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Delightful Cakes for Every Occasion
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Experience the joy of our delicious and beautifully crafted
                cakes. Perfect for birthdays, weddings, and other special
                events.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                className=" inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
