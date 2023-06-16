import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[70px] p-[10px] bg-navColor text-white flex items-center justify-between shadow-md z-50">
      <div className="w-[70px] bg-gradient-to-t from-mainColor rounded-[10px]">
        <img className="w-[100%]" src="/assets/logov2.png" alt="" />
      </div>
      <div>
        <ul className="flex gap-[20px] font-semibold">
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
      <div className="flex items-center gap-[10px]">
        <i className="fa-solid fa-bag-shopping text-[30px]"></i>
        <div className="p-[10px] rounded-[5px] border flex items-center justify-center">
          <Link to="/contact">
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
