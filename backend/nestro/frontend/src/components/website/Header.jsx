"use client";

import React, { useState } from "react";
import Link from "next/link";

import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineSearch,
} from "react-icons/hi";

import { FiShoppingBag } from "react-icons/fi";
import { CiUser } from "react-icons/ci";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Store",
      path: "/store",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Checkout",
      path: "/checkout",
    },
    {
      name: "Sign In",
      path: "/login",
    },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="w-full bg-[#f5f5f4] border-b border-[#e7e5e4] sticky top-0 left-0 z-50">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 h-[86px] flex items-center justify-between">
          
          {/* LOGO */}
          <Link
            href="/"
            className="text-[28px] md:text-[34px] font-semibold tracking-[4px] text-[#1f1f1f]"
          >
            NESTRO<span className="text-[#c08a5b]">.</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-3">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`px-5 py-3 rounded-xl text-[18px] font-medium duration-300
                ${
                  item.name === "Home"
                    ? "bg-[#ebe4dd] text-[#a56a38]"
                    : "text-[#6b7280] hover:text-[#1f1f1f]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-5">
            
            {/* SEARCH */}
            <button className="hidden sm:flex text-[28px] text-[#6b7280] hover:text-[#1f1f1f] duration-300">
              <HiOutlineSearch />
            </button>

            {/* CART */}
            <button className="relative flex items-center justify-center text-[25px] text-[#6b7280] hover:text-[#1f1f1f] duration-300">
              <FiShoppingBag />

              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#9a6a43] text-white text-[11px] font-medium flex items-center justify-center">
                3
              </span>
            </button>

            {/* USER */}
            <button className="w-[46px] h-[46px] rounded-full border border-[#c08a5b] flex items-center justify-center text-[28px] text-[#9a6a43] hover:bg-[#c08a5b] hover:text-white duration-300">
              <CiUser />
            </button>

            {/* MOBILE MENU */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-[32px] text-[#1f1f1f]"
            >
              <HiOutlineMenuAlt3 />
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 lg:hidden duration-300 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 w-[80%] sm:w-[60%] h-screen bg-white z-50 p-6 duration-500 lg:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* TOP */}
        <div className="flex items-center justify-between mb-10">
          <Link
            href="/"
            className="text-[30px] font-semibold tracking-[4px] text-[#1f1f1f]"
          >
            NESTRO<span className="text-[#c08a5b]">.</span>
          </Link>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-[34px] text-[#1f1f1f]"
          >
            <HiOutlineX />
          </button>
        </div>

        {/* MOBILE NAV */}
        <nav className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-4 rounded-xl text-[17px] font-medium duration-300
              ${
                item.name === "Home"
                  ? "bg-[#ebe4dd] text-[#a56a38]"
                  : "text-[#6b7280] hover:bg-[#f5f5f4]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* BOTTOM */}
        <div className="absolute bottom-10 left-6 flex items-center gap-5">
          <button className="text-[28px] text-[#6b7280]">
            <HiOutlineSearch />
          </button>

          <button className="relative text-[24px] text-[#6b7280]">
            <FiShoppingBag />

            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#9a6a43] text-white text-[10px] flex items-center justify-center">
              3
            </span>
          </button>

          <button className="w-[42px] h-[42px] rounded-full border border-[#c08a5b] flex items-center justify-center text-[24px] text-[#9a6a43]">
            <CiUser />
          </button>
        </div>
      </div>
    </>
  );
}