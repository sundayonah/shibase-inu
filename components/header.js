'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';

const Header = () => {
   const menuItems = [
      { name: 'Community', url: '#community' },
      { name: 'shibasenomics', url: '#shibasenomics' },
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
                     <button className="text-white bg-[#4a3aff] px-5 py-2 rounded-md">
                        Join Community
                     </button>
                  </div>
               ) : (
                  // desktop view
                  <div className="hidden lg:flex space-x-5 justify-center items-center">
                     {menuItems.map((menu) => (
                        <div key={menu.name}>
                           <Link href={menu.url} className="text-[#201f54]">
                              {menu.name}
                           </Link>
                        </div>
                     ))}
                     <button className="text-white bg-[#4a3aff] px-5 py-2 rounded-md">
                        Join Community
                     </button>
                  </div>
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
