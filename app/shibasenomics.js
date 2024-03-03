'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { GoPlus } from 'react-icons/go';

const Shibasenomics = () => {
   const shibase = [
      {
         id: 1,
         icon: '/images/star.svg',
         percent: '0%',
         text: 'Tax',
      },
      {
         id: 2,
         icon: '/images/phone.svg',
         percent: '1B',
         text: 'SHibase tokens',
      },
      {
         id: 3,
         icon: '/images/user.svg',
         percent: '100%',
         text: 'Community growth',
      },
      {
         id: 4,
         icon: '/images/growth.svg',
         percent: '1000x',
         text: 'ROI potential',
      },
   ];

   const startGuide = () => {};

   return (
      <section id="shibasenomics">
         <div className="container max-w-4xl  mx-auto flex flex-col  mt-18 p-6 ">
            <div className="flex flex-col justify-center items-center">
               <h1 className="text-3xl text-[#201f54] font-bold">
                  Shibasenomics
               </h1>
            </div>

            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
               {shibase.map(({ id, icon, percent, text }) => (
                  <div key={id} className="flex flex-col items-center">
                     {/* <div> */}
                     <Image
                        src={icon}
                        width={40}
                        height={60}
                        alt="shibase"
                        className="rounded-md"
                     />
                     <h1 className="text-4xl font-bold mt-2">{percent}</h1>
                     <span className="font-bold">{text}</span>
                  </div>
                  //   </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Shibasenomics;
