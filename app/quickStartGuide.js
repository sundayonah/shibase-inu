'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { GoPlus } from 'react-icons/go';

const QuickStartGuard = () => {
   const [visibleText, setVisibleText] = useState({});
   const [rotatedIcons, setRotatedIcons] = useState({});

   const toggleTextVisibility = (id) => {
      setVisibleText((prevVisibleText) => ({
         ...prevVisibleText,
         [id]: !prevVisibleText[id],
      }));
      setRotatedIcons((prevRotatedIcons) => ({
         ...prevRotatedIcons,
         [id]: !prevRotatedIcons[id],
      }));
   };

   const guides = [
      {
         id: 1,
         name: 'Create a wallet',
         text: 'Download Trustwallet on Andriod at Google Playstore or on IOS at Applestore',
      },
      {
         id: 2,
         name: 'Transfer funds',
         text: 'Buy with your creditcard or bankaccount some ETH in your wallet',
      },
      {
         id: 3,
         name: 'Contract Address',
         text: 'Copy from Shibaseton.com the contract address',
      },
      {
         id: 4,
         name: 'Trust Wallet / Uniswap',
         text: 'Go to Trustwallet browser. type in uniswap. Once at Uniswapconnect wallet and paste the contract adress in the field for swap. You have now purchased Shibase tokens.',
      },
   ];

   const startGuide = () => {};

   return (
      <section id="community">
         <div className="container max-w-4xl  mx-auto flex flex-col justify-center items-center mt-24 p-6 ">
            <div className="flex flex-col justify-center items-center">
               <h1 className="text-3xl text-[#201f54] font-bold">
                  Quick start guide
               </h1>
               <p className="text-[#201f54] text-sm mt-2">
                  Get here your dog treats
               </p>
            </div>

            <div className="flex justify-start items-center space-x-6 mt-6">
               <button className="flex justify-center items-center gap-x-3 border rounded-2xl px-4 py-2  bg-[#2d30f0] hover:bg-[#001cc4] transition-all duration-500 shadow-lg">
                  <a
                     href="#"
                     target="_blank"
                     rel="nonreferrer"
                     className="text-white text-sm "
                  >
                     Buy at Launch
                  </a>
                  {/* <LuMail className="text-white  " /> */}
               </button>
               <button className=" flex justify-center items-center gap-x-3 border rounded-2xl px-4 py-2  bg-[#fff] hover:bg-[##2d30f0] transition-all duration-500 shadow-lg ">
                  <a
                     href="https://t.me/Shibase_inu"
                     target="_blank"
                     rel="nonreferrer"
                     className="text-[#201f54]
                     hover:text-[#2d30f0] text-sm "
                  >
                     {' '}
                     Join now
                  </a>
                  {/* <FaTelegramPlane className="text-white" /> */}
               </button>
               <button className=" flex justify-center items-center gap-x-3 border rounded-2xl px-4 py-2  bg-[#fff] hover:bg-[##2d30f0] transition-all duration-500 shadow-lg ">
                  <a
                     href="#"
                     target="_blank"
                     rel="nonreferrer"
                     className="text-[#201f54] hover:text-[#2d30f0]  text-sm "
                  >
                     Chart
                  </a>
                  {/* <FaTelegramPlane className="text-white" /> */}
               </button>
            </div>

            <div className="w-full">
               {guides.map(({ id, name, text }) => (
                  <div
                     key={id}
                     className={`flex justify-between items-start p-5 m-3 rounded-xl shadow-lg transition-all duration-500 ease-out hover:ease-in  ${
                        visibleText[id] ? 'border border-blue-600' : ''
                     }`}
                  >
                     <div>
                        <h1 className="text-[#201f54]">{name}</h1>
                        <span
                           className={`text-sm  ${
                              visibleText[id] ? 'block' : 'hidden'
                           }`}
                        >
                           {text}
                        </span>
                     </div>

                     <div
                        className="p-4 cursor-pointer"
                        onClick={() => toggleTextVisibility(id)}
                     >
                        <GoPlus
                           className={`w-8 h-8 shadow-lg rounded-full p-1 transition-all duration-500 ${
                              visibleText[id] ? 'rotate-45' : ''
                           }`}
                        />
                     </div>
                  </div>
               ))}
            </div>
            {/* <button className="bg-blue-500 transition ease-in-out duration-300">
               Ease in
            </button> */}
         </div>
      </section>
   );
};

export default QuickStartGuard;
