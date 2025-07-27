'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface GlassButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export default function GlassButton({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  size = 'md',
  href 
}: GlassButtonProps) {
  const [ripples, setRipples] = useState<Array<{id: number, x: number, y: number}>>([]);

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      id: Date.now(),
      x,
      y
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
    
    onClick?.();
  };

  const sizeClasses = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg'
  };

  const variantClasses = {
    primary: 'glass-button text-white font-medium',
    secondary: 'glass border-2 border-white/20 text-white/90 font-medium'
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick: handleClick };

  return (
    <Component
      className={`
        relative overflow-hidden rounded-full 
        ${variantClasses[variant]} 
        ${sizeClasses[size]} 
        ${className}
        transition-all duration-300 cursor-magnetic
        hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]
        active:scale-95
      `}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 40px rgba(0, 212, 255, 0.4)'
      }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {/* Background shimmer effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full animate-[shimmer_2s_infinite]" />
      </div>
      
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full bg-white/20"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </Component>
  );
}

// Add shimmer animation to globals.css
// @keyframes shimmer {
//   0% { transform: translateX(-100%) skewX(-12deg); }
//   100% { transform: translateX(200%) skewX(-12deg); }
// }
