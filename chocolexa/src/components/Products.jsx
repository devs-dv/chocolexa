import React from "react";
import chocolate from '../assets/chocolate.jpg'
import vanilla from "../assets/vanilla.jpg";
import redVelvet from "../assets/red velvet.jpg";
import blackForest from "../assets/black forest.jpg";



const Products = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Delicious Cakes
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Indulge in our heavenly selection of cakes. Each bite is a journey
              into sweetness and delight.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 items-stretch gap-6 md:gap-10 lg:gap-12">
            <div className="flex flex-col gap-2">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
