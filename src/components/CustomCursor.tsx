'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Check for hoverable elements
    const addHoverListeners = () => {
      const hoverElements = document.querySelectorAll('a, button, [role="button"], .cursor-magnetic');
      
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });

      return () => {
        hoverElements.forEach(el => {
          el.removeEventListener('mouseenter', () => setIsHovering(true));
          el.removeEventListener('mouseleave', () => setIsHovering(false));
        });
      };
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    const cleanup = addHoverListeners();

    // Re-add listeners when DOM changes
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cleanup();
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Custom cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Custom cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.8 : 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.8,
        }}
      />

      {/* Trailing particles */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          mass: 0.2,
        }}
      >
        <div className="w-full h-full bg-blue-400 rounded-full opacity-60 animate-pulse" />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-1 h-1 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 8,
          mass: 0.3,
        }}
      >
        <div className="w-full h-full bg-purple-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.1s' }} />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-1 h-1 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 6,
          mass: 0.4,
        }}
      >
        <div className="w-full h-full bg-pink-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.2s' }} />
      </motion.div>
    </>
  );
}
