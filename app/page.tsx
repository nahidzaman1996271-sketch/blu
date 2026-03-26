"use client";

import BluHeroCanvas from "@/components/BluHeroCanvas";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Beat A: 0 - 25%
  const opacityA = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [1, 1, 1, 0]);
  const yA = useTransform(scrollYProgress, [0, 0.25], [0, -100]);
  const blurA = useTransform(scrollYProgress, [0.2, 0.25], ["blur(0px)", "blur(10px)"]);

  // Beat B: 30 - 55%
  const opacityB = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const yB = useTransform(scrollYProgress, [0.25, 0.55], [50, -50]);
  const blurB = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.55], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);

  // Beat C: 60 - 85%
  const opacityC = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  const yC = useTransform(scrollYProgress, [0.55, 0.85], [50, -50]);
  const blurC = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.85], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);

  // Beat D: 90 - 100%
  const opacityD = useTransform(scrollYProgress, [0.85, 0.9, 1], [0, 1, 1]);
  const yD = useTransform(scrollYProgress, [0.85, 1], [50, 0]);
  const blurD = useTransform(scrollYProgress, [0.85, 0.9, 1], ["blur(10px)", "blur(0px)", "blur(0px)"]);


  return (
    <main className="relative bg-[#050505]">
      {/* 500vh container to enable long scrolling */}
      <div className="h-[500vh] w-full relative">
        
        {/* Sticky Canvas Container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <BluHeroCanvas />

          {/* Scrollytelling Overlay Containers */}
          <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-center p-6 z-10">
            
            {/* Beat A */}
            <motion.div 
               style={{ opacity: opacityA, y: yA, filter: blurA }}
               className="absolute"
            >
              <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl">
                BLU
              </h1>
              <p className="mt-4 text-xl md:text-3xl text-white/80 font-medium">
                The Next Generation of Hydration.
              </p>
            </motion.div>

            {/* Beat B */}
            <motion.div 
               style={{ opacity: opacityB, y: yB, filter: blurB }}
               className="absolute"
            >
              <h2 className="text-5xl md:text-7xl font-bold text-[#00F0FF] drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                IONIC POWER
              </h2>
              <p className="mt-4 text-lg md:text-2xl text-white/80 max-w-2xl mx-auto">
                Infused with raw electrolytes and lightning-fast recovery.
              </p>
            </motion.div>

            {/* Beat C */}
            <motion.div 
               style={{ opacity: opacityC, y: yC, filter: blurC }}
               className="absolute"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                THREE FLAVORS. ONE ENERGY.
              </h2>
              <div className="flex gap-4 justify-center text-lg md:text-xl font-medium">
                <span className="text-[#FF007F] drop-shadow-[0_0_15px_rgba(255,0,127,0.5)]">Watermelon</span>
                <span className="text-white/50">•</span>
                <span className="text-[#00F0FF] drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">Original</span>
                <span className="text-white/50">•</span>
                <span className="text-[#39FF14] drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]">Green Apple</span>
              </div>
            </motion.div>

            {/* Beat D */}
            <motion.div 
               style={{ opacity: opacityD, y: yD, filter: blurD }}
               className="absolute pointer-events-auto"
            >
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
                REPLENISH. GO.
              </h2>
              <button className="px-10 py-5 bg-white text-black text-xl font-bold rounded-full hover:bg-white/90 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                Shop the Collection
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </main>
  );
}
