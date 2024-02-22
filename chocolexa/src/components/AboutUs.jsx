import React from "react";
import chocolate from "../assets/chocolate.jpg";
import vanilla from "../assets/vanilla.jpg";
import redVelvet from "../assets/red velvet.jpg";
import blackForest from "../assets/black forest.jpg";

const AboutUs = () => {
  return (
    <div>
      <>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Us
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We are dedicated to creating the most delicious and
                beautifully-designed cakes for every occasion. Our passion for
                baking is infused into every recipe, and we use only the finest
                ingredients to ensure that each bite is a delightful experience.
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 w-[50vw] overflow-hidden">
              <div className=" flex flex-col gap-2">
                <img
                  src={redVelvet}
                  width={200}
                  height={200}
                  alt="Cake"
                  className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
                />
                <img
                  src={blackForest}
                  width={200}
                  height={200}
                  alt="Cake"
                  className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
                />
              </div>
              <img
                src={vanilla}
                width={400}
                height={300}
                alt="Cake"
                className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              />
            </div>
            <div className="mx-auto max-w-3xl space-y-4">
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our team of expert bakers is committed to bringing your cake
                dreams to life. Whether it's a whimsical birthday cake, an
                elegant wedding cake, or a batch of delectable cupcakes, we pour
                our creativity and love into every confection. At Sweet
                Delights, we believe that every celebration deserves a sweet
                touch, and we are here to make your special moments even
                sweeter.
              </p>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default AboutUs;
