import React from "react";
import CarouselItem from "../assets/bakery.jpg"; // Adjust the path accordingly
import CarouselContent from "../assets/bakery.jpg"; // Adjust the path accordingly
import CarouselPrevious from "../assets/bakery.jpg"; // Adjust the path accordingly
import CarouselNext from "../assets/bakery.jpg"; // Adjust the path accordingly
import Carousel from "../assets/bakery.jpg"; // Adjust the path accordingly
import cake1 from '../assets/cake1.jpg'



const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
  <div className="container px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
      <div
        className="relative w-full aspect-[16/9] overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
        role="region"
        aria-roledescription="carousel"
      >
        <div className="overflow-hidden">
          <div
            className="flex -ml-4"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            <div
              role="group"
              aria-roledescription="slide"
              className="min-w-0 shrink-0 grow-0 basis-full pl-4"
            >
              <img
                src={cake1}
                width={800}
                height={600}
                alt="Cake 1"
                style={{ aspectRatio: "800 / 600", objectFit: "cover" }}
              />
            </div>
            <div
              role="group"
              aria-roledescription="slide"
              className="min-w-0 shrink-0 grow-0 basis-full pl-4"
            >
              <img
                src="/placeholder.svg"
                width={800}
                height={600}
                alt="Cake 2"
                style={{ aspectRatio: "800 / 600", objectFit: "cover" }}
              />
            </div>
            <div
              role="group"
              aria-roledescription="slide"
              className="min-w-0 shrink-0 grow-0 basis-full pl-4"
            >
              <img
                src="/placeholder.svg"
                width={800}
                height={600}
                alt="Cake 3"
                style={{ aspectRatio: "800 / 600", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <button
          className="inline-flex items-center whitespace-nowrap shrink-0 justify-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm font-medium hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full -left-12 top-1/2 -translate-y-1/2"
          disabled=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          <span className="sr-only bg-slate-500">Previous slide</span>
        </button>
        <button className="inline-flex items-center whitespace-nowrap shrink-0 justify-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm font-medium hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full -right-12 top-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
          <span className="sr-only">Next slide</span>
          
        </button>
      </div>
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Delightful Cakes for Every Occasion
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Experience the joy of our delicious and beautifully crafted cakes.
            Perfec
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
