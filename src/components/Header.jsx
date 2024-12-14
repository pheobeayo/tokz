import  { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="py-8 bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A] w-screen ">
      <div className="w-[90%] mx-auto lg:flex md:flex justify-between hidden">
        <h1 className='font-montserrat text-[40px] font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#fff] via-[#15BFFD] to-[#fff]'>Tokz</h1>
        <nav>
          <NavLink
            to="/"
            className="text-white hover:text-[#15BFFD] hover:font-[700] mr-10 text-[18px]"
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className="text-white hover:text-[#15BFFD] hover:font-[700] mr-10 text-[18px]"
          >
            About Us
          </NavLink>
          
          
        </nav>
        <w3m-button /> 
       
      </div>
      <div className="w-[95%] mx-auto flex justify-between lg:hidden md:hidden relative">
      <h1 className='font-montserrat text-white text-[20px] '>Tokz</h1>
        <Hamburger toggled={isOpen} toggle={setOpen} color="#427142" direction="right"/>
        {isOpen && (<nav className="flex flex-col bg-white p-8 py-12 h-[100vh] w-[100%] absolute top-20 left-0 bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A] z-50">
          <NavLink
            to="/"
            className="text-white hover:text-[#15BFFD] hover:font-[700] mb-6 text-[18px]"
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className="text-white hover:text-[#15BFFD] hover:font-[700] mb-6 text-[18px]"
          >
            About us
          </NavLink>
          <w3m-button />
         
         
        </nav>)}
      </div>
    </header>
  );
};

export default Header;
