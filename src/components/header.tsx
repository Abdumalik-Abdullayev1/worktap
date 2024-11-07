'use client'

import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.svg'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";

interface MenuItem {
    id: number;
    title: string;
    href: string;
}

const Header = () => {
    const menu: MenuItem[] = [
        {
            id: 1,
            title: "Биржа",
            href: "/birja"
        },
        {
            id: 2,
            title: "Ворки",
            href: "/birja"
        },
        {
            id: 3,
            title: "Конкурсы",
            href: "/birja"
        },
        {
            id: 4,
            title: "Создать ворк",
            href: "/birja"
        },
        {
            id: 5,
            title: "Создать заказ",
            href: "/birja"
        }
    ];
    const closeDrawer = () => {
        const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement | null;
        if (menuToggle) {
            menuToggle.checked = false;
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between px-10 xl:px-32 py-4 bg-white shadow-md">
                <div className='w-[130px] sm:w-[170px] lg:w-[200px]'>
                    <Image
                        src={logo}
                        width={200}
                        height={200}
                        alt="logotype"
                    />
                </div>
                <div className="hidden md:flex md:items-center gap-6">
                    <ul className="flex space-x-5">
                        {menu.map((item) => (
                            <li key={item.id}>
                                <Link href={item.href} passHref>
                                    <div className="font-semibold cursor-pointer hover:text-green-500 transition text-[16px] lg:text-lg">{item.title}</div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='hidden xl:flex gap-5'>
                    <button className='bg-slate-200 text-green-600 px-[30px] py-[10px] rounded-[50px]'>Регистрация</button>
                    <button className='bg-green-600 text-slate-200 px-[30px] py-[10px] rounded-[50px]'>Войти</button>
                </div>
                <div className="text-2xl xl:hidden">
                    <label htmlFor="menu-toggle" className="cursor-pointer">
                        <RxHamburgerMenu />
                    </label>
                </div>
            </div>
            <input type="checkbox" id="menu-toggle" className="hidden" />
            <div className="drawer fixed inset-0 z-50 bg-black bg-opacity-50 hidden">
                <div className="bg-white w-64 h-full p-4">
                    <div className="flex justify-end mb-4">
                        <label htmlFor="menu-toggle" className="text-3xl cursor-pointer text-gray-600">
                            &times;
                        </label>
                    </div>
                    <ul className="space-y-4">
                        {menu.map((item) => (
                            <li key={item.id}>
                                <Link href={item.href} passHref>
                                    <div className="text-lg font-semibold cursor-pointer hover:text-blue-500 transition"
                                        onClick={closeDrawer}>
                                        {item.title}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='flex flex-col mt-5 gap-5'>
                        <button className='bg-slate-200 text-green-600 px-[30px] py-[10px] rounded-[50px]'>Регистрация</button>
                        <button className='bg-green-600 text-slate-200 px-[30px] py-[10px] rounded-[50px]'>Войти</button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                #menu-toggle:checked + .drawer {
                    display: block;
                    transform: translateX(0);
                    transition: transform 0.3s ease-in-out;
                }

                .drawer {
                    display: none;
                    transform: translateX(-100%); /* Drawer is initially offscreen */
                }
            `}</style>
        </div>
    );
};

export default Header;
