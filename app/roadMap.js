import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';
import { BsDot } from 'react-icons/bs';
import Image from 'next/image';

const RoadMap = () => {
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

   // #280051
   // #5C0F57
   // 09123522324
   // bg-gradient-to-r from-purple-900 to-purple-600

   return (
      <main id="roadMap" className="mx-auto max-w-4xl p-6  mt-20 mb-5">
         <div
         // className=" bg-cover bg-no-repeat backdrop-blur-3xl w-full bg-teams bg-black/90"
         // style={{
         //    backgroundImage: `url('/images/BG_OurTeam.png')`,
         // }}
         >
            <div className="container mx-auto grid grid-cols-1 items-center ">
               {/* <div className="flex flex-col justify-center items-center"></div> */}
               <div className="flex flex-col justify-center items-center">
                  <h1 className="text-3xl text-[#201f54] font-bold">Roadmap</h1>
                  <p className="text-[#201f54] text-sm mt-2">
                     The road to dog biscuits
                  </p>
               </div>
               <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 mt-6 gap-2 ">
                  <div className="flex  flex-col justify-center ease-in-out items-center  transition-all duration-500 transform hover:translate-y-[-5px]">
                     <span className="text-center text-[#201f54]">Puppy</span>
                     <div className=" rounded-lg shadow-lg hover:shadow-xl p-2 px-5">
                        <Image
                           src="/images/newPuppy.jpg"
                           alt=""
                           className="rounded-md shadow-lg object-cover"
                           width={150}
                           height={50}
                        />
                        <div className="pt-4 pb-2">
                           <p>-Release Whitepaper</p>
                           <p>-Building Community</p>
                           <p>-Launch on Unicrypt</p>
                           <p>-Listing CMC and CG</p>
                        </div>
                     </div>
                  </div>
                  <div className="flex  flex-col justify-center ease-in-out items-center transition-all duration-500 transform hover:translate-y-[-5px]">
                     <span className="text-center text-[#201f54]">
                        adolosent
                     </span>
                     <div className=" rounded-lg shadow-lg hover:shadow-xl p-1.5">
                        <Image
                           src="/images/adolosent.jpg"
                           alt=""
                           className="rounded-md shadow-lg"
                           width={150}
                           height={50}
                        />
                        <div className="pt-4 pb-2">
                           <p>-Release Whitepaper 1.0</p>
                           <p>-Move to BASE chain</p>
                           <p>-Marketing Base chain</p>
                        </div>
                     </div>
                  </div>
                  <div className="flex  flex-col justify-center ease-in-out items-center transition-all duration-500 transform hover:translate-y-[-5px]">
                     <span className="text-center text-[#201f54]">Adult</span>
                     <div className=" rounded-lg shadow-lg hover:shadow-xl p-1.5">
                        <Image
                           src="/images/adult.jpg"
                           alt=""
                           className="rounded-md shadow-lg"
                           width={150}
                           height={50}
                        />
                        <div className="pt-4 pb-2">
                           <p>-Release Whitepaper 2.0</p>
                           <p>-NFTs Creation</p>
                        </div>
                     </div>
                  </div>
                  <div className="flex  flex-col justify-center ease-in-out items-center transition-all duration-500 transform hover:translate-y-[-5px]">
                     <span className="text-center text-[#201f54]">Senior</span>
                     <div className=" rounded-lg shadow-lg hover:shadow-xl p-1.5">
                        <Image
                           src="/images/senior.jpg"
                           alt=""
                           className="rounded-md shadow-lg"
                           width={150}
                           height={50}
                        />
                        <div className="pt-4 pb-2">
                           <p>-Release Whitepaper 3.0</p>
                           <p>-First Meme Dex</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
};
export default RoadMap;
