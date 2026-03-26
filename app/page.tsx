"use client";

import BluHeroCanvas from "@/components/BluHeroCanvas";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Helper for blur
  const b0 = "blur(0px)";
  const b10 = "blur(10px)";

  // SECTION 1: Hero (0 - 0.15)
  // appears at 0, stays till 0.10, fades out at 0.15
  const op1 = useTransform(scrollYProgress, [0, 0.10, 0.15], [1, 1, 0]);
  const y1  = useTransform(scrollYProgress, [0, 0.15], [0, -50]);
  const blur1 = useTransform(scrollYProgress, [0.10, 0.15], [b0, b10]);

  // SECTION 2: Benefits (0.15 - 0.30)
  const op2 = useTransform(scrollYProgress, [0.15, 0.20, 0.25, 0.30], [0, 1, 1, 0]);
  const y2  = useTransform(scrollYProgress, [0.15, 0.30], [50, -50]);
  const blur2 = useTransform(scrollYProgress, [0.15, 0.20, 0.25, 0.30], [b10, b0, b0, b10]);

  // SECTION 3: Ingredients (0.30 - 0.45)
  const op3 = useTransform(scrollYProgress, [0.30, 0.35, 0.40, 0.45], [0, 1, 1, 0]);
  const y3  = useTransform(scrollYProgress, [0.30, 0.45], [50, -50]);
  const blur3 = useTransform(scrollYProgress, [0.30, 0.35, 0.40, 0.45], [b10, b0, b0, b10]);

  // SECTION 4: Flavors (0.45 - 0.60)
  const op4 = useTransform(scrollYProgress, [0.45, 0.50, 0.55, 0.60], [0, 1, 1, 0]);
  const y4  = useTransform(scrollYProgress, [0.45, 0.60], [50, -50]);
  const blur4 = useTransform(scrollYProgress, [0.45, 0.50, 0.55, 0.60], [b10, b0, b0, b10]);

  // SECTION 5: Use Cases (0.60 - 0.75)
  const op5 = useTransform(scrollYProgress, [0.60, 0.65, 0.70, 0.75], [0, 1, 1, 0]);
  const y5  = useTransform(scrollYProgress, [0.60, 0.75], [50, -50]);
  const blur5 = useTransform(scrollYProgress, [0.60, 0.65, 0.70, 0.75], [b10, b0, b0, b10]);

  // SECTION 6: Pricing (0.75 - 0.90)
  const op6 = useTransform(scrollYProgress, [0.75, 0.80, 0.85, 0.90], [0, 1, 1, 0]);
  const y6  = useTransform(scrollYProgress, [0.75, 0.90], [50, -50]);
  const blur6 = useTransform(scrollYProgress, [0.75, 0.80, 0.85, 0.90], [b10, b0, b0, b10]);

  // SECTION 7: Outro (0.90 - 1.00)
  const op7 = useTransform(scrollYProgress, [0.90, 0.95, 1], [0, 1, 1]);
  const y7  = useTransform(scrollYProgress, [0.90, 1], [50, 0]);
  const blur7 = useTransform(scrollYProgress, [0.90, 0.95, 1], [b10, b0, b0]);

  const fadeOutBg = useTransform(scrollYProgress, [0.95, 1], [0, 1]);

  return (
    <main className="relative bg-[#050505] selection:bg-[#00F0FF] selection:text-black">
      {/* 800vh container to enable long scrolling for 7 sections */}
      <div className="h-[800vh] w-full relative">
        
        {/* Sticky Canvas Container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <BluHeroCanvas />

          <motion.div 
            style={{ opacity: fadeOutBg }}
            className="absolute inset-0 bg-black pointer-events-none z-50"
          />

          {/* Scrollytelling Overlay Containers */}
          <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-center p-6 z-10 w-full max-w-7xl mx-auto">
            
            {/* SECTION 1: Hero */}
            <motion.div 
              style={{ opacity: op1, y: y1, filter: blur1 }}
              className="absolute w-full px-4 flex flex-col items-center justify-center text-center"
            >
              <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                BLU
              </h1>
              <p className="mt-4 text-2xl md:text-4xl text-[#00F0FF] font-medium tracking-wide font-sans drop-shadow-[0_0_15px_rgba(0,240,255,0.6)] uppercase">
                Electrolyte Drink
              </p>
              <p className="mt-4 text-lg md:text-2xl text-white/60 font-medium">
                The Next Generation of Hydration.
              </p>
            </motion.div>

            {/* SECTION 2: Benefits */}
            <motion.div 
              style={{ opacity: op2, y: y2, filter: blur2 }}
              className="absolute w-full px-4 flex flex-col items-center justify-center text-center"
            >
              <div className="space-y-8 flex flex-col items-center">
                <div className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
                  Instant Hydration.
                </div>
                <div className="text-3xl md:text-5xl font-semibold text-white/90 drop-shadow-md">
                  Advanced Electrolyte Formula.
                </div>
                <div className="text-2xl md:text-4xl font-medium text-[#00F0FF] drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                  Rapid Cellular Absorption.
                </div>
              </div>
            </motion.div>

            {/* SECTION 3: Ingredients */}
            <motion.div 
              style={{ opacity: op3, y: y3, filter: blur3 }}
              className="absolute w-full max-w-5xl px-8 flex justify-between items-center h-full pointer-events-none"
            >
              <div className="flex flex-col gap-16 w-1/3 text-left">
                <div className="p-5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-transform hover:scale-105">
                  <h3 className="text-2xl text-[#00F0FF] font-semibold">Potassium Citrate</h3>
                  <p className="text-md text-white/70 mt-2">Prevents muscle cramps and fatigue</p>
                </div>
                <div className="p-5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,240,255,0.1)] ml-12 transition-transform hover:scale-105">
                  <h3 className="text-2xl text-[#00F0FF] font-semibold">Magnesium Citrate</h3>
                  <p className="text-md text-white/70 mt-2">Supports energy production and ATP</p>
                </div>
              </div>

              <div className="flex flex-col gap-16 w-1/3 text-right">
                <div className="p-5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,240,255,0.1)] mr-12 transition-transform hover:scale-105">
                  <h3 className="text-2xl text-[#00F0FF] font-semibold">Sodium Chloride</h3>
                  <p className="text-md text-white/70 mt-2">Maintains fluid balance during effort</p>
                </div>
                <div className="p-5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-transform hover:scale-105">
                  <h3 className="text-2xl text-[#00F0FF] font-semibold">Taurine</h3>
                  <p className="text-md text-white/70 mt-2">Boosts cellular hydration efficiency</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              style={{ opacity: op3, y: y3, filter: blur3 }}
              className="absolute bottom-24 w-full flex justify-center"
            >
              <div className="p-5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,240,255,0.1)] text-center w-72">
                <h3 className="text-2xl text-[#00F0FF] font-semibold">Calcium Citrate</h3>
                <p className="text-md text-white/70 mt-2">Crucial for bone and muscle function</p>
              </div>
            </motion.div>

            {/* SECTION 4: Flavors */}
            <motion.div 
              style={{ opacity: op4, y: y4, filter: blur4 }}
              className="absolute w-full h-full flex flex-col items-center justify-center pointer-events-none"
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-16 tracking-wide drop-shadow-2xl absolute top-32">
                FIVE SIGNATURE FLAVORS
              </h2>
              
              <div className="relative w-[320px] h-[320px] sm:w-[500px] sm:h-[500px]">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center drop-shadow-[0_0_20px_rgba(0,240,255,0.8)]">
                    <span className="text-2xl md:text-3xl font-bold text-[#00F0FF]">Blue Raspberry</span>
                 </div>
                 <div className="absolute top-1/4 -right-16 md:-right-24 translate-x-1/2 text-center drop-shadow-[0_0_20px_rgba(255,0,127,0.8)]">
                    <span className="text-xl md:text-2xl font-bold text-[#FF007F]">Strawberry</span>
                 </div>
                 <div className="absolute top-1/4 -left-16 md:-left-24 -translate-x-1/2 text-center drop-shadow-[0_0_20px_rgba(255,165,0,0.8)]">
                    <span className="text-xl md:text-2xl font-bold text-[#FFA500]">Orange</span>
                 </div>
                 <div className="absolute bottom-1/4 -right-16 md:-right-24 translate-x-1/2 text-center drop-shadow-[0_0_20px_rgba(138,43,226,0.8)]">
                    <span className="text-xl md:text-2xl font-bold text-[#8A2BE2]">Berry</span>
                 </div>
                 <div className="absolute bottom-1/4 -left-16 md:-left-24 -translate-x-1/2 text-center drop-shadow-[0_0_20px_rgba(57,255,20,0.8)]">
                    <span className="text-xl md:text-2xl font-bold text-[#39FF14]">Apple & Raspberry</span>
                 </div>
              </div>
            </motion.div>

            {/* SECTION 5: Use Cases */}
            <motion.div 
              style={{ opacity: op5, y: y5, filter: blur5 }}
              className="absolute w-full px-4 flex flex-col items-center justify-center text-center h-full gap-10"
            >
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-lg">
                Perfect for Athletes
              </h2>
              <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 drop-shadow-md">
                Daily Hydration
              </h2>
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-blue-500 drop-shadow-[0_0_30px_rgba(0,240,255,0.5)]">
                Post-Workout Recovery
              </h2>
            </motion.div>

            {/* SECTION 6: Pricing */}
            <motion.div 
              style={{ opacity: op6, y: y6, filter: blur6 }}
              className="absolute w-full px-4 flex flex-col items-center justify-center h-full pointer-events-auto"
            >
              <div className="p-10 md:p-16 rounded-[2.5rem] bg-white/5 backdrop-blur-2xl border border-white/20 shadow-[0_0_60px_rgba(0,240,255,0.15)] flex flex-col items-center gap-8 mt-48 transition-all hover:bg-white/10 hover:border-white/30">
                <h3 className="text-2xl text-white/50 font-bold tracking-[0.2em] uppercase">Premium Hydration</h3>
                <div className="flex items-end gap-3">
                  <span className="text-8xl font-black text-white tracking-tighter drop-shadow-lg">৳60</span>
                  <span className="text-2xl text-white/50 mb-3 font-medium">/ Bottle</span>
                </div>
                <div className="w-full text-center space-y-2 mb-4">
                  <p className="text-white/80">Zero sugar, low calorie formulation.</p>
                  <p className="text-white/80">3:1 Potassium-to-Sodium ratio.</p>
                </div>
                <hr className="w-full border-white/10" />
                <button className="px-14 py-5 mt-2 bg-[#00F0FF] text-black text-2xl font-black rounded-full hover:bg-white hover:shadow-[0_0_40px_rgba(0,240,255,0.7)] transition-all duration-300 transform hover:scale-105 active:scale-95">
                  Order Now
                </button>
              </div>
            </motion.div>

            {/* SECTION 7: Outro */}
            <motion.div 
              style={{ opacity: op7, y: y7, filter: blur7 }}
              className="absolute w-full px-4 flex flex-col items-center justify-center text-center h-full"
            >
              <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                Stay Charged.
              </h1>
              <h1 className="mt-6 text-6xl md:text-9xl font-black text-[#00F0FF] tracking-tighter drop-shadow-[0_0_50px_rgba(0,240,255,0.6)]">
                Stay Hydrated.
              </h1>
            </motion.div>

          </div>
        </div>
      </div>
    </main>
  );
}
