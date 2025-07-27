'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars
    const stars: { x: number; y: number; speed: number; size: number }[] = [];
    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 1 + 0.2,
        size: Math.random() * 1.5 + 0.5
      });
    }

    // Animation function
    const animate = () => {
      // Clear canvas with black background
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      ctx.fillStyle = 'white';
      
      stars.forEach(star => {
        // Draw star as a small dot
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Move star horizontally from right to left
        star.x -= star.speed;
        
        // Reset star position when it goes off screen
        if (star.x < -star.size) {
          star.x = canvas.width + star.size;
          star.y = Math.random() * canvas.height;
        }
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -999,
        pointerEvents: 'none'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          background: 'black'
        }}
      />
    </div>
  );
}
