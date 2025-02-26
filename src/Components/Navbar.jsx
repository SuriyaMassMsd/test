import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar Container */}
      <div className="relative h-[70px] sm:h-[100px] bg-[#4365D0] rounded-[14px] flex items-center justify-between px-6 sm:px-10 w-full">
        {/* Logo */}
        <div>
          <img className="w-16 sm:w-20" src="logo.png" alt="logo" />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <svg
          className="sm:hidden text-white cursor-pointer flex"
          onClick={() => setMenuOpen(!menuOpen)}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
          />
        </svg>

        {/* Desktop Nav Items */}
        <div className="hidden sm:flex">
          <ul className="font-semibold text-[24px] text-white flex items-center gap-10">
            <li>Dashboard</li>
            <li>Courses</li>
            <li>Learnings</li>
            <li>Community</li>
          </ul>
        </div>

        {/* User Icons (Only on Desktop) */}
        <div className="hidden sm:flex items-center gap-10">
          <svg
            width="40"
            height="40"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="64" height="64" rx="32" fill="white" />
            <path
              d="M43 34.1632V28.3332C42.9974 25.7356 42.0755 23.2227 40.3978 21.2396C38.72 19.2565 36.3946 17.9311 33.8333 17.4982V15.4998C33.8333 15.0136 33.6402 14.5473 33.2964 14.2035C32.9525 13.8597 32.4862 13.6665 32 13.6665C31.5138 13.6665 31.0475 13.8597 30.7036 14.2035C30.3598 14.5473 30.1667 15.0136 30.1667 15.4998V17.4982C27.6054 17.9311 25.28 19.2565 23.6022 21.2396C21.9244 23.2227 21.0026 25.7356 21 28.3332V34.1632C19.9302 34.5414 19.0035 35.2413 18.347 36.1669C17.6906 37.0925 17.3365 38.1984 17.3333 39.3332V42.9998C17.3333 43.4861 17.5265 43.9524 17.8703 44.2962C18.2141 44.64 18.6804 44.8332 19.1667 44.8332H24.9233C25.3455 46.3867 26.2672 47.7581 27.5461 48.7358C28.825 49.7136 30.3901 50.2433 32 50.2433C33.6099 50.2433 35.175 49.7136 36.4539 48.7358C37.7328 47.7581 38.6545 46.3867 39.0767 44.8332H44.8333C45.3196 44.8332 45.7859 44.64 46.1297 44.2962C46.4735 43.9524 46.6667 43.4861 46.6667 42.9998V39.3332C46.6635 38.1984 46.3094 37.0925 45.6529 36.1669C44.9965 35.2413 44.0698 34.5414 43 34.1632ZM24.6667 28.3332C24.6667 26.3882 25.4393 24.523 26.8145 23.1477C28.1898 21.7725 30.0551 20.9998 32 20.9998C33.9449 20.9998 35.8102 21.7725 37.1854 23.1477C38.5607 24.523 39.3333 26.3882 39.3333 28.3332V33.8332H24.6667V28.3332ZM32 46.6665C31.3601 46.6626 30.7324 46.4914 30.1792 46.1698C29.626 45.8481 29.1666 45.3873 28.8467 44.8332H35.1533C34.8334 45.3873 34.374 45.8481 33.8208 46.1698C33.2676 46.4914 32.6399 46.6626 32 46.6665ZM43 41.1665H21V39.3332C21 38.8469 21.1931 38.3806 21.537 38.0368C21.8808 37.693 22.3471 37.4998 22.8333 37.4998H41.1667C41.6529 37.4998 42.1192 37.693 42.463 38.0368C42.8068 38.3806 43 38.8469 43 39.3332V41.1665Z"
              fill="#4365D0"
            />
          </svg>
          <img className="w-[60px]" src="usericon.png" alt="userIcon" />
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`z-50 absolute top-0 left-0 w-full bg-[#4365D0] text-white p-6 transition-transform duration-300 h-screen ${
          menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        } sm:hidden`}
        style={{
          transformOrigin: "top",
          transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
        }}
      >
        <div
          className="absolute top-10 right-13 cursor-pointer text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          X
        </div>
        <ul className="mt-20 font-semibold text-[20px] space-y-20 text-center z-60">
          <li className="hover:text-gray-400">Dashboard</li>
          <li className="hover:text-gray-400">Courses</li>
          <li className="hover:text-gray-400">Learnings</li>
          <li className="hover:text-gray-400">Community</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
