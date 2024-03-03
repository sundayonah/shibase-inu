import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';
import { BsDot } from 'react-icons/bs';

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
      <main id="roadMap" className="relative  overflow-hidden">
         <div
         // className=" bg-cover bg-no-repeat backdrop-blur-3xl w-full bg-teams bg-black/90"
         // style={{
         //    backgroundImage: `url('/images/BG_OurTeam.png')`,
         // }}
         >
            <div className="mx-auto max-w-5xl p-6  mt-20">
               <div className="container mx-auto grid grid-cols-1 items-center gap-12">
                  {/* <div className="flex flex-col justify-center items-center"></div> */}
                  <div className="flex flex-col justify-center items-center">
                     <h1 className="text-3xl text-[#201f54] font-bold">
                        Roadmap
                     </h1>
                     <p className="text-[#201f54] text-sm mt-2">
                        The road to dog biscuits
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
};
export default RoadMap;
