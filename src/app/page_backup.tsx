'use client';

import { useState, useEffect } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [expandedTile, setExpandedTile] = useState<number | null>(null);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [showGameDemo, setShowGameDemo] = useState(false);
  const [email, setEmail] = useState('');
  const [waitlistStatus, setWaitlistStatus] = useState('');

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

  // Handler functions for buttons
  const handlePlayDemo = () => {
    setShowGameDemo(true);
  };

  const handleJoinWaitlist = () => {
    setShowWaitlistModal(true);
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate API call
      setWaitlistStatus('success');
      setEmail('');
      setTimeout(() => {
        setShowWaitlistModal(false);
        setWaitlistStatus('');
      }, 2000);
    }
  };

  const handleCloseModal = () => {
    setShowWaitlistModal(false);
    setShowGameDemo(false);
    setWaitlistStatus('');
    setEmail('');
  };

  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
    borderRadius: '20px',
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

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
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
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px' }}>
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
              <button onClick={handlePlayDemo} className="glass-button">
                <span className="text-gradient">Play the Future</span>
              </button>
              <button onClick={handleJoinWaitlist} className="glass-button">
                Join Waitlist
              </button>
            </div>
          </div>

          {/* Floating Tic-Tac-Toe Grid */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.15,
            zIndex: -1,
            ...glassStyle
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem'
            }}>
              {[
                {
                  title: "Quantum Strategy",
                  description: "Experience Tic-Tac-Toe with mind-bending quantum superposition mechanics",
                  color: "#00d4ff",
                  icon: "⚛️",
                  detailedInfo: {
                    overview: "Revolutionary quantum computing transforms traditional Tic-Tac-Toe into a multidimensional strategic experience.",
                    features: [
                      "Quantum Superposition: Place X and O simultaneously until observed",
                      "Entangled Moves: Actions affect multiple board positions across parallel universes",
                      "Probability Fields: Each square shows likelihood percentages of winning combinations",
                      "Wave Function Collapse: Strategic measurement collapses quantum states into definitive moves"
                    ],
                    impact: "Players must think beyond classical logic, considering probability distributions and quantum interference patterns to achieve victory."
                  }
                },
                {
                  title: "Liquid Glass UI",
                  description: "Immerse yourself in a translucent, ethereal interface with real-time morphing",
                  color: "#b347d9",
                  icon: "💎",
                  detailedInfo: {
                    overview: "Advanced glassmorphism creates an intuitive, beautiful interface that responds dynamically to player actions.",
                    features: [
                      "Adaptive Transparency: Glass opacity changes based on game state and tension",
                      "Morphing Geometry: Board squares reshape and flow like liquid during animations",
                      "Depth Perception: Multi-layered glass creates true 3D spatial awareness",
                      "Emotional Resonance: Colors and blur effects reflect player emotions and strategies"
                    ],
                    impact: "The interface becomes an extension of the player's mind, creating unprecedented immersion and reducing cognitive load."
                  }
                },
                {
                  title: "Neural Networks",
                  description: "AI opponents powered by deep learning algorithms that evolve with each game",
                  color: "#ff006e",
                  icon: "🧠",
                  detailedInfo: {
                    overview: "Sophisticated neural networks create AI opponents that learn, adapt, and provide personalized challenges.",
                    features: [
                      "Dynamic Learning: AI analyzes your playing style and adapts strategies in real-time",
                      "Emotion Recognition: Facial recognition detects frustration and adjusts difficulty accordingly",
                      "Pattern Evolution: Neural pathways grow stronger with each game, creating unique AI personalities",
                      "Strategic Mimicry: AI can learn to play like famous grandmasters or mirror your own style"
                    ],
                    impact: "Every game becomes a unique intellectual duel against an opponent that grows smarter and more challenging."
                  }
                },
                {
                  title: "Blockchain Gaming",
                  description: "Decentralized gameplay with NFT victories and crypto-powered tournaments",
                  color: "#06ffa5",
                  icon: "⛓️",
                  detailedInfo: {
                    overview: "Blockchain technology ensures transparent, verifiable gameplay while creating economic opportunities for players.",
                    features: [
                      "NFT Achievements: Rare victories become collectible digital assets with real value",
                      "Smart Contracts: Automated tournament payouts and fair play enforcement",
                      "Decentralized Leaderboards: Immutable ranking systems across the global player base",
                      "Crypto Rewards: Earn tokens for strategic brilliance and consistent performance"
                    ],
                    impact: "Transform gaming skills into tangible assets while ensuring fair, transparent competition on a global scale."
                  }
                },
                {
                  title: "Metaverse Integration",
                  description: "Cross-platform reality bridging virtual worlds with Web3 connectivity",
                  color: "#ff9500",
                  icon: "🌐",
                  detailedInfo: {
                    overview: "Seamless integration across virtual worlds creates a unified gaming experience that transcends platform boundaries.",
                    features: [
                      "Cross-Reality Play: Continue games across VR, AR, and traditional screens",
                      "Avatar Persistence: Your digital identity and achievements follow you everywhere",
                      "Virtual Venues: Play in stunning 3D environments from space stations to underwater cities",
                      "Social Hubs: Meet players in virtual lobbies before entering intense matches"
                    ],
                    impact: "Gaming becomes a social, persistent experience that exists across all digital realities and platforms."
                  }
                },
                {
                  title: "Edge Computing",
                  description: "Ultra-low latency gameplay powered by distributed cloud infrastructure",
                  color: "#00ffff",
                  icon: "⚡",
                  detailedInfo: {
                    overview: "Cutting-edge distributed computing ensures instantaneous responses and seamless multiplayer experiences.",
                    features: [
                      "Sub-millisecond Response: Moves register faster than human reaction time",
                      "Predictive Caching: AI anticipates moves and pre-loads game states",
                      "Geographic Optimization: Servers automatically route to closest nodes",
                      "Adaptive Bandwidth: Quality adjusts seamlessly based on connection strength"
                    ],
                    impact: "Experience Tic-Tac-Toe as if the digital board exists in the same physical space as the player."
                  }
                },
                {
                  title: "Machine Learning",
                  description: "Adaptive difficulty scaling using predictive analytics and behavioral patterns",
                  color: "#ff1493",
                  icon: "🤖",
                  detailedInfo: {
                    overview: "Advanced machine learning creates personalized gaming experiences that evolve with player skill and preferences.",
                    features: [
                      "Skill Assessment: Continuous evaluation of strategic thinking and reaction times",
                      "Adaptive Difficulty: Game complexity adjusts to maintain optimal challenge level",
                      "Behavioral Prediction: AI anticipates player moves based on historical patterns",
                      "Personalized Tutorials: Custom learning paths based on individual weaknesses and strengths"
                    ],
                    impact: "Every player receives a perfectly calibrated experience that maximizes learning, enjoyment, and skill development."
                  }
                },
                {
                  title: "Quantum Entanglement",
                  description: "Synchronized multiplayer moves across parallel dimensions and timelines",
                  color: "#8a2be2",
                  icon: "🔮",
                  detailedInfo: {
                    overview: "Quantum entanglement creates mysteriously connected game states that transcend traditional multiplayer limitations.",
                    features: [
                      "Spooky Action: Moves on one board instantly affect entangled boards worldwide",
                      "Timeline Synchronization: Play across multiple parallel game universes simultaneously",
                      "Quantum Communication: Send information faster than light through entangled game states",
                      "Dimensional Strategy: Plan moves that ripple across infinite game possibilities"
                    ],
                    impact: "Multiplayer gaming becomes a mind-bending exploration of quantum mechanics and parallel realities."
                  }
                },
                {
                  title: "Digital Twin Reality",
                  description: "Mirror your gameplay across physical and virtual spaces with IoT sensors",
                  color: "#1e90ff",
                  icon: "👥",
                  detailedInfo: {
                    overview: "IoT sensors create perfect digital replicas of physical gameplay, blending real and virtual experiences.",
                    features: [
                      "Physical Board Sync: Real Tic-Tac-Toe boards connect to digital gameplay",
                      "Gesture Recognition: Hand movements control virtual pieces with precision",
                      "Environmental Awareness: Room lighting and temperature affect game atmosphere",
                      "Biometric Integration: Heart rate and stress levels influence game dynamics"
                    ],
                    impact: "The boundary between physical and digital gaming dissolves, creating hybrid experiences of unprecedented immersion."
                  }
                },
                {
                  title: "Zero-Knowledge Proofs",
                  description: "Privacy-preserving gameplay with cryptographic move verification",
                  color: "#32cd32",
                  icon: "🔐",
                  detailedInfo: {
                    overview: "Advanced cryptography ensures complete privacy while maintaining verifiable fair play and transparent outcomes.",
                    features: [
                      "Hidden Strategies: Prove move validity without revealing strategic thinking",
                      "Anonymous Competition: Compete without exposing identity or personal data",
                      "Cryptographic Verification: Mathematical proof of fair play without data exposure",
                      "Private Rankings: Maintain competitive standings while preserving anonymity"
                    ],
                    impact: "Competitive gaming achieves perfect balance between transparency and privacy protection."
                  }
                },
                {
                  title: "Photonic Processing",
                  description: "Light-speed game calculations using optical quantum processors",
                  color: "#ffd700",
                  icon: "🌟",
                  detailedInfo: {
                    overview: "Optical quantum computers process game logic at the speed of light, enabling real-time complex calculations.",
                    features: [
                      "Light-Speed Computation: Game state calculations occur at photonic velocities",
                      "Optical Neural Networks: Light-based AI processing for instantaneous strategic analysis",
                      "Quantum Interference: Optical phenomena create new types of game mechanics",
                      "Holographic Storage: Massive game databases stored in optical crystals"
                    ],
                    impact: "Game complexity increases exponentially while maintaining real-time responsiveness impossible with traditional computing."
                  }
                },
                {
                  title: "Biomimetic AI",
                  description: "Neural pathways inspired by human cognition for intuitive gameplay",
                  color: "#ff6347",
                  icon: "🧬",
                  detailedInfo: {
                    overview: "AI systems modeled after human brain structures create opponents that think and react like human players.",
                    features: [
                      "Synaptic Learning: AI develops neural pathways similar to human memory formation",
                      "Emotional Processing: Artificial emotions influence AI decision-making processes",
                      "Intuitive Responses: AI makes 'gut feeling' moves based on pattern recognition",
                      "Cognitive Fatigue: AI performance varies with simulated mental energy levels"
                    ],
                    impact: "Playing against AI becomes indistinguishable from human competition, with all the unpredictability and emotional depth."
                  }
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  style={{
                    ...glassStyle,
                    padding: expandedTile === index ? '3rem' : '2rem',
                    transition: 'all 0.4s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    minHeight: expandedTile === index ? '600px' : 'auto',
                  }}
                  onClick={() => setExpandedTile(expandedTile === index ? null : index)}
                  onMouseEnter={(e) => {
                    if (expandedTile !== index) {
                      e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                      e.currentTarget.style.boxShadow = `0 25px 80px ${feature.color}40`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (expandedTile !== index) {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(31, 38, 135, 0.37)';
                    }
                  }}
                >
                  {/* Animated background gradient */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: expandedTile === index 
                      ? `linear-gradient(135deg, ${feature.color}20 0%, ${feature.color}10 50%, transparent 100%)`
                      : `linear-gradient(135deg, ${feature.color}10 0%, transparent 50%)`,
                    opacity: expandedTile === index ? 0.6 : 0.3,
                    transition: 'all 0.4s ease'
                  }}></div>
                  
                  <div style={{
                    width: expandedTile === index ? '80px' : '70px',
                    height: expandedTile === index ? '80px' : '70px',
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, ${feature.color}, ${feature.color}CC)`,
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: expandedTile === index ? '2.5rem' : '2rem',
                    boxShadow: `0 8px 25px ${feature.color}40`,
                    position: 'relative',
                    zIndex: 1,
                    transition: 'all 0.4s ease'
                  }}>
                    {feature.icon}
                  </div>
                  
                  <h3 style={{
                    fontSize: expandedTile === index ? '1.8rem' : '1.4rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    color: 'white',
                    position: 'relative',
                    zIndex: 1,
                    background: `linear-gradient(135deg, white, ${feature.color})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    transition: 'all 0.4s ease'
                  }}>
                    {feature.title}
                    {expandedTile === index && (
                      <span style={{
                        marginLeft: '10px',
                        fontSize: '1rem',
                        opacity: 0.7
                      }}>
                        ✕
                      </span>
                    )}
                  </h3>
                  
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6',
                    fontSize: '0.95rem',
                    position: 'relative',
                    zIndex: 1,
                    marginBottom: expandedTile === index ? '2rem' : '0'
                  }}>
                    {feature.description}
                  </p>

                  {/* Expanded Content */}
                  {expandedTile === index && feature.detailedInfo && (
                    <div style={{
                      position: 'relative',
                      zIndex: 1,
                      animation: 'fadeInUp 0.5s ease-out'
                    }}>
                      <div style={{
                        background: `linear-gradient(135deg, ${feature.color}15, transparent)`,
                        padding: '1.5rem',
                        borderRadius: '12px',
                        marginBottom: '1.5rem',
                        border: `1px solid ${feature.color}30`
                      }}>
                        <h4 style={{
                          color: feature.color,
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          marginBottom: '0.8rem'
                        }}>
                          Revolutionary Gaming Impact
                        </h4>
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          lineHeight: '1.6',
                          fontSize: '0.95rem'
                        }}>
                          {feature.detailedInfo.overview}
                        </p>
                      </div>

                      <div style={{ marginBottom: '1.5rem' }}>
                        <h4 style={{
                          color: 'white',
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          marginBottom: '1rem'
                        }}>
                          Advanced Features
                        </h4>
                        <ul style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0
                        }}>
                          {feature.detailedInfo.features.map((item: string, featureIndex: number) => (
                            <li key={featureIndex} style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              marginBottom: '0.8rem',
                              color: 'rgba(255, 255, 255, 0.85)',
                              fontSize: '0.9rem',
                              lineHeight: '1.5'
                            }}>
                              <span style={{
                                color: feature.color,
                                marginRight: '0.8rem',
                                fontSize: '1.2rem',
                                flexShrink: 0
                              }}>
                                ◆
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div style={{
                        background: `linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent)`,
                        padding: '1.5rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>
                        <h4 style={{
                          color: 'white',
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          marginBottom: '0.8rem'
                        }}>
                          Game-Changing Impact
                        </h4>
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          lineHeight: '1.6',
                          fontSize: '0.95rem',
                          fontStyle: 'italic'
                        }}>
                          {feature.detailedInfo.impact}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Subtle border glow effect */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    border: `1px solid ${expandedTile === index ? feature.color + '50' : feature.color + '30'}`,
                    borderRadius: '20px',
                    pointerEvents: 'none',
                    transition: 'all 0.4s ease'
                  }}></div>
                  
                  {/* Click indicator */}
                  {expandedTile !== index && (
                    <div style={{
                      position: 'absolute',
                      bottom: '1rem',
                      right: '1rem',
                      color: feature.color,
                      fontSize: '0.8rem',
                      opacity: 0.6,
                      fontWeight: '500'
                    }}>
                      Click to expand
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
              <a href="#waitlist" className="glass-button">
                <span className="text-gradient">Join the Revolution</span>
              </a>
            </div>
          </div>
        </footer>

        {/* Waitlist Modal */}
        {showWaitlistModal && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10000,
              backdropFilter: 'blur(10px)',
            }}
            onClick={handleCloseModal}
          >
            <div 
              style={{
                ...glassStyle,
                padding: '2rem',
                maxWidth: '400px',
                width: '90%',
                textAlign: 'center',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 style={{ 
                color: 'white', 
                marginBottom: '1rem',
                fontSize: '1.5rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Join the Future
              </h3>
              
              {waitlistStatus === 'success' ? (
                <div style={{ color: '#4ade80', fontSize: '1.1rem' }}>
                  🚀 Welcome to the future! You're on the waitlist.
                </div>
              ) : (
                <form onSubmit={handleWaitlistSubmit}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      marginBottom: '1rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '10px',
                      color: 'white',
                      fontSize: '1rem',
                    }}
                  />
                  <button 
                    type="submit"
                    className="glass-button"
                    style={{ width: '100%', marginBottom: '1rem' }}
                  >
                    Join Waitlist
                  </button>
                </form>
              )}
              
              <button 
                onClick={handleCloseModal}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Game Demo Modal */}
        {showGameDemo && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.9)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10000,
              backdropFilter: 'blur(10px)',
            }}
            onClick={handleCloseModal}
          >
            <div 
              style={{
                ...glassStyle,
                padding: '2rem',
                maxWidth: '500px',
                width: '90%',
                textAlign: 'center',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 style={{ 
                color: 'white', 
                marginBottom: '1.5rem',
                fontSize: '1.8rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                🎮 Future Tic-Tac-Toe Demo
              </h3>
              
              <div style={{ 
                color: 'rgba(255, 255, 255, 0.9)', 
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                <p style={{ marginBottom: '1rem' }}>
                  🚀 <strong>Quantum Strategy:</strong> Moves exist in superposition until observed
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  🧠 <strong>AI Opponent:</strong> Learns your patterns in real-time
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  🌐 <strong>Blockchain Verified:</strong> Every move is cryptographically secure
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  ✨ <strong>Liquid Glass UI:</strong> Immersive glassmorphism experience
                </p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '1rem',
                borderRadius: '10px',
                marginBottom: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <p style={{ color: '#4ade80', fontSize: '1.1rem' }}>
                  🎯 Full demo coming soon!<br/>
                  Join the waitlist for early access.
                </p>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button 
                  onClick={() => {
                    setShowGameDemo(false);
                    setShowWaitlistModal(true);
                  }}
                  className="glass-button"
                >
                  Join Waitlist
                </button>
                <button 
                  onClick={handleCloseModal}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: 'rgba(255, 255, 255, 0.7)',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Feature Detail Modal */}
        {expandedTile !== null && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.9)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10000,
              backdropFilter: 'blur(10px)',
              padding: '2rem',
            }}
            onClick={handleCloseModal}
          >
            <div 
              style={{
                ...glassStyle,
                padding: '3rem',
                maxWidth: '700px',
                width: '100%',
                maxHeight: '80vh',
                overflowY: 'auto',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const features = [
                  {
                    title: "Quantum Strategy",
                    description: "Experience Tic-Tac-Toe with mind-bending quantum superposition mechanics",
                    color: "#00d4ff",
                    icon: "⚛️",
                    detailedInfo: {
                      overview: "Revolutionary quantum computing transforms traditional Tic-Tac-Toe into a multidimensional strategic experience.",
                      features: [
                        "Quantum Superposition: Place X and O simultaneously until observed",
                        "Entangled Moves: Actions affect multiple board positions across parallel universes",
                        "Probability Fields: Each square shows likelihood percentages of winning combinations",
                        "Wave Function Collapse: Strategic measurement collapses quantum states into definitive moves"
                      ],
                      impact: "Players must think beyond classical logic, considering probability distributions and quantum interference patterns to achieve victory."
                    }
                  },
                  {
                    title: "Liquid Glass UI",
                    description: "Immerse yourself in a translucent, ethereal interface with real-time morphing",
                    color: "#b347d9",
                    icon: "💎",
                    detailedInfo: {
                      overview: "Advanced glassmorphism creates an intuitive, beautiful interface that responds dynamically to player actions.",
                      features: [
                        "Adaptive Transparency: Glass opacity changes based on game state and tension",
                        "Morphing Geometry: Board squares reshape and flow like liquid during animations",
                        "Depth Perception: Multi-layered glass creates true 3D spatial awareness",
                        "Emotional Resonance: Colors and blur effects reflect player emotions and strategies"
                      ],
                      impact: "The interface becomes an extension of the player's mind, creating unprecedented immersion and reducing cognitive load."
                    }
                  },
                  // Add other features here...
                ];
                const feature = features[expandedTile];
                if (!feature) return null;

                return (
                  <>
                    <button 
                      onClick={handleCloseModal}
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'transparent',
                        border: 'none',
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '2rem',
                        cursor: 'pointer',
                        padding: '0.5rem',
                        lineHeight: '1',
                      }}
                    >
                      ✕
                    </button>

                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '2rem' 
                    }}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '20px',
                        background: `linear-gradient(135deg, ${feature.color}, ${feature.color}CC)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '3rem',
                        marginRight: '1.5rem',
                        boxShadow: `0 10px 30px ${feature.color}40`,
                      }}>
                        {feature.icon}
                      </div>
                      <div>
                        <h2 style={{
                          fontSize: '2.5rem',
                          fontWeight: 'bold',
                          margin: '0 0 0.5rem 0',
                          background: `linear-gradient(135deg, ${feature.color}, white)`,
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}>
                          {feature.title}
                        </h2>
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontSize: '1.1rem',
                          margin: 0,
                        }}>
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {feature.detailedInfo && (
                      <>
                        <div style={{
                          background: `linear-gradient(135deg, ${feature.color}15, transparent)`,
                          padding: '2rem',
                          borderRadius: '15px',
                          marginBottom: '2rem',
                          border: `1px solid ${feature.color}30`
                        }}>
                          <h3 style={{
                            color: feature.color,
                            fontSize: '1.3rem',
                            fontWeight: '600',
                            marginBottom: '1rem'
                          }}>
                            Revolutionary Gaming Impact
                          </h3>
                          <p style={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            lineHeight: '1.7',
                            fontSize: '1rem'
                          }}>
                            {feature.detailedInfo.overview}
                          </p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                          <h3 style={{
                            color: 'white',
                            fontSize: '1.3rem',
                            fontWeight: '600',
                            marginBottom: '1.5rem'
                          }}>
                            Advanced Features
                          </h3>
                          <div style={{
                            display: 'grid',
                            gap: '1rem'
                          }}>
                            {feature.detailedInfo.features.map((item: string, idx: number) => (
                              <div key={idx} style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                background: 'rgba(255, 255, 255, 0.05)',
                                padding: '1rem',
                                borderRadius: '10px',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                              }}>
                                <span style={{
                                  color: feature.color,
                                  marginRight: '1rem',
                                  fontSize: '1.5rem',
                                  flexShrink: 0
                                }}>
                                  ◆
                                </span>
                                <span style={{
                                  color: 'rgba(255, 255, 255, 0.9)',
                                  fontSize: '1rem',
                                  lineHeight: '1.6'
                                }}>
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div style={{
                          background: `linear-gradient(135deg, rgba(255, 255, 255, 0.08), transparent)`,
                          padding: '2rem',
                          borderRadius: '15px',
                          border: '1px solid rgba(255, 255, 255, 0.15)'
                        }}>
                          <h3 style={{
                            color: 'white',
                            fontSize: '1.3rem',
                            fontWeight: '600',
                            marginBottom: '1rem'
                          }}>
                            Game-Changing Impact
                          </h3>
                          <p style={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            lineHeight: '1.7',
                            fontSize: '1rem',
                            fontStyle: 'italic'
                          }}>
                            {feature.detailedInfo.impact}
                          </p>
                        </div>
                      </>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
