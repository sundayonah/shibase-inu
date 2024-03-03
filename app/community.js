import Image from 'next/image';
import React from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';

const Community = () => {
   return (
      <section id="community">
         <div className="container  max-w-5xl  mx-auto flex flex-col justify-center items-center mt-12 ">
            <div>
               <h1 className="text-3xl text-[#201f54] font-bold">
                  Blue the Future of Shibase Army
               </h1>
            </div>

            {/* <div className="flex justify-center items-center mt-8">
               <Image
                  src="/images/communityImg.jpeg"
                  alt=""
                  className="rounded-md shadow-lg"
                  width={700}
                  height={200}
               />
            </div> */}

            <video
               width="640"
               height="360"
               controls
               className="rounded-md shadow-lg mt-5"
            >
               <source src="/images/video.mp4" type="video/mp4" />
               Your browser does not support the video tag.
            </video>
            <div className="flex justify-start items-center space-x-6 mt-6">
               <button className="flex justify-center items-center gap-x-3 border rounded-2xl px-4 py-3  bg-[##2d30f0] hover:bg-[#001cc4] transition-all duration-500 shadow-lg transform hover:translate-y-[-3px]">
                  <a
                     href="mailto:tbogdanov665@gmail.com "
                     target="_blank"
                     rel="nonreferrer"
                     className="text-white text-sm "
                  >
                     Whitepaper Coming soon!
                  </a>
                  {/* <LuMail className="text-white  " /> */}
               </button>
               <button className=" flex justify-center items-center gap-x-3 border rounded-2xl px-4 py-3  bg-[#fff] hover:bg-[##2d30f0] transition-all duration-500 shadow-lg transform hover:translate-y-[-3px]">
                  <a
                     href="https://t.me/@tbog2"
                     target="_blank"
                     rel="nonreferrer"
                     className="text-[#201f54] hover:text-[#fff]  text-sm "
                  >
                     Join now
                  </a>
                  {/* <FaTelegramPlane className="text-white" /> */}
               </button>
            </div>
         </div>
      </section>
   );
};

export default Community;

{
   /* <div className="bg-black/30 -z-1 start-0 absolute top-0 h-24 w-24 animate-[spin_10s_linear_infinite] rounded-2xl rounded-br-none rounded-tl-none"></div>
<div className="bg-black/30 -z-1 end-0 absolute bottom-0 h-24 w-24 animate-ping rounded-full"></div> */
}
