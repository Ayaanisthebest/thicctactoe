'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  magnetic?: boolean;
  delay?: number;
}

export default function GlassCard({ 
  children, 
  className = '', 
  hover = true, 
  magnetic = false,
  delay = 0 
}: GlassCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetic) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x: x * 0.1, y: y * 0.1 });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      className={`glass-card cursor-magnetic ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.4, 0, 0.2, 1] 
      }}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        rotateX: mousePosition.y * 0.1,
        rotateY: mousePosition.x * 0.1,
      }}
      whileHover={hover ? {
        scale: 1.02,
        rotateX: mousePosition.y * 0.2,
        rotateY: mousePosition.x * 0.2,
      } : {}}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transformPerspective: 1000,
      }}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Hover glow effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0"
          animate={{ opacity: 0.1 }}
          exit={{ opacity: 0 }}
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 212, 255, 0.3), transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      )}
    </motion.div>
  );
}
