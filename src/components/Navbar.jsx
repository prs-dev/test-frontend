import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1},
  closed: { opacity: 0},
}

const Navbar = ({setIsOpen, isOpen}) => {
  return (
    <div className="fixed w-[100%] z-[999] top-0 h-[70px] p-[10px] bg-navColor text-white flex items-center justify-between shadow-md">
      <div className="w-[70px] bg-gradient-to-t from-mainColor rounded-[10px]">
        <img className="w-[100%]" src="/assets/logov2.png" alt="" />
      </div>
      <div>
        <ul className="lg:flex xl:flex hidden gap-[20px] font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/jyotish">Bhartiya Jyotish</Link>
          </li>
          <li>
            <Link to="/legal">Sahaya Bhartiye Vidhik</Link>
          </li>
          <li>
            <Link to="/natural">Natural Life Care</Link>
          </li>
          <li>
            <Link to="/panel">Panellist</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/vastu">Vastu Consultancy</Link>
          </li>
          {/* <li>
            <Link to="/contact">Contact Us</Link>
          </li> */}
        </ul>
      </div>
      <div className="lg:flex xl:flex hidden items-center gap-[10px]">
        <i className="fa-solid fa-bag-shopping text-[30px]"></i>
        <div className="p-[10px] rounded-[5px] border flex items-center justify-center">
          <Link to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="lg:hidden flex" onClick={() => setIsOpen(prev => !prev)}>
        {isOpen ? <motion.i whileTap={{opacity: 0}} initial={{opacity: 1}} className="fa-solid fa-xmark text-2xl"></motion.i> : <motion.i whileTap={{opacity: 0}} initial={{opacity: 1}} className="fa-solid fa-bars text-2xl"></motion.i>}
      </div>
    </div>
  );
};

export default Navbar;
