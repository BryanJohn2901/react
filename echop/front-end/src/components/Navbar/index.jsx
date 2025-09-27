import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import { FaShoppingCart } from "react-icons/fa";
const MenuLinks = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Shop", link: "/#shop" },
  { id: 3, name: "About", link: "/#about" },
  { id: 4, name: "Blogs", link: "/#blog" },
];

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo e links principais */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>

            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Seções do lado direito */}
          <div className="flex items-center gap-4">
            {/* Search bar */}
            <div className="relative group hidden sm:block">
              <IoMdSearch
                className="text-xl text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3"
              />
              <input
                className="w-0 group-hover:w-72 transition-all duration-300 py-2 pr-10 pl-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                type="text"
                placeholder="Search"
              />
            </div>
                {/* order button section*/}
                <button>
                    <FaShoppingCart className='text-xl text-gray-600 dark:text-gray-400' />
                </button>
            {/* Dark Mode Toggle - placeholder */}
            <div>{/* botão de toggle aqui depois */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
