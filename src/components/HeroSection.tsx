'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import GlassButton from './GlassButton';

interface HeroSectionProps {
  onOpenWaitlist?: () => void;
}

export default function HeroSection({ onOpenWaitlist }: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const titleText = "The Future of Tic-Tac-Toe";
  const subtitleText = "Experience gaming redefined with liquid glass aesthetics and quantum strategy";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Tic-Tac-Toe Grid Background */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-10"
        animate={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
          rotateX: mousePosition.y * 5,
          rotateY: mousePosition.x * 5,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="grid grid-cols-3 gap-4 w-96 h-96">
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.div
              key={i}
              className="glass border border-white/20 rounded-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ 
                delay: i * 0.1,
                duration: 0.8,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.1, opacity: 0.8 }}
            >
              <div className="w-full h-full flex items-center justify-center">
                {i % 3 === 0 && (
                  <motion.div
                    className="w-8 h-8 border-2 border-blue-400 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                )}
                {i % 3 === 1 && (
                  <motion.div
                    className="w-8 h-8 relative"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="absolute inset-0 border-2 border-purple-400 transform rotate-45" />
                    <div className="absolute inset-0 border-2 border-purple-400 transform -rotate-45" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Animated Title */}
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 text-gradient"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(0, 212, 255, 0.5)",
                "0 0 40px rgba(179, 71, 217, 0.5)",
                "0 0 20px rgba(255, 0, 110, 0.5)",
                "0 0 40px rgba(0, 212, 255, 0.5)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {titleText.split('').map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.05,
                  duration: 0.8,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.1,
                  color: "#00d4ff",
                  transition: { duration: 0.2 }
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-white/80 mb-12 font-light leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {subtitleText}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <GlassButton 
            size="lg" 
            variant="primary"
            className="group relative overflow-hidden"
          >
            <motion.span
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Play the Future
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </GlassButton>

          <GlassButton 
            size="lg" 
            variant="secondary"
            className="border-2 border-white/30 hover:border-white/50"
            onClick={onOpenWaitlist}
          >
            <span className="text-white/90">Join Waitlist</span>
          </GlassButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full p-1"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full mx-auto"
              animate={{ y: [0, 12, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          <p className="text-white/60 text-sm mt-2">Scroll to explore</p>
        </motion.div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
}
