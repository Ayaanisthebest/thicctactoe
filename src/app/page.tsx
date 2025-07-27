'use client';

import { useState, useEffect } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Link from 'next/link';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [expandedTile, setExpandedTile] = useState<number | null>(null);
  const [showPlayModal, setShowPlayModal] = useState(false);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(25px)',
    WebkitBackdropFilter: 'blur(25px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderTop: '1px solid rgba(255, 255, 255, 0.3)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    position: 'relative' as const,
  };

  const liquidGlassEffect = {
    background: `
      linear-gradient(135deg, 
        rgba(255, 255, 255, 0.12) 0%, 
        rgba(255, 255, 255, 0.06) 25%,
        rgba(255, 255, 255, 0.08) 50%,
        rgba(255, 255, 255, 0.04) 75%,
        rgba(255, 255, 255, 0.10) 100%
      )
    `,
    backdropFilter: 'blur(30px) saturate(1.2)',
    WebkitBackdropFilter: 'blur(30px) saturate(1.2)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    borderTop: '2px solid rgba(255, 255, 255, 0.4)',
    borderLeft: '2px solid rgba(255, 255, 255, 0.35)',
    borderRight: '1px solid rgba(255, 255, 255, 0.15)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
    boxShadow: `
      0 25px 80px rgba(31, 38, 135, 0.5),
      0 15px 35px rgba(31, 38, 135, 0.3),
      inset 0 2px 0 rgba(255, 255, 255, 0.15),
      inset 0 -2px 0 rgba(255, 255, 255, 0.08),
      inset 2px 0 0 rgba(255, 255, 255, 0.1),
      inset -2px 0 0 rgba(255, 255, 255, 0.05)
    `,
    position: 'relative' as const,
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: #000000;
          color: white;
          overflow-x: hidden;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expandTile {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
            maxHeight: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            maxHeight: 1000px;
          }
        }

        @keyframes slideInContent {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .expand-tile {
          animation: expandTile 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .slide-in-content {
          animation: slideInContent 0.6s ease-out forwards;
        }

        .float {
          animation: float 6s ease-in-out infinite;
        }

        .text-gradient {
          background: linear-gradient(135deg, #00d4ff, #b347d9, #ff006e);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
        }

        .glass-button {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 50px;
          padding: 16px 32px;
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-block;
        }

        .glass-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(31, 38, 135, 0.4);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease-out;
        }

        .modal-content {
          max-width: 500px;
          width: 90%;
          padding: 2rem;
          border-radius: 24px;
          animation: slideInModal 0.4s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInModal {
          from { 
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

      {/* Animated Starfield Background */}
      <AnimatedBackground />

      {/* Main Content */}
      <main style={{ 
        position: 'relative', 
        zIndex: 10, 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Hero Section */}
        <section style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
          position: 'relative'
        }}>
          <div style={{ maxWidth: '800px', position: 'relative', zIndex: 2 }}>
            {/* Title */}
            <h1 
              className="text-gradient fade-in-up"
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                animationDelay: '0.2s',
                opacity: 0
              }}
            >
              The Future of Tic-Tac-Toe
            </h1>

            {/* Subtitle */}
            <p 
              className="fade-in-up"
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '3rem',
                animationDelay: '0.4s',
                opacity: 0
              }}
            >
              Experience gaming redefined with liquid glass aesthetics and quantum strategy
            </p>

            {/* CTA Buttons */}
            <div 
              className="fade-in-up"
              style={{
                display: 'flex',
                gap: '1.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                animationDelay: '0.6s',
                opacity: 0
              }}
            >
              <button 
                onClick={() => setShowPlayModal(true)}
                className="glass-button"
              >
                <span className="text-gradient">Play the Future</span>
              </button>
              <button 
                onClick={() => setShowWaitlistModal(true)}
                className="glass-button"
              >
                Join Waitlist
              </button>
            </div>
          </div>

          {/* Floating Tic-Tac-Toe Grid */}
          <div style={{
            ...glassStyle,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.1,
            zIndex: 1,
            pointerEvents: 'none'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              width: '300px',
              height: '300px',
              padding: '2rem'
            }}>
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="float"
                  style={{
                    ...glassStyle,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animationDelay: `${i * 0.1}s`
                  }}
                >
                  {i % 3 === 0 && <div style={{
                    width: '30px',
                    height: '30px',
                    border: '2px solid #00d4ff',
                    borderRadius: '50%'
                  }} />}
                  {i % 3 === 1 && (
                    <div style={{
                      width: '30px',
                      height: '30px',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        border: '2px solid #b347d9',
                        transform: 'rotate(45deg)'
                      }} />
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        border: '2px solid #b347d9',
                        transform: 'rotate(-45deg)'
                      }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section style={{
          padding: '6rem 2rem',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 className="text-gradient" style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 'bold',
                marginBottom: '1.5rem'
              }}>
                Beyond Traditional Gaming
              </h2>
              <p style={{
                fontSize: '1.25rem',
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Step into a realm where classic gameplay meets quantum mechanics
              </p>
            </div>

            {/* Features Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {[
                {
                  title: "Quantum Computing",
                  description: "Harness quantum mechanics for impossible strategic possibilities",
                  color: "#8b5cf6",
                  icon: "⚛️",
                  details: {
                    overview: "Revolutionary quantum processors utilizing IBM Q System One architecture enable moves to exist in superposition states across 127-qubit systems. Each game move leverages quantum entanglement to create probability clouds spanning infinite parallel universes, fundamentally breaking classical game theory limitations.",
                    features: [
                      "127-Qubit Quantum Processors", 
                      "Superposition State Management", 
                      "Quantum Entanglement Protocols", 
                      "Wave Function Collapse Engine",
                      "Parallel Universe Simulation",
                      "Quantum Error Correction",
                      "Decoherence Time Optimization",
                      "Quantum Supremacy Algorithms"
                    ],
                    stats: "99.97% Quantum Fidelity • 1.2μs Coherence Time • 10^18 Parallel States"
                  }
                },
                {
                  title: "AI Neural Networks",
                  description: "Self-evolving artificial intelligence that learns from every game",
                  color: "#f59e0b",
                  icon: "🧠",
                  details: {
                    overview: "Advanced GPT-7 based neural architectures with 175 billion parameters create opponents that develop unique personalities through reinforcement learning. Each AI entity possesses emotional intelligence, strategic memory banks, and adaptive behavioral patterns that evolve across millions of gameplay sessions.",
                    features: [
                      "175B Parameter Neural Networks", 
                      "Emotional Intelligence Engine", 
                      "Reinforcement Learning Core", 
                      "Strategic Memory Banks",
                      "Behavioral Pattern Recognition",
                      "Adaptive Difficulty Scaling",
                      "Personality Matrix Evolution",
                      "Multi-Agent Communication"
                    ],
                    stats: "175B Parameters • 94.7% Strategic Accuracy • 2.3M Games/Second"
                  }
                },
                {
                  title: "Blockchain Gaming",
                  description: "Decentralized tournaments with verified achievements",
                  color: "#10b981",
                  icon: "⛓️",
                  details: {
                    overview: "Built on Ethereum 3.0 with Layer-2 Polygon scaling, featuring smart contracts that govern tournament rules, prize distribution, and achievement verification. Each move is cryptographically signed and stored immutably across 15,000+ validator nodes worldwide.",
                    features: [
                      "Ethereum 3.0 Smart Contracts", 
                      "Layer-2 Polygon Scaling", 
                      "NFT Achievement System", 
                      "Decentralized Tournament Engine",
                      "Crypto Prize Pools",
                      "Zero-Knowledge Proofs",
                      "Cross-Chain Compatibility",
                      "DAO Governance System"
                    ],
                    stats: "15,247 Validator Nodes • 0.003 ETH Gas Fees • 99.99% Uptime"
                  }
                },
                {
                  title: "Liquid Glass UI",
                  description: "Immerse yourself in a translucent, ethereal interface",
                  color: "#06ffa5",
                  icon: "💎",
                  details: {
                    overview: "Revolutionary glassmorphism interface utilizing WebGL 3.0 and CSS Houdini APIs for real-time glass refraction simulation. The UI dynamically morphs based on biometric feedback, ambient lighting, and emotional state detection through facial micro-expression analysis.",
                    features: [
                      "WebGL 3.0 Glass Rendering", 
                      "CSS Houdini Real-time Effects", 
                      "Biometric UI Adaptation", 
                      "Emotion-Responsive Design",
                      "Haptic Feedback Integration",
                      "Ambient Light Synchronization",
                      "Micro-Expression Analysis",
                      "Neural Interface Protocol"
                    ],
                    stats: "120fps Glass Rendering • 16ms Response Time • 99.2% Emotion Accuracy"
                  }
                },
                {
                  title: "Metaverse Integration",
                  description: "Connect across infinite virtual worlds and realities",
                  color: "#8b5cf6",
                  icon: "🌐",
                  details: {
                    overview: "Seamless cross-platform integration spanning Meta Horizon, VRChat, Roblox, and 47 other metaverse platforms. Utilizes WebXR standards and AR Cloud technology to maintain persistent avatar identity and achievement synchronization across all virtual realms.",
                    features: [
                      "47+ Metaverse Platforms", 
                      "WebXR Standard Compliance", 
                      "AR Cloud Technology", 
                      "Persistent Avatar System",
                      "Cross-Reality Sync Engine",
                      "Virtual Physics Simulation",
                      "Spatial Audio Processing",
                      "Holographic Display Support"
                    ],
                    stats: "47 Connected Platforms • 2.3M Active Avatars • 99.8% Sync Reliability"
                  }
                },
                {
                  title: "Biometric Enhancement",
                  description: "Your heartbeat, brainwaves, and emotions control the game",
                  color: "#ef4444",
                  icon: "💓",
                  details: {
                    overview: "Advanced biosensor arrays including EEG brainwave monitoring, PPG heart rate variability, GSR stress detection, and EMG muscle tension analysis. The system uses machine learning to correlate physiological states with optimal game performance, creating truly personalized experiences.",
                    features: [
                      "EEG Brainwave Monitoring", 
                      "PPG Heart Rate Analysis", 
                      "GSR Stress Detection", 
                      "EMG Muscle Tension Mapping",
                      "Cortisol Level Tracking",
                      "Neurofeedback Optimization",
                      "Circadian Rhythm Sync",
                      "Cognitive Load Balancing"
                    ],
                    stats: "12 Biosensor Channels • 1kHz Sampling Rate • 97.4% Prediction Accuracy"
                  }
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  style={{
                    ...(expandedTile === index ? liquidGlassEffect : glassStyle),
                    padding: '2rem',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    transform: expandedTile === index ? 'scale(1.03)' : 'scale(1)',
                    minHeight: expandedTile === index ? '600px' : 'auto',
                    overflow: 'hidden'
                  }}
                  onClick={() => setExpandedTile(expandedTile === index ? null : index)}
                  onMouseEnter={(e) => {
                    if (expandedTile !== index) {
                      e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                      e.currentTarget.style.boxShadow = `
                        0 30px 80px rgba(31, 38, 135, 0.6),
                        0 0 0 1px ${feature.color}60,
                        inset 0 2px 0 rgba(255, 255, 255, 0.2)
                      `;
                      e.currentTarget.style.backdropFilter = 'blur(35px) saturate(1.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (expandedTile !== index) {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(31, 38, 135, 0.37), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.backdropFilter = 'blur(25px)';
                    }
                  }}
                >
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '16px',
                    background: `
                      linear-gradient(135deg, 
                        ${feature.color}90 0%, 
                        ${feature.color}70 50%, 
                        ${feature.color}90 100%
                      )
                    `,
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    boxShadow: `
                      0 8px 25px ${feature.color}40,
                      0 0 20px ${feature.color}20,
                      inset 0 1px 0 rgba(255, 255, 255, 0.2)
                    `,
                    border: `1px solid ${feature.color}60`,
                    position: 'relative' as const,
                    overflow: 'hidden'
                  }}>
                    {feature.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    color: 'white'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: '1.6',
                    marginBottom: expandedTile === index ? '2rem' : '0'
                  }}>
                    {feature.description}
                  </p>
                  
                  {/* Expanded Content */}
                  {expandedTile === index && (
                    <div 
                      className="expand-tile"
                      style={{
                        marginTop: '2rem',
                        padding: '2rem',
                        background: `
                          linear-gradient(135deg, 
                            rgba(255, 255, 255, 0.08) 0%,
                            rgba(255, 255, 255, 0.04) 50%,
                            rgba(255, 255, 255, 0.08) 100%
                          )
                        `,
                        backdropFilter: 'blur(20px)',
                        borderRadius: '16px',
                        border: `1px solid ${feature.color}40`,
                        boxShadow: `
                          0 8px 25px rgba(0, 0, 0, 0.3),
                          inset 0 1px 0 rgba(255, 255, 255, 0.15),
                          0 0 0 1px ${feature.color}20
                        `,
                        opacity: 0,
                        transform: 'translateY(30px) scale(0.95)'
                      }}
                    >
                      <div 
                        className="slide-in-content"
                        style={{
                          opacity: 0,
                          transform: 'translateY(20px)',
                          animationDelay: '0.2s'
                        }}
                      >
                        <h4 style={{
                          color: feature.color,
                          fontSize: '1.1rem',
                          marginBottom: '1rem',
                          fontWeight: '600'
                        }}>
                          Overview
                        </h4>
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          lineHeight: '1.6',
                          marginBottom: '1.5rem'
                        }}>
                          {feature.details.overview}
                        </p>
                      </div>
                      
                      <div 
                        className="slide-in-content"
                        style={{
                          opacity: 0,
                          transform: 'translateY(20px)',
                          animationDelay: '0.4s'
                        }}
                      >
                        <h4 style={{
                          color: feature.color,
                          fontSize: '1.1rem',
                          marginBottom: '1rem',
                          fontWeight: '600'
                        }}>
                          Key Features
                        </h4>
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                          gap: '0.5rem'
                        }}>
                          {feature.details.features.map((feat, idx) => (
                            <div 
                              key={idx} 
                              className="slide-in-content"
                              style={{
                                padding: '0.75rem 1rem',
                                background: `
                                  linear-gradient(135deg, 
                                    ${feature.color}25 0%, 
                                    ${feature.color}15 50%, 
                                    ${feature.color}25 100%
                                  )
                                `,
                                borderRadius: '10px',
                                fontSize: '0.9rem',
                                color: 'rgba(255, 255, 255, 0.95)',
                                textAlign: 'center',
                                border: `1px solid ${feature.color}30`,
                                backdropFilter: 'blur(10px)',
                                boxShadow: `0 2px 8px ${feature.color}20`,
                                transition: 'all 0.3s ease',
                                cursor: 'default',
                                opacity: 0,
                                transform: 'translateY(20px)',
                                animationDelay: `${0.5 + (idx * 0.05)}s`
                              }}
                            >
                              {feat}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div 
                        className="slide-in-content"
                        style={{
                          marginTop: '2rem',
                          padding: '1rem',
                          background: `
                            linear-gradient(135deg, 
                              ${feature.color}20 0%, 
                              ${feature.color}10 50%, 
                              ${feature.color}20 100%
                            )
                          `,
                          borderRadius: '12px',
                          border: `1px solid ${feature.color}50`,
                          textAlign: 'center',
                          opacity: 0,
                          transform: 'translateY(20px)',
                          animationDelay: '0.8s'
                        }}
                      >
                        <h5 style={{
                          color: feature.color,
                          fontSize: '0.9rem',
                          marginBottom: '0.5rem',
                          fontWeight: '600',
                          textTransform: 'uppercase',
                          letterSpacing: '1px'
                        }}>
                          Performance Stats
                        </h5>
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontSize: '0.85rem',
                          lineHeight: '1.4',
                          fontFamily: 'monospace'
                        }}>
                          {feature.details.stats}
                        </p>
                      </div>
                      
                      <div 
                        className="slide-in-content"
                        style={{
                          marginTop: '1.5rem',
                          textAlign: 'center',
                          opacity: 0,
                          transform: 'translateY(20px)',
                          animationDelay: '1s'
                        }}
                      >
                        <span style={{
                          color: 'rgba(255, 255, 255, 0.6)',
                          fontSize: '0.9rem'
                        }}>
                          Click to collapse
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          padding: '3rem 2rem',
          textAlign: 'center',
          marginTop: 'auto'
        }}>
          <div style={glassStyle}>
            <div style={{ padding: '2rem' }}>
              <h3 className="text-gradient" style={{
                fontSize: '1.5rem',
                marginBottom: '1rem'
              }}>
                Ready for the Future?
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '2rem'
              }}>
                Join thousands of players waiting for the next evolution of gaming
              </p>
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <button 
                  onClick={() => setShowWaitlistModal(true)}
                  className="glass-button"
                >
                  <span className="text-gradient">Join the Revolution</span>
                </button>
                <Link href="/about" className="glass-button">
                  Meet Our Team 🎪
                </Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Play Modal */}
        {showPlayModal && (
          <div className="modal-overlay" onClick={() => setShowPlayModal(false)}>
            <div 
              className="modal-content"
              style={liquidGlassEffect}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                🎮 Coming Soon!
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                The quantum-powered Tic-Tac-Toe experience is currently in development. Our team is crafting the most immersive gaming experience ever created.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button 
                  onClick={() => setShowPlayModal(false)}
                  className="glass-button"
                  style={{ fontSize: '0.9rem', padding: '12px 24px' }}
                >
                  Close
                </button>
                <button 
                  onClick={() => {
                    setShowPlayModal(false);
                    setShowWaitlistModal(true);
                  }}
                  className="glass-button"
                  style={{ fontSize: '0.9rem', padding: '12px 24px' }}
                >
                  <span className="text-gradient">Get Notified</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Waitlist Modal */}
        {showWaitlistModal && (
          <div className="modal-overlay" onClick={() => setShowWaitlistModal(false)}>
            <div 
              className="modal-content"
              style={liquidGlassEffect}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                🚀 Join the Revolution
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '2rem', lineHeight: '1.6' }}>
                Be among the first to experience the future of gaming. Enter your email to secure early access.
              </p>
              <form onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for joining the waitlist! We\'ll notify you when the game launches.');
                setShowWaitlistModal(false);
              }}>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    marginBottom: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '1rem',
                    backdropFilter: 'blur(10px)'
                  }}
                />
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <button 
                    type="button"
                    onClick={() => setShowWaitlistModal(false)}
                    className="glass-button"
                    style={{ fontSize: '0.9rem', padding: '12px 24px' }}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="glass-button"
                    style={{ fontSize: '0.9rem', padding: '12px 24px' }}
                  >
                    <span className="text-gradient">Join Waitlist</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
