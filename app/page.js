import Header from '@/components/header';
import Hero from '@/components/hero';
import Image from 'next/image';
import Community from './community';
import OurTeam from './roadMap';
import Footer from '@/components/footer';
import QuickStartGuard from './quickStartGuide';
import Shibasenomics from './shibasenomics';
import RoadMap from './roadMap';

export default function Home() {
   return (
      <main className="mb-5">
         <div className="mt-20 ">
            <Header />{' '}
         </div>
         <Hero />
         <Community />
         <QuickStartGuard />
         <Shibasenomics />
         <RoadMap />

         {/* 
         <OurTeam />
         <Footer /> */}
      </main>
   );
}
