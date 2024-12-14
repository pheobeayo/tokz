import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { CgHomeAlt } from "react-icons/cg";
import { BiBox } from "react-icons/bi";
import { TbSettings } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { RiKakaoTalkFill } from "react-icons/ri";

const MobileSidebar = () => {
  const [isOpen, setOpen] = useState(false);
  

  const activeStyle = {
    borderLeft: "1px solid #61CEF6",
    borderRight: "1px solid #61CEF6",
    width: "100%",
    padding: "20px",
  };

  return (
    <header className="lg:hidden md:hidden flex justify-between my-4 relative">
      <h1 className='font-montserrat text-[20px] font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#fff] via-[#15BFFD] to-[#2A3E84] my-4'>Tokz</h1>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        color="#427142"
        direction="right"
      />
      {isOpen && (
        <div className="bg-[#040927] text-[rgb(15,22,15)] p-8 py-12 h-[100vh] w-[100%] absolute top-20 left-0 bg-baseBlack/70 z-50">
          <w3m-button />
          <NavLink
            to="/dashboard"
            className="text-[14px] text-white flex items-center py-4 mb-4 px-4 hover:text-[#15BFFD]"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            end
          >
            <CgHomeAlt className="mr-4" />
            Dashboard
          </NavLink>
          <NavLink to="/dashboard" className="text-[14px] text-white flex items-center py-4 mb-4 px-4 hover:text-[#15BFFD]" style={({ isActive }) => isActive ? activeStyle : null} end><CgHomeAlt className="mr-4" />Dashboard</NavLink>
          <NavLink to="deployedtokens" className="text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#15BFFD]" style={({ isActive }) => isActive ? activeStyle : null}><BiBox className="mr-4" /> Deployed Tokens</NavLink>
          <NavLink to="history" className="text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#15BFFD]" style={({ isActive }) => isActive ? activeStyle : null}><RiKakaoTalkFill className="mr-4" /> History</NavLink>
          <button className="bg-[#040927] text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#15BFFD]" ><TbSettings className="mr-4" /> Log out</button>
        </div>
      )}
    </header>
  );
};

export default MobileSidebar;
