import React from "react";

const Footer = () => {
  return (
    <div>
      <>
        {/*
// v0 by Vercel.
// https://v0.dev/t/8ppAIUdWA3y
*/}
        <footer className="bg-gray-50 dark:bg-gray-950">
          <div className="container flex items-center justify-center gap-10 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
                Visit us
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                123 Sweet Street, Cupcakeville, CA 90210
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
                Contact us
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Call us at 1-234-567-8901 or email
                <a className="underline underline-offset-2" href="#">
                  info@example.com
                </a>
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
                Follow us
              </h3>
              <div className="flex items-center gap-2">
                <a
                  className="rounded-full border border-gray-200 hover:border-gray-300"
                  href="#"
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
                    className="w-6 h-6"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  className="rounded-full border border-gray-200 hover:border-gray-300"
                  href="#"
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
                    className="w-6 h-6"
                  >
                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  className="rounded-full border border-gray-200 0 hover:border-gray-300"
                  href="#"
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
                    className="w-6 h-6"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
                Opening hours
              </h3>
              <dl className=" lg:w-1/3 w-3/4 text-lg ml-[50%] translate-x-[-50%]">
                <div className="flex justify-between">
                  <dt>Monday</dt>
                  <dd>9:00 AM - 6:00 PM</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Tuesday</dt>
                  <dd>9:00 AM - 6:00 PM</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Wednesday</dt>
                  <dd>9:00 AM - 6:00 PM</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Thursday</dt>
                  <dd>9:00 AM - 6:00 PM</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Friday</dt>
                  <dd>9:00 AM - 6:00 PM</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Saturday</dt>
                  <dd>9:00 AM - 6:00 PM</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Sunday</dt>
                  <dd className="text-gray-500 dark:text-gray-400">Closed</dd>
                </div>
              </dl>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
};

export default Footer;
