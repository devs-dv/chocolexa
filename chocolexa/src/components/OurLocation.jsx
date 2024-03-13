import React from "react";

const OurLocation = () => {
  return (
    <div>
      {/* This section is for ojur location head */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Our Location</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Visit our store to taste our delicious cakes.
          </p>
        </div>
      </div>

      {/* this section is for map */}
      <div className="h-[300px] rounded-lg overflow-hidden">
        <div className="flex flex-col items-center justify-center border-4  w-screen border-red-500 rounded-lg bg-red-200 text-red-500 p-4">
          <iframe
            width="100%"
            height="300"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59893.45623370581!2d85.72043461512526!3d20.244687140970413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7c3a518af27%3A0x1a9c4a8d917275d3!2sChocolexa!5e0!3m2!1sen!2sin!4v1708614443136!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
