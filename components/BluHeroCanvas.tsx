"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";

const FRAME_COUNT = 120;

export default function BluHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);

  // Framer motion scroll progress
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      // Pad to 4 digits: 0001.jpg -> 0120.jpg
      const frameNum = i.toString().padStart(4, "0");
      img.src = `/frames/${frameNum}.jpg`;
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Draw on canvas based on smooth progress
  useEffect(() => {
    if (loadedCount < FRAME_COUNT || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      // Calculate current frame (0 to FRAME_COUNT - 1)
      const currentFrameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.round(smoothProgress.get() * (FRAME_COUNT - 1)))
      );

      const img = images[currentFrameIndex];
      if (!img || !img.complete || img.naturalWidth === 0) {
          animationFrameId = requestAnimationFrame(render);
          return;
      }

      // Handle Resize logic here to simulate object-fit: contain
      const cw = canvas.width;
      const ch = canvas.height;
      
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, cw, ch);

      const iw = img.width;
      const ih = img.height;

      // Fit to contain logic
      const scale = Math.min(cw / iw, ch / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;

      ctx.drawImage(img, dx, dy, dw, dh);
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [loadedCount, images, smoothProgress]);

  // Handle Resize setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#050505] overflow-hidden">
      {loadedCount < FRAME_COUNT && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#050505] text-white flex-col">
          <p className="text-sm font-medium tracking-widest text-[#00F0FF] animate-pulse">
            System Charging... {Math.round((loadedCount / FRAME_COUNT) * 100)}%
          </p>
          <div className="w-64 h-1 bg-white/10 mt-4 overflow-hidden rounded-full">
            <div 
                className="h-full bg-gradient-to-r from-[#00F0FF] via-[#FF007F] to-[#39FF14]" 
                style={{ width: `${(loadedCount / FRAME_COUNT) * 100}%` }}
            />
          </div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ opacity: loadedCount === FRAME_COUNT ? 1 : 0, transition: "opacity 1s ease" }}
      />
    </div>
  );
}
