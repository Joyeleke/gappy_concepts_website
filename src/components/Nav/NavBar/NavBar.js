import React, { useState } from "react";
import NavDivider from "../NavDivider/NavDivider";
import NavItem from "../NavItem/NavItem";
import NavExit from "../NavExit/NavExit";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <h1 className="text-3xl font-bold">Gappy Concepts</h1>

        {/* hidden for large devices */}
        <div className="lg:hidden " onClick={toggleMenu}>
          <HamburgerIcon />
        </div>

        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <NavItem text="Home" size="large" />
          <NavDivider />

          <NavItem text="Exhibition" size="large" />
          <NavDivider />

          <NavItem text="Products" size="large" />
          <NavDivider />

          <NavItem text="About" size="large" />
        </ul>

        <a
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
          href="#i"
        >
          Contact Us
        </a>
      </nav>

      {/* Navigation for mobile, small, and medium devices */}
      <div className={`navbar-menu relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div class="flex items-center mb-8">
            <h1 class="text-3xl font-bold">Gappy Concepts</h1>
            <NavExit onClick={closeMenu} />
          </div>
          <div>
            <ul>
              <NavItem text="Home" size="small" />
              <NavItem text="Exhibiton" size="small" />
              <NavItem text="Products" size="small" />
              <NavItem text="About" size="small" />
            </ul>
          </div>

          <div class="mt-auto">
            <div class="pt-6">
              <a
                class="block px-4 py-3 mb-3  text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                href="#i"
              >
                Contact Us
              </a>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              Copyright © 2024
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}

// To-Do
//update nav links
// add maybe a logo component
//probably fix button?
//fix wonky exit sign
