import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
   FaTwitter,
   FaLinkedinIn,
   FaFacebookF,
   FaInstagramSquare,
   FaTelegramPlane,
} from 'react-icons/fa';

const Footer = () => {
   const menuItems = [
      { name: 'Community', url: '#community' },
      { name: 'shibasenomics', url: '#shibasenomics' },
      { name: 'Road Map', url: '#roadMap' },
   ];
   return (
      <main className="container mx-auto max-w-5xl p-6">
         {/* <div className="grid grid-cols-1 mt-10  lg:grid-cols-3 "> */}
         <div className="flex justify-around items-center">
            <div>
               <Image
                  src="/images/shibase.png"
                  alt=""
                  className=""
                  width={80}
                  height={80}
               />
            </div>
            <div className="flex gap-4">
               {menuItems.map((menu) => (
                  <div key={menu.name} className="">
                     <Link href={menu.url} className=" text-[#201f54] ">
                        {menu.name}
                     </Link>
                  </div>
               ))}
            </div>
            <div className="flex gap-3">
               <a href="https://t.me/Shibase_inu">
                  <FaTelegramPlane className="text-[#4a3aff] w-6 h-6" />
               </a>
               <a href="https://x.com/Shibaseinu?t=uSP0ko7DBHNtRWmfJ3B5BQ&s=35">
                  <FaTwitter className="text-[#4a3aff] w-6 h-6" />
               </a>
               <a href="">
                  <FaLinkedinIn className="text-[#4a3aff] w-6 h-6" />
               </a>
               <a href="">
                  <FaInstagramSquare className="text-[#4a3aff] w-6 h-6" />
               </a>
            </div>
         </div>
         <div className="flex justify-center items-center mt-5">
            <span className="text-center">
               Copyright © 2024 | All Rights Reserved
            </span>
         </div>
      </main>
   );
};

export default Footer;
