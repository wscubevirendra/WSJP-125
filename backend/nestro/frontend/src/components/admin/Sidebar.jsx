'use client'

import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { MdOutlineDashboard } from "react-icons/md";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Sidebar() {
    const pathname = usePathname();

    const [toggle, setToggle] = useState(true);
    const items = [
        {
            name: "Dashboard",
            path: "/admin",
            icon: <MdOutlineDashboard />
        },
        {
            name: "Category",
            path: "/admin/category",
            icon: <TbCategoryFilled />

        },
        {
            name: "Product",
            path: "/admin/product",
            icon: <TbCategoryFilled />

        }
    ]
    return (
        <div className={` ${toggle ? 'w-20' : 'w-64'} duration-200 h-screen  bg-[#3b497e]`}>
            <div className='flex justify-around py-4 px-3 border-b-2 items-center border-white'>
                {!toggle && <h1 className='text-2xl font-bold  text-white'>Nestro</h1>}
                <FaBars onClick={() => setToggle(!toggle)} className='text-white' />

            </div>
            <div className='mt-6 pe-3'>
                {
                    items.map((item, index) => {
                        const active = pathname === item.path
                        return (
                            <Link key={index} style={{ borderRadius: "0px 20px 20px 0px" }} href={item.path} className={`px-4 py-3 text-white ${active ? "bg-[#ffffff1a]" : ""} hover:bg-[#ffffff1a] mb-4 flex items-center gap-3 `}>
                                {item.icon}
                                {toggle ? "" : <span>{item.name}</span>}
                            </Link>
                        )
                    })
                }

            </div>

        </div>
    )
}
