# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a Next.js project for creating a visually stunning, immersive, and animated Liquid Glass-inspired website to promote a futuristic Tic-Tac-Toe game. The site combines glassmorphism design, interactive animations, and cyber-minimalist aesthetics.

## Key Technologies
- Next.js 14+ with App Router and TypeScript
- Tailwind CSS for styling with custom glassmorphism utilities
- Framer Motion for scroll-triggered animations and transitions
- GSAP for complex animations and timeline controls
- TSParticles for interactive background effects
- Three.js for 3D visual elements
- Vanta.js for animated background effects

## Design Principles
- Glassmorphism throughout (translucent elements, blur effects, frosted glass feel)
- Rounded corners on all interactive elements
- Color-shifting gradient backgrounds with smooth animations
- Cursor-reactive elements with magnetic hover effects
- Scroll-based reveal animations for content sections
- Mobile-first responsive design with touch optimizations

## Code Style Guidelines
- Use functional components with TypeScript
- Implement custom hooks for reusable animation logic
- Create modular components for glassmorphism effects
- Use Tailwind's utility classes with custom CSS variables for gradients
- Ensure all animations respect `prefers-reduced-motion` accessibility setting
- Implement proper error boundaries and loading states

## Animation Guidelines
- Use Framer Motion for component-level animations and scroll triggers
- Use GSAP for complex timeline animations and morphing effects
- Implement intersection observers for performance-optimized scroll animations
- Add smooth transitions between all interactive states
- Create subtle hover effects that enhance the premium feel

## Performance Considerations
- Lazy load heavy animation libraries and effects
- Use CSS transforms and opacity for performant animations
- Implement proper cleanup for animation timelines and event listeners
- Optimize particle effects for mobile devices
- Use next/dynamic for code splitting heavy components
