# FutureTic - The Evolution of Tic-Tac-Toe 🌐✨

A visually stunning, immersive, and animated Liquid Glass-inspired website promoting a futuristic, evolved version of Tic-Tac-Toe. Experience the future of gaming with cyber-minimalist aesthetics, interactive animations, and quantum strategy.

## 🚀 Features

### Visual Design
- **Glassmorphism UI**: Translucent elements with frosted glass effects throughout
- **Animated Gradients**: Color-shifting backgrounds with cosmic aurora-like animations
- **Interactive Particles**: Cursor-reactive particle system with magnetic effects
- **Smooth Animations**: Scroll-triggered animations powered by Framer Motion and GSAP

### Interactive Elements
- **Custom Cursor**: Glowing cursor with trailing particles and magnetic hover effects
- **Scroll Progress**: Animated progress bar showing scroll depth
- **Responsive Design**: Optimized for desktop and mobile with touch animations
- **Glass Components**: Reusable glass cards and buttons with hover effects

### Sections
- **Hero Section**: Immersive full-screen intro with floating Tic-Tac-Toe grid
- **About Section**: Feature showcase with 3D tilt cards and scroll animations
- **Game Preview**: Interactive game board mockup with visual effects
- **Waitlist Modal**: Beautiful signup form with success animations
- **Footer**: Ambient design with floating particles and social links

## 🛠 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom glassmorphism utilities
- **Animations**: Framer Motion & GSAP
- **Effects**: Custom particle system, Three.js elements
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 🎨 Design Philosophy

Inspired by **Liquid Glass + Solana + Nothing Tech** aesthetics:
- Cyber-minimalist approach with soft, rounded edges
- Translucent layers creating depth and breathing space
- Color palette featuring neon blues, purples, pinks, and teal
- Premium feel with intentional, next-gen interactions

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vibecodept3
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with glassmorphism
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── AnimatedBackground.tsx   # Particle system & gradients
│   ├── CustomCursor.tsx         # Interactive cursor
│   ├── ScrollProgress.tsx       # Scroll indicator
│   ├── GlassCard.tsx           # Reusable glass card
│   ├── GlassButton.tsx         # Interactive glass button
│   ├── HeroSection.tsx         # Landing hero
│   ├── AboutSection.tsx        # Features showcase
│   ├── GamePreview.tsx         # Game demonstration
│   ├── WaitlistModal.tsx       # Signup modal
│   └── Footer.tsx              # Site footer
└── .github/
    └── copilot-instructions.md # Development guidelines
```

## 🎯 Key Animations

- **Background**: Cosmic gradient shifts with particle interactions
- **Scroll**: Element reveals with stagger animations
- **Hover**: Magnetic effects and glass material responses
- **Cursor**: Particle trails and hover state changes
- **Modal**: Spring animations with celebration effects

## 🌟 Performance Features

- **Lazy Loading**: Heavy animations load on-demand
- **Optimized Rendering**: CSS transforms for smooth animations
- **Memory Management**: Proper cleanup of animation timelines
- **Mobile Optimization**: Reduced particle density on mobile
- **Accessibility**: Respects `prefers-reduced-motion`

## 🚀 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🎨 Customization

### Colors
Edit CSS variables in `globals.css`:
```css
:root {
  --neon-blue: #00d4ff;
  --neon-purple: #b347d9;
  --neon-pink: #ff006e;
  --neon-teal: #06ffa5;
}
```

### Animations
Modify animation parameters in component files or create new variants using Framer Motion.

## 📱 Browser Support

- Chrome 80+
- Firefox 80+
- Safari 14+
- Edge 80+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

**Built with passion for the future of gaming** 🎮✨
