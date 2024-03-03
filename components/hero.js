import Image from 'next/image';
import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';

const Hero = () => {
   return (
      <main id="home" className="">
         <div className=" ">
            <div className="mx-auto max-w-5xl p-6 ">
               <div className="container mx-auto grid grid-cols-1 mt-10 items-center backdrop-blur-sm gap-12 lg:grid-cols-2 ">
                  {/* left side */}
                  <div className="mt-16">
                     <h1
                        style={{ fontSize: '3rem', lineHeight: '3.5rem' }}
                        className=" text-[#201f54] md:text-lg leading-relaxed px-3"
                     >
                        Welcome to Shibase Inu - Soon the Biggest Thing On BASE
                        Chain
                     </h1>
                     <p className="text-[#201f54] mt-2">
                        As we travel along the Ethereum Chain, we have been
                        learning from our elders, the Chiba Inu, just as a puppy
                        learns from its parents. Now its time for us to soon
                        establish and grow our own community on Base Chain.
                     </p>
                     <div className="flex justify-start items-center space-x-6 mt-6">
                        <button className="flex justify-center items-center gap-x-3 border rounded-2xl px-3 py-2  bg-[#4a3aff] hover:bg-[#001cc4] transition-all duration-500 shadow-lg transform hover:translate-y-[-3px]">
                           <a
                              href="mailto:tbogdanov665@gmail.com "
                              target="_blank"
                              rel="nonreferrer"
                              className="text-white  text-sm "
                           >
                              How to Buy?
                           </a>
                           {/* <LuMail className="text-white  " /> */}
                        </button>
                        <button className=" flex justify-center items-center gap-x-3 border rounded-2xl px-3 py-2  bg-[#fff] hover:bg-[#4a3aff] transition-all duration-500 shadow-lg transform hover:translate-y-[-3px]">
                           <a
                              href="https://t.me/@tbog2"
                              target="_blank"
                              rel="nonreferrer"
                              className="text-[#201f54] hover:text-[#fff]  text-sm "
                           >
                              See Chart
                           </a>
                           {/* <FaTelegramPlane className="text-white" /> */}
                        </button>
                     </div>
                  </div>

                  {/* left side */}
                  <div className="flex justify-center items-center">
                     <img
                        src="/images/shibase.png"
                        alt=""
                        className="w-72 h-72"
                     />
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
};
export default Hero;
