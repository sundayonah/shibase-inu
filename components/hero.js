import Image from 'next/image';
import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';

const Hero = () => {
   return (
      <main id="home" className="container mx-auto max-w-5xl p-6 ">
         <div className="grid grid-cols-1 mt-10  lg:grid-cols-2 gap-4">
            {/* left side */}
            <div className="mt-16">
               <h1
                  style={{ fontSize: '3rem', lineHeight: '3.5rem' }}
                  className=" text-[#201f54] md:text-lg leading-relaxed px-3"
               >
                  Welcome to Shibase Inu - Soon the Biggest Thing On BASE Chain
               </h1>
               <p className="text-[#201f54] mt-2">
                  As we travel along the Ethereum Chain, we have been learning
                  from our elders, the Chiba Inu, just as a puppy learns from
                  its parents. Now its time for us to soon establish and grow
                  our own community on Base Chain.
               </p>
               <div className="flex justify-start items-center space-x-6 mt-6">
                  <button className="flex justify-center items-center gap-x-3 border rounded-2xl px-3 py-2  bg-[#2d30f0] hover:bg-[#001cc4] transition-all duration-500 shadow-lg transform hover:translate-y-[-3px]">
                     <a
                        href="mailto:tbogdanov665@gmail.com "
                        target="_blank"
                        rel="nonreferrer"
                        className="text-white  text-sm "
                     >
                        Buy at Launch
                     </a>
                     {/* <LuMail className="text-white  " /> */}
                  </button>
                  <button className=" flex justify-center items-center gap-x-3 border rounded-2xl px-3 py-2  bg-[#fff] hover:bg-[#2d30f0] transition-all duration-500 shadow-lg transform hover:translate-y-[-3px]">
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
            <div className="flex justify-center items-center mt-3">
               <Image
                  src="/images/shibase.png"
                  alt=""
                  width={400}
                  height={100}
               />
            </div>
         </div>
      </main>
   );
};
export default Hero;
