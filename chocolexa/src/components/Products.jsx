import React from "react";
import pastry from "../assets/pastry.png";
import bread from "../assets/bread.png";
import cake from "../assets/cake.png";
import { Link } from "react-router-dom";
import blackForest from "../assets/black forest.jpg";
// import MoreProducts from "./MoreProducts";
// import { Link } from 'react-router-dom'; // Import Link from React Router

const Products = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="grid gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Products
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Indulge in our heavenly selection of cakes. Each bite is a journey
              into sweetness and delight.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 items-stretch gap-6 md:gap-10 lg:gap-12 lg:ml-40 lg:mr-40">
            <div className="flex flex-col gap-2 items-center border p-4 rounded-xl">
              <img
                src={bread}
                alt="Chocolate Cake"
                className="max-md:w-[80vw] aspect-video overflow-hidden rounded-lg object-cover object-center max-lg:overflow-visible max-lg:hover:scale-100 hover:scale-105 hover:overflow-visible hover:drop-shadow-2xl transition-all duration-300"
              />
              <div className=" absolute bg-[#f2aab1] w-[20vw] max-lg:w-[40vw] max-lg:h-[15vw] max-md:w-[80vw] max-md:h-[25vw] max-lg:mt-20 h-[10vw] -z-20 mt-12" />
              <h3 className="font-bold text-lg">Bread Items</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Decadent and rich
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center border p-4 rounded-xl">
              <img
                src={cake}
                alt="Chocolate Cake"
                className="max-md:w-[70vw] aspect-video overflow-hidden rounded-lg object-cover object-center max-lg:overflow-visible max-lg:hover:scale-100 hover:scale-105 hover:overflow-visible hover:drop-shadow-2xl transition-all duration-300"
              />
              <div className=" absolute bg-[#f2aab1] w-[20vw] h-[10vw] max-lg:w-[40vw] max-lg:h-[15vw] max-md:w-[80vw] max-md:h-[25vw] max-lg:mt-20 -z-20 mt-12" />
              <h3 className=" max-lg:mt-10 font-bold text-lg">Cake Items</h3>
              <p className=" text-sm text-gray-500 dark:text-gray-400">
                Decadent and rich
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center border p-4 rounded-xl">
              <img
                src={pastry}
                alt="Chocolate Cake"
                className="max-md:w-[80vw] aspect-video overflow-hidden rounded-lg object-cover object-center max-lg:overflow-visible max-lg:hover:scale-100 hover:scale-105 hover:overflow-visible hover:drop-shadow-2xl transition-all duration-300"
              />
              <div className=" absolute bg-[#f2aab1] w-[20vw] h-[10vw] max-lg:w-[40vw] max-lg:h-[15vw] max-md:w-[80vw] max-md:h-[25vw] max-lg:mt-20 -z-20 mt-12" />
              <h3 className="font-bold text-lg">Pastery Cake</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Decadent and rich
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <Link to="/Products">
          <div className="flex justify-center p-11 ">
            <button class="border-white text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">
              <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
              <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
              <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
              <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
              <p class="z-10 absolute bottom-2 left-2">See more</p>
            </button>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Products;

{
  /* <div className="flex flex-col gap-2">
              <img
                src={chocolate}
                alt="Chocolate Cake"
                width={400}
                height={225}
                className="aspect-video overflow-hidden rounded-lg object-cover object-center border border-gray-200 dark:border-gray-800"
              />
              <h3 className="font-bold text-lg">Chocolate Cake</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Decadent and rich
              </p>
              <div className="font-bold">$19.99</div>
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                Add to cart
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <img
                src={vanilla}
                alt="Vanilla Cake"
                width={400}
                height={225}
                className="aspect-video overflow-hidden rounded-lg object-cover object-center border border-gray-200 dark:border-gray-800"
              />
              <h3 className="font-bold text-lg">Vanilla Cake</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Simple and delightful
              </p>
              <div className="font-bold">$14.99</div>
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                Add to cart
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <img
                src={redVelvet}
                alt="Red Velvet Cake"
                width={400}
                height={225}
                className="aspect-video overflow-hidden rounded-lg object-cover object-center border border-gray-200 dark:border-gray-800"
              />
              <h3 className="font-bold text-lg">Red Velvet Cake</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Velvety and smooth
              </p>
              <div className="font-bold">$24.99</div>
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                Add to cart
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <img
                src={blackForest}
                alt="Carrot Cake"
                width={400}
                height={225}
                className="aspect-video overflow-hidden rounded-lg object-cover object-center border border-gray-200 dark:border-gray-800"
              />
              <h3 className="font-bold text-lg">Black Forest</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Moist and spiced
              </p>
              <div className="font-bold">$17.99</div>
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                Add to cart
              </button>
            </div> */
}
