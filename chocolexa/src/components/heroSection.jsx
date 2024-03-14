import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "../App.css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { car } from "./inedx";
import c from '../assets/chocolate.jpg'


const HeroSection = () => {
  console.log(car);
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr-400px] lg:gap-12 xl:grid-cols-[1fr-600px]">
          <div
            className="relative w-full aspect-[16/9] overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            role="region"
            aria-roledescription="carousel"
          >
            <div className="overflow-hidden" style={{ position: "relative" }}>
              <div
                className=""
                style={{
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                <div className="">
                  <Swiper>
                    {car.map((slide, index) => (
                      <SwiperSlide>
                        <img
                          src={slide.item}
                          alt={slide.alt}
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
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
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
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
