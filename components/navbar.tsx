import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';

import { TR_SERVICE_ITEMS, TR_CONTACT_INFO } from '@utils/constants';
import NAV_LOGO from '@public/home/nav_logo.png';
import BurgerIcon from '@components/icons/BurgerIcon';
import CloseIcon from './icons/CloseIcon';
import classNames from "classnames";

export default function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  

  return (
    <>
      <div className="px-0 md:px-10">

      {/* Intro Header */}
      <div className="flex justify-end items-center bg-white py-5">
        {/* <Link className="sm:ml-10 px-3" href="/">
          <Image src={NAV_LOGO} alt="company logo" width={80} height={80} />
        </Link> */}

        <div className="flexcenter gap-2 sm:gap-5 mr-5 text-xs sm:text-sm">
          {['Address', 'Email', 'Instagram'].map((item, index) => {
            return (
              <Link
                href={TR_CONTACT_INFO[item].ref}
                key={`${item}-${index}`}
                className="hover:text-tr-skyBlue flexcenter gap-1"
              >
                <div className="p-1">{TR_CONTACT_INFO[item].icon()}</div>
                <div className="hidden iPhone12:flex">{TR_CONTACT_INFO[item].title}</div>
              </Link>
            );
          })}
        </div>
      </div>

      
      {/* Navbar Section - Hamburger Menu*/}
      <div className="flex justify-between bg-white sticky top-0 z-[1000]">
        <Link className="flexcenter" href="/">
          <Image src={NAV_LOGO} alt="company logo" width={200} height={100}/>
        </Link>
        {/* <Link
          className="flexcenter text-2xl sm:text-4xl font-extrabold text-tr-skyBlue ml-5 font-sans"
          href="/"
        >
          TR HVAC
        </Link> */}

        <div className='px-1 md:hidden group'>
          <div className='w-full h-full flexcenter px-3'>
          <button onClick={() => {setMenuToggle(!menuToggle); setOpenDropdown(!openDropdown);}}>
              {menuToggle ? (
                <CloseIcon/>
              ) : (
                <BurgerIcon/>
              )}
            </button>
              
          </div>

          <div className={classNames("right-0 absolute md:hidden drop-shadow-lg bg-tr-lightGray z-100 h-screen py-4 shadow-box iPhone12:px-7",
              {hidden: !openDropdown}
              )}>

            <div className='px-8 py-4 flex'>
              <Link href="/" className="hover:text-tr-skyBlue text-lg font-bold px-2 py-4" legacyBehavior>
                <a onClick={() => {setOpenDropdown(!openDropdown); setMenuToggle(!menuToggle)}}>HOME</a>
              </Link>
            </div>
            <hr/>

            <div className='px-8 py-4'>
              <Link href={'/service/'} className="hover:text-tr-skyBlue text-lg font-bold px-2 py-4" legacyBehavior>
                <a onClick={() => {setOpenDropdown(!openDropdown); setMenuToggle(!menuToggle)}}>SERVICE</a>
              </Link>
            
              {TR_SERVICE_ITEMS.map((item, i) => (
                <Link
                  key={`${item.title}-${i}`}
                  href={`/service/${item.queryName}`}
                  className="hover:text-tr-skyBlue block px-8 py-2 mt-1"
                >
                  <div onClick={() => {setOpenDropdown(!openDropdown); setMenuToggle(!menuToggle)}}>{item.title}</div>
                </Link>
              ))}
            </div>
            <hr/>

            <div className='px-8 py-4'>
              <Link href="/booking" className="hover:text-tr-skyBlue text-lg font-bold px-2 py-4" legacyBehavior>
                <a onClick={() => {setOpenDropdown(!openDropdown); setMenuToggle(!menuToggle)}}>BOOKING</a>
              </Link>
            </div>

            <div className="bg-tr-skyBlue gap-3 flex items-center md:hidden pr-3 py-3">
              <Link href={TR_CONTACT_INFO['Phone'].ref}>
                <div className="bg-white p-3 ml-4">
                    {TR_CONTACT_INFO['Phone'].icon('#FD2156', 26, 26)}
                </div>
              </Link>

              <div>
                <div className="text-xs text-tr-blue font-medium sm:text-sm mb-2">Mon-Sat 9am-7pm</div>

                <Link className="text-sm font-bold sm:text-base text-white" href={TR_CONTACT_INFO['Phone'].ref}>
                  {TR_CONTACT_INFO['Phone'].title}
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Navbar Section - Mobile*/}
        <div className="flexcenter text-lg flex hidden md:flex">
          <Link href="/" className="hover:text-tr-skyBlue px-7 py-7 h-full flexcenter">
            HOME
          </Link>
          
          <div className="group px-7 py-7 cursor-pointer h-full flexcenter relative">

            <Link href="/service/" className="group-hover:text-tr-skyBlue">
              SERVICE
            </Link>

            <div className="text-base absolute drop-shadow-lg bg-tr-lightGray z-10 hidden group-hover:block dropDown">
              {TR_SERVICE_ITEMS.map((item, i) => (
                <Link
                  key={`${item.title}-${i}`}
                  href={`/service/${item.queryName}`}
                  className="hover:text-tr-skyBlue block px-4 py-2"
                >
                  <div>{item.title}</div>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/booking" className="hover:text-tr-skyBlue px-7 py-7 h-full flexcenter">
            BOOKING
          </Link>
        </div>
        

        <div className="bg-tr-skyBlue gap-3 hidden md:flex items-center justify-center pr-3">
          <Link href={TR_CONTACT_INFO['Phone'].ref}>
            <div className="bg-white p-3 ml-4">
                {TR_CONTACT_INFO['Phone'].icon('#FD2156', 26, 26)}
            </div>
          </Link>

          <div>
            <div className="text-xs text-tr-blue font-medium sm:text-sm mb-2">Mon-Sat 9am-7pm</div>

            <Link className="text-sm font-bold sm:text-base text-white" href={TR_CONTACT_INFO['Phone'].ref}>
              {TR_CONTACT_INFO['Phone'].title}
            </Link>
          </div>
        </div>
      </div>

      </div>
    </>
  );
}