import React from "react";

const Navbar = () => {
  return (
    <div className="w-full min-h-screen bg-[url('/herobanner.jpg')] bg-cover bg-center bg-fixed relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>

      {/* Navbar */}
      <div className="relative z-20 px-6 lg:px-24 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between backdrop-blur-md bg-black/30 rounded-full px-8 py-4 border border-gray-700/50">
          <div>
            <span className="font text-[#00C2FF] text-3xl font-bold tracking-wider">
              KRYOS
            </span>
          </div>

          <nav>
            <ul className="flex gap-8 text-gray-200 items-center">
              <li className="hover:text-[#00C2FF] cursor-pointer transition-colors duration-300 font-medium">
                Home
              </li>
              <li className="hover:text-[#00C2FF] cursor-pointer transition-colors duration-300 font-medium">
                About Us
              </li>
              <li className="hover:text-[#00C2FF] cursor-pointer transition-colors duration-300 font-medium">
                Buy
              </li>
              <li className="ml-6 px-6 py-2 bg-[#00C2FF] text-black rounded-full hover:bg-[#00a8e0] transition-colors duration-300 font-medium">
                Contact
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight max-w-4xl">
          Redefine Time with <span className="text-[#00C2FF]">KRYOS</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl">
          The Future of Smart Watches - Where Precision Meets Elegance
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-3 bg-[#00C2FF] text-black rounded-full hover:bg-[#00a8e0] transition-colors duration-300 font-medium text-lg">
            Explore Collection
          </button>
          <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors duration-300 font-medium text-lg">
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
