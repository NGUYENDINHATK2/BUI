import React, { useState } from "react";

import { close, logo, menu, logogenshin } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const hero = document.querySelector("#home");
      const navbar = document.querySelector(".navbar-container");
      // get height of hero
      const heroHeight = hero.getBoundingClientRect().height;
      // when screen
      if (window.scrollY > heroHeight) {
        navbar.classList.add("fixed");
        navbar.classList.remove("absolute");
        navbar.classList.add("navbar-ani");
        navbar.classList.add("bg-primary");
      } else {
        navbar.classList.remove("fixed");
        navbar.classList.add("absolute");
        navbar.classList.remove("navbar-ani");
        navbar.classList.remove("bg-primary");
      }
    });
  }, []);
  return (
    <nav className="w-full flex py-4 justify-between items-center navbar    z-50">
      <div className="flex items-center">
        {/* icon music */}
        <a href="/">
          <img
            src={logogenshin}
            alt="hoobank"
            className="w-[180px] h-[40px] "
          />
        </a>
      </div>

      <ul className="list-none sm:flex   hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white " : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}  `}
            onClick={() => setActive(nav.title)}
          >
            <a className="hover:underline" href={`#${nav.id}`}>
              <p>{nav.title}</p>
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden   flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-[#989292b4] hover:bg-[#989292eb] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar shadow-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
