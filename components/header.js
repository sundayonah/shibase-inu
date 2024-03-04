'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Header = () => {
   const menuItems = [
      { name: 'Community', url: '#community' },
      { name: 'Shibasenomics', url: '#shibasenomics' },
      { name: 'Road Map', url: '#roadMap' },
   ];

   // State to manage the mobile menu visibility
   const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

   // Function to toggle mobile menu visibility
   const toggleMobileMenu = () => {
      setMobileMenuVisible(!mobileMenuVisible);
   };

   return (
      <>
         <main className="w-full flex justify-between items-center fixed top-0 bg-[#fff] backdrop-blur-2xl shadow-lg h-20 z-20">
            <div className="flex w-full p-4 px-8 justify-between items-center shadow-custom">
               <Link href="/" className=" text-bold">
                  <Image
                     src="/images/shibase.png"
                     width={50}
                     height={40}
                     alt="logo"
                  />
               </Link>
               {/* <div> */}

               {/* Mobile menu */}
               {mobileMenuVisible ? (
                  <div className="lg:hidden flex flex-col  space-y-2 bg-[#fff] p-4  absolute top-14 right-0 w-48 shadow-2xl">
                     {menuItems.map((menu) => (
                        <div key={menu.name}>
                           <Link href={menu.url} className="text-[#201f54]">
                              {menu.name}
                           </Link>
                        </div>
                     ))}
                     <button className="text-white bg-[#2d30f0] px-5 py-2 rounded-md">
                        Join Community
                     </button>
                     <div className="flex justify-center items-center gap-3">
                        <a
                           href="https://t.me/Shibase_inu"
                           target="_blank"
                           rel="nonreferrer"
                        >
                           <FaTelegramPlane className="text-[#2d30f0] w-6 h-6" />
                        </a>
                        <a
                           href="https://x.com/Shibaseinu?t=uSP0ko7DBHNtRWmfJ3B5BQ&s=35"
                           target="_blank"
                           rel="nonreferrer"
                        >
                           <FaXTwitter className="text-[#2d30f0] w-6 h-6" />
                        </a>
                     </div>
                  </div>
               ) : (
                  <>
                     <div className="hidden lg:flex space-x-5 justify-center items-center">
                        {menuItems.map((menu) => (
                           <div key={menu.name}>
                              <Link href={menu.url} className="text-[#201f54]">
                                 {menu.name}
                              </Link>
                           </div>
                        ))}
                        <button className="text-white bg-[#2d30f0] px-5 py-2 rounded-md">
                           <a href="https://t.me/Shibase_inu" target="_blank">
                              Join Community
                           </a>
                        </button>

                        <div className="flex gap-3">
                           <a
                              href="https://t.me/Shibase_inu"
                              target="_blank"
                              rel="nonreferrer"
                           >
                              <FaTelegramPlane className="text-[#2d30f0] w-6 h-6" />
                           </a>
                           <a
                              href="https://x.com/Shibaseinu?t=uSP0ko7DBHNtRWmfJ3B5BQ&s=35"
                              target="_blank"
                              rel="nonreferrer"
                           >
                              <FaXTwitter className="text-[#2d30f0] w-6 h-6" />
                           </a>
                        </div>
                     </div>
                  </>
               )}
               <button
                  className=" lg:hidden text-gray-500 focus:outline-none"
                  onClick={toggleMobileMenu}
               >
                  {mobileMenuVisible ? <IoMdClose /> : <TiThMenu />}
               </button>
            </div>
            {/* </div> */}
         </main>
      </>
   );
};

export default Header;
