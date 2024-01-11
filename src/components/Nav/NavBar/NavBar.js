import React, { useState } from "react";
import NavDivider from "../NavDivider/NavDivider";
import NavItem from "../NavItem/NavItem";
import NavExit from "../NavExit/NavExit";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import Logo from "../../Logo/Logo";

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
      <nav className="relative px-8 py-4 flex justify-between items-center bg-white border-b-2 border-black">
        <Logo />

        {/* hidden for large devices */}
        <div className="lg:hidden" onClick={toggleMenu}>
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

        {/* Commented out until I had functionality for Contact Us */}
        {/* <a
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-white border-2 border-primary text-black text-base hover:text-white hover:bg-primary font-bold  rounded-xl transition duration-200 "
          href="#i"
        >
          Contact Us
        </a> */}
      </nav>

      {/* Navigation for mobile, small, and medium devices */}
      <div
        className={`lg:hidden navbar-menu relative z-50 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8 justify-between">
            <Logo />
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

          {/* Commenting out until I had Contact Us functionality */}
          <div className="mt-auto">
            {/* <div className="pt-6">
              <a
                className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-primary rounded-xl hover:text-white"
                href="#i"
              >
                Contact Us
              </a>
            </div> */}
            <p className="my-4 text-xs text-center text-gray-400">
              Copyright © 2024
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}

// Issues
// - NavItem appears broken on smaller screens
// - Update nav links




