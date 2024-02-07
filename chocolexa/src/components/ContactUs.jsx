import React from "react";

const ContactUs = () => {
  return <div>

<>
  {/*
// v0 by Vercel.
// https://v0.dev/t/jpitJu69ZJp
*/}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 items-start gap-8 md:gap-12 lg:gap-16">
    <div className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-gray-500 dark:text-gray-400">
          We'll get back to you as soon as possible.
        </p>
      </div>
      <div className="space-y-2">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="name"
          placeholder="Enter your name"
        />
      </div>
      <div className="space-y-2">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="email"
          placeholder="Enter your email"
          type="email"
        />
      </div>
      <div className="space-y-2">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
          id="message"
          placeholder="Enter your message"
          defaultValue={""}
        />
      </div>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
        Send message
      </button>
    </div>
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">WhatsApp</h3>
        <p className="text-gray-500 dark:text-gray-400">
          Chat with us on WhatsApp.
        </p>
      </div>
      <div className="space-y-2">
        <a className="flex items-center underline underline-offset-2" href="#">
          Start Chat
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
            className="ml-auto h-4 w-4"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800" />
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">Call Us</h3>
        <p className="text-gray-500 dark:text-gray-400">
          Call us to place an order.
        </p>
      </div>
      <div className="space-y-2">
        <a className="flex items-center underline underline-offset-2" href="#">
          Call Now
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
            className="ml-auto h-4 w-4"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
    </div>
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">Visit Us</h3>
        <p className="text-gray-500 dark:text-gray-400">
          Come to our store to taste our delicious cakes.
        </p>
      </div>
      <div className="space-y-2">
        <a className="flex items-center underline underline-offset-2" href="#">
          Get Directions
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
            className="ml-auto h-4 w-4"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800" />
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">Opening Hours</h3>
        <p className="text-gray-500 dark:text-gray-400">
          Monday to Friday: 9am - 7pm
          <br />
          Saturday: 10am - 8pm
          <br />
          Sunday: Closed
        </p>
      </div>
    </div>
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">Our Location</h3>
        <p className="text-gray-500 dark:text-gray-400">
          Visit our store to taste our delicious cakes.
        </p>
      </div>
      <div className="h-[300px] rounded-lg overflow-hidden">
        <div className="flex flex-col items-center justify-center border-4 border-red-500 rounded-lg bg-red-200 text-red-500 p-4">
          Something went wrong
        </div>
      </div>
    </div>
  </div>
</>

  </div>;
};

export default ContactUs;
