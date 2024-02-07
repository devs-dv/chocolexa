import React from "react";

const Navigation = () => {
  return <> 
  <section >

  <header className="flex items-center justify-between h-20 w-full px-4 md:px-6 bg-[#FCD5CE]">
  <a className="flex items-center" href="#">
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
      className="h-6 w-6 text-[#6D2E1D]"
    >
      <path d="m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z" />
      <path d="M14 6.5v10" />
      <path d="M10 7.5v10" />
      <path d="m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1" />
      <path d="m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1" />
    </svg>
    <span className="ml-2 text-lg font-bold text-[#6D2E1D]">
      Chocolexa 
    </span>
  </a>
  <nav className="hidden md:flex gap-4 sm:gap-6">
    <a
      className="text-sm font-medium text-[#6D2E1D] hover:underline underline-offset-4"
      href="#"
    >
      Home
    </a>
    <a
      className="text-sm font-medium text-[#6D2E1D] hover:underline underline-offset-4"
      href="#"
    >
      Shop
    </a>
    <a
      className="text-sm font-medium text-[#6D2E1D] hover:underline underline-offset-4"
      href="#"
    >
      About Us
    </a>
    <a
      className="text-sm font-medium text-[#6D2E1D] hover:underline underline-offset-4"
      href="#"
    >
      Our Cakes
    </a>
    <a
      className="text-sm font-medium text-[#6D2E1D] hover:underline underline-offset-4"
      href="#"
    >
      Contact Us
    </a>
  </nav>
</header>
</section>

</>
  ;
};

export default Navigation;
