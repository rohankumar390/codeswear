import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2">
      <div className="logo mx-5">
        <Image width={200} height={40} src="/nav.png" alt="" />
      </div>
      <div className="nav">
        <ul className="flex  items-center space-x-2 font-bold md:text-xl">
          <Link legacyBehavior href={"/"}>
            <a>
              {" "}
              <li>Tshirts</li>
            </a>
          </Link>
          <Link legacyBehavior href={"/"}>
            <a>
              {" "}
              <li>Hoodies</li>
            </a>
          </Link>
          <Link legacyBehavior href={"/"}>
            <a>
              <li>Stickers</li>
            </a>
          </Link>
          <Link legacyBehavior href={"/"}>
            <a>
              <li>Mugs</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 mx-5 top-4 ">
        <AiOutlineShoppingCart className="text-xl md:text-3xl" />
      </div>
    </div>
  );
};

export default Navbar;
